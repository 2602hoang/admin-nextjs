import { useAxios } from "@/providers/AxiosProvider";
import { useFetchUserData, User } from "../profile/useLogic";
import { useQuery, useQueryClient } from "react-query";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { notification } from "antd";
export interface UserReport {
  id_user: number;
  orderCount: number;
  totalSpent: number;
  user: User;
}

export interface ReportResponse {
  totalUsers: number;
  activeCount: number;
  inactiveCount: number;
  inactiveUsers: User[];
  activeUsers: User[];
}

export const useLogicReportUser = () => {
  const { axiosInstance } = useAxios();
  const { userId } = useAuth();
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const {
    isModalOpen,
    handleCloseModal,
    handleOpenModal,
    setPassword,
    setUsername,
    setPhone,
    password,
    username,
    phone,
    handleUpdateUser,
  } = useFetchUserData();
  const onDateChange = (
    dates: [Dayjs | null, Dayjs | null] | null,
    dateStrings: [string, string]
  ) => {
    if (dates) {
      setStartDate(dateStrings[0]);
      setEndDate(dateStrings[1]);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  const fetchUserReport = async () => {
    const res = await axiosInstance(0).get<ReportResponse>(
      `api/v1/thongke/user/all`
    );
    return res.data;
  };

  const { data, isLoading, error } = useQuery("userReport", fetchUserReport);

  const fetchUserData = async () => {
    if (!startDate || !endDate) {
      throw new Error("Start date and end date are required");
    }
    const res = await axiosInstance(0).get<{
      [x: string]: any;
      userData: UserReport[];
    }>(`api/v1/thongke/user/order/3`, {
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    });
    return res.data;
  };

  const {
    data: userData,
    isLoading: isLoadingUserData,
    error: errorUserData,
  } = useQuery(["userData", startDate, endDate], fetchUserData, {
    enabled: !!startDate && !!endDate,
  });
  const handleViewClick = () => {
    const today = dayjs();
    const sevenDaysAgo = today.subtract(7, "day");
    onDateChange(
      [sevenDaysAgo, today],
      [sevenDaysAgo.format("YYYY-MM-DD"), today.format("YYYY-MM-DD")]
    );
  };
  const dateRangeText = () => {
    if (startDate && endDate) {
      const start = dayjs(startDate).format("YYYY-MM-DD");
      const end = dayjs(endDate).format("YYYY-MM-DD");
      return `Top three users with the most orders from ${start} to ${end}`;
    }
    return "Top three users with the most orders 7 days ago";
  };

  const openModalWithUser = (user: User) => {
    setSelectedUser(user);
    handleOpenModal();
    setUsername(user.username);
    setPhone(user.phone);
  };

  const queryClient = useQueryClient();

  const refetchUserReport = () => {
    queryClient.invalidateQueries("userReport");
  };

  const handleUpdateSelectedUser = async () => {
    if (selectedUser) {
      try {
        await handleUpdateUser(selectedUser.id_user);
        refetchUserReport();
        return;
      } catch (error) {
        notification.error({
          message: "Error",
          description: (error as Error).message,
          duration: 1.5,
          showProgress: true,
        });
        return handleCloseModal();
      }
    }
  };
  return {
    data,
    startDate,
    endDate,
    userData,
    isLoadingUserData,
    errorUserData,
    onDateChange,
    isLoading,
    error,
    userId,
    selectedUser,
    handleViewClick,
    dateRangeText,
    handleUpdateSelectedUser,
    openModalWithUser,
    isModalOpen,
    handleCloseModal,
    setPassword,
    setUsername,
    setPhone,
    password,
    username,
    phone,
  };
};
