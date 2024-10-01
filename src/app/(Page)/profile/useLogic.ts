import { useAuth } from "@/contexts/AuthContext";
import { useAxios } from "@/providers/AxiosProvider";
import { useQuery } from "react-query";

export interface User {
  id_user: string;
  username: string;
  phone: string;
  avatar: string;
  status: boolean;
}
// /api/v1/email/api/get

export const useFetchUserData = () => {
  const { userId } = useAuth();
  const { axiosInstance } = useAxios();

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

  return { user, isLoading, error };
};
