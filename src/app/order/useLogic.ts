import { useAxios } from "@/providers/AxiosProvider";
import { useQuery } from "react-query";
import { User } from "../profile/useLogic";
import { OrderDetail } from "./page";

interface Order {
  id_order: number;
  id_pay: number;
  id_adress: number;
  notes: string;
  note_pays: string | null;
  total_price: number;
  status: number;
  finished: number;
  date_order: string;
  created_at: string;
  updated_at: string;
  order_details: OrderDetail[];
  user: User;
}

export const useFetchOrderData = () => {
  const { axiosInstance } = useAxios();

  const fetchUserData = async () => {
    const response = await axiosInstance.get<{ order: Order[] }>(
      `api/v1/order/getall`
    );
    return response.data.order;
  };

  const { data: order, isLoading, error } = useQuery(["order"], fetchUserData);

  return { order, isLoading, error };
};
