import { useAuth } from "@/contexts/AuthContext";
import { useAxios } from "@/providers/AxiosProvider";
import { useState } from "react";
import { useQuery } from "react-query";

export interface User {
  id_user: string;
  username: string;
  phone: string;
  avatar: string;
  status: boolean;
}
export const useFetchUserData = () => {
  const { userId } = useAuth();
  const { axiosInstance } = useAxios();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPassword("");
  };

  const handlePasswordSubmit = (password: string) => {
    console.log("Password submitted:", password);
    handleCloseModal();
  };

  const fetchUserData = async () => {
    const response = await axiosInstance.get<{ user: User }>(
      `api/v1/user/getone/${userId}`
    );
    return response.data.user;
  };

  const {
    data: user,
    isLoading,
    error,
  } = useQuery(["user", userId], fetchUserData, {
    cacheTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
  });

  return {
    user,
    isLoading,
    error,
    isModalOpen,
    password,
    handleOpenModal,
    handleCloseModal,
    setPassword,
    handlePasswordSubmit,
  };
};
