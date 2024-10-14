import { useAuth } from "@/contexts/AuthContext";
import { useAxios } from "@/providers/AxiosProvider";
import { notification } from "antd";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export interface User {
  id_user: number;
  username: string;
  phone: string;
  avatar: string;
  password: string;
  status: boolean;
}

export const useFetchUserData = () => {
  const { userId, userToken } = useAuth();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  const updateUserData = async (
    selectedUserId: number,
    userData: Partial<User>
  ) => {
    const response = await axiosInstance(0).put(
      `api/v1/user/update/${selectedUserId}`,
      userData
    );
    return response.data;
  };
    const fetchUserData = async () => {
    const response = await axiosInstance(0).get<{ user: User }>(
      `api/v1/user/getone/${userId}`
    );
    return response.data.user;
  };

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery<User, Error>(["user", userId], fetchUserData, {
    enabled: !!userId && !!userToken,
  });

  const mutation = useMutation(
    (userData: { selectedUserId: number; data: Partial<User> }) =>
      updateUserData(userData.selectedUserId, userData.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user", userId]);
        setCheck(!check);
        notification.success({
          message: "Success",
          description: "Information updated successfully",
          duration: 1.5,
          showProgress: true,
        });
        handleCloseModal();
      },
      onError: (error: Error) => {
        notification.error({
          message: "Error",
          description: error.message,
          duration: 1.5,
          showProgress: true,
        });
      },
    }
  );

  const handleUpdateUser = (selectedUserId: number) => {
    if (selectedUserId === null) return;

    const updatedData: Partial<User> = {
      username: username || user?.username,
      phone: phone || user?.phone,
      ...(password ? { password } : {}),
    };

    mutation.mutate({ selectedUserId: selectedUserId, data: updatedData });
  };
  const areFieldsEmpty = () => {
    return !username && !phone && !password;
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
    check,
    setCheck,
    refetch,
    areFieldsEmpty,
  };
};
