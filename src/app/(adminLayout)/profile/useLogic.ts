import { useAuth } from "@/contexts/AuthContext";
import { useAxios } from "@/providers/AxiosProvider";
import { notification } from "antd";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export interface User {
  id_user: string;
  username: string;
  phone: string;
  avatar: string;
  password: string;
  status: boolean;
}

export const useFetchUserData = () => {
  const { userId } = useAuth();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fetchUserData = async () => {
    const response = await axiosInstance(0).get<{ user: User }>(
      `api/v1/user/getone/${userId}`
    );
    return response.data.user;
  };

  const updateUserData = async (userData: Partial<User>) => {
    const response = await axiosInstance(0).put(
      `api/v1/user/update/${userId}`,
      userData
    );
    return response.data;
  };
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<User, Error>(["user", userId], fetchUserData, {
    cacheTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
  });

  const mutation = useMutation(updateUserData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["user", userId]);
      handleCloseModal();
      notification.success({
        message: "Success",
        description: "Information updated successfully",
        duration: 1.5,
      });
    },
    onError: (error: Error) => {
      handleCloseModal();
      notification.error({
        message: "Error",
        description: error.message,
        duration: 1.5,
      });
    },
  });

  const handleUpdateUser = () => {
    const updatedData: Partial<User> = {
      username: username || user?.username,
      phone: phone || user?.phone,
      ...(password ? { password } : {}),
    };

    mutation.mutate(updatedData);
  };

  return {
    user,
    isLoading,
    error,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    setPassword,
    setUsername,
    setPhone,
    password,
    username,
    phone,
    handleUpdateUser,
  };
};
