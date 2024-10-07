import { useState } from "react";
import { useQuery } from "react-query";
import { Photos } from "./page";
import { useAxios } from "@/providers/AxiosProvider";

export const useLeaderboard = () => {
  const { axiosInstance } = useAxios();
  const [limit, setLimit] = useState(52);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photos | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchPhotoData = async () => {
    const res = await axiosInstance(1).get<Photos[]>(`/photos?_limit=${limit}`);
    return res.data;
  };

  const fetchPhotoById = async (id: number) => {
    const res = await axiosInstance(1).get<Photos>(`/photos/${id}`);
    return res.data;
  };

  const {
    data,
    isLoading: isLoadingPhotos,
    error,
  } = useQuery(["photos", limit], fetchPhotoData, {
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    onError: (err) => console.error("Error fetching photos:", err),
  });

  const handleCancel = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

  const updatePhotos = async (delta: number) => {
    setIsLoadingMore(true);
    setLimit((prevLimit) => Math.max(prevLimit + delta, 1));
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await fetchPhotoData();
    } catch (error) {
      console.error("Error updating photos:", error);
    } finally {
      setIsLoadingMore(false);
    }
  };
  return {
    addMorePhotos: () => updatePhotos(50),
    moveMorePhotos: () => updatePhotos(-50),
    isLoadingMore,
    limit,
    open,
    handleCancel,
    selectedPhoto,
    setSelectedPhoto,
    setOpen,
    data,
    isLoadingPhotos,
    error,
    fetchPhotoById,
  };
};
