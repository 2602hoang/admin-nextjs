import { InputRef } from "antd";
import { useRef, useState } from "react";
import { useQuery } from "react-query";

// Fetch paginated photos
const fetchPhotoData = async (page: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=52`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }
  return res.json();
};
const fetchPhotoById = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
};

export const useFetchPhotoData = (page: number, searchId?: number) => {
  const { data, isLoading, error } = useQuery(
    searchId ? ["photo", searchId] : ["photos", page],
    () => (searchId ? fetchPhotoById(searchId) : fetchPhotoData(page)),
    {
      keepPreviousData: true,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );
  return { data, isLoading, error };
};
export const useLeaderboard = () => {
  const [page, setPage] = useState(1);
  const [searchId, setSearchId] = useState<number | "">("");
  const inputRef = useRef<InputRef>(null);

  const handleClear = () => {
    setSearchId("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return {
    page,
    setPage,
    searchId,
    setSearchId,
    inputRef,
    handleClear,
  };
};
