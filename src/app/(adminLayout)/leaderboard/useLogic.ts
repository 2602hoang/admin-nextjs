import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Photos } from "./page";
import { useAxios } from "@/providers/AxiosProvider";
import { notification } from "antd";

export const useLeaderboard = () => {
  const { axiosInstance } = useAxios();
  const [limit, setLimit] = useState<number>(52);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photos | null>(null);
  const [searchId, setSearchId] = useState<string>("");
  const [debouncedSearchId, setDebouncedSearchId] = useState<string>("");
  const [notificationShown, setNotificationShown] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) || value === "") {
      setSearchId(value);
      setNotificationShown(false);
    } else if (!notificationShown) {
      notification.error({
        message: "Invalid Input",
        description:
          "Please enter a valid numeric ID without any letters or spaces.",
        duration: 7,
      });
      setNotificationShown(true);
    }
  };
  const openModal = async (id: number) => {
    const photo = await fetchPhotoById(id);
    setSelectedPhoto(photo);
    setOpen(true);
  };

  const fetchPhotoData = async () => {
    const res = await axiosInstance(1).get<Photos[]>(`/photos?_limit=${limit}`);
    return res.data;
  };

  const fetchPhotoById = async (id: number) => {
    const res = await axiosInstance(1).get<Photos>(`/photos/${id}`);
    return res.data;
  };
  const {
    data: photo,
    isLoading: isLoadingPhoto,
    error: errorPhoto,
  } = useQuery<Photos, Error>(
    ["photo", selectedPhoto?.id],
    () => fetchPhotoById(selectedPhoto?.id as number),
    {
      enabled: !!selectedPhoto,
    }
  );
  const updatePhotos = async (delta: number) => {
    setLimit((prevLimit) => Math.max(prevLimit + delta, 1));
  };

  const searchPhotoById = async (id: number) => {
    try {
      const photo = await fetchPhotoById(id);
      setSelectedPhoto(photo);
      setOpen(true);
      notification.success({
        message: "Success",
        description: `Photo ${id}`,
      });
      setSearchId("");
    } catch (error) {
      notification.error({
        message: "Not found",
        description: `Photo not found. Please check the ID = ${id}.`,
        duration: 2,
      });
    }
  };

  const handleSearch = () => {
    const id = parseInt(debouncedSearchId, 10);
    if (!isNaN(id) && id > 0 && id <= 5000) {
      searchPhotoById(id);
    } else {
      notification.error({
        message: "Invalid ID",
        description: "Please enter a valid numeric ID (1-5000).",
        duration: 2,
      });
    }
  };

  const {
    data,
    isLoading: isLoadingPhotos,
    error,
  } = useQuery<Photos[], Error>(["photos", limit], fetchPhotoData, {
    keepPreviousData: true,
    onError: (error: Error) => {
      notification.error({
        message: "Error Fetching Photos",
        description: error.message,
        duration: 1.5,
      });
    },
  });

  const handleCancel = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchId(searchId);
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchId]);

  useEffect(() => {
    if (debouncedSearchId) {
      handleSearch();
    }
  }, [debouncedSearchId]);

  const spin =
    searchId.length > 0 && parseInt(searchId) <= 5000 && !selectedPhoto;

  return {
    spin,
    addMorePhotos: () => updatePhotos(50),
    moveMorePhotos: () => updatePhotos(-50),
    limit,
    open,
    handleCancel,
    selectedPhoto,
    setSelectedPhoto,
    setOpen,
    data,
    isLoadingPhotos,
    error,
    photo,
    isLoadingPhoto,
    errorPhoto,
    fetchPhotoById,
    openModal,
    setSearchId,
    handleSearchChange,
    searchId,
  };
};
