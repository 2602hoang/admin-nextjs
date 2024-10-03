import { InputRef } from "antd";
import axios from "axios";
import { useRef, useState } from "react";
import { useQuery } from "react-query";
import { Photos } from "./page";

const fetchPhotoData = async (limit: number) => {
  const res = await axios.get<Photos[]>(
    `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`
  );
  if (!res.data) {
    return null;
  }
  return res.data;
};

const fetchPhotoById = async (id: number) => {
  const res = await axios.get<Photos>(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  if (!res.data) {
    return null;
  }
  return res.data;
};

export const useFetchPhotoData = (limit: number) => {
  const { data, isLoading, error } = useQuery(
    ["photos", limit],
    () => fetchPhotoData(limit),
    {
      keepPreviousData: true,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      onError: (err) => console.error("Error fetching photos:", err),
    }
  );

  return {
    data,
    isLoading,
    error,
    fetchPhotoById,
  };
};

export const useLeaderboard = () => {
  const [limit, setLimit] = useState(52);
  const inputRef = useRef<InputRef>(null);
  const [open, setOpen] = useState<boolean>(false);

  const [selectedPhoto, setSelectedPhoto] = useState<Photos | null>(null);

  const handleCancel = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const addMorePhotos = () => {
    setIsLoadingMore(true);
    setLimit((prevLimit) => prevLimit + 48);
    setTimeout(() => {
      setIsLoadingMore(false);
    }, 3000);
  };
  const moveMorePhotos = () => {
    setIsLoadingMore(true);
    setLimit((prevLimit) => prevLimit - 48);
    setTimeout(() => {
      setIsLoadingMore(false);
    }, 3000);
  };
  return {
    addMorePhotos,
    moveMorePhotos,
    isLoadingMore,
    limit,
    open,
    handleCancel,
    selectedPhoto,
    setSelectedPhoto,
    setOpen,
    setLimit,
    inputRef,
    handleClear,
  };
};
