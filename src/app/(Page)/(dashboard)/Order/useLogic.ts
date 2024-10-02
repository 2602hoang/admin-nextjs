import { useAxios } from "@/providers/AxiosProvider";
import { useQuery } from "react-query";
import { useCallback, useMemo, useState } from "react";
import _ from "lodash";
import { OrderDetail } from "./page";
import { User } from "../Profile/useLogic";
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
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchUserData = async () => {
    const response = await axiosInstance.get<{ order: Order[] }>(
      `api/v1/order/getall`
    );

    return response.data.order;
  };

  const {
    data: order,
    isLoading,
    error,
  } = useQuery(["order"], fetchUserData, {
    cacheTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
  });
  // event
  const debouncedSetSearchQuery = useCallback(
    _.debounce((value: string) => setSearchQuery(value), 300),
    []
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetSearchQuery(e.target.value);
  };

  const filteredOrders = useMemo(() => {
    if (!order || searchQuery === "") return order;
    return order.filter((order) =>
      // order.user.phone.includes(searchQuery) ||
      order.id_order.toString().includes(searchQuery)
    );
  }, [order, searchQuery]);

  const totalAmount = useMemo(() => {
    return (
      filteredOrders?.reduce(
        (total: any, order: OrderDetail) => total + order.total_price,
        0
      ) || 0
    );
  }, [filteredOrders]);

  return {
    order,
    isLoading,
    searchQuery,
    error,
    totalAmount,
    filteredOrders,
    handleInputChange,
  };
};
