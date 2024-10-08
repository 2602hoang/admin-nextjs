import { useAxios } from "@/providers/AxiosProvider";
import { useQuery } from "react-query";
import { useCallback, useMemo, useState } from "react";
import _ from "lodash";
import { Order } from "./page";
import {
  CustomOrder,
  transformOrderData,
} from "./componentOrder/TransformModule";

export const useFetchOrderData = () => {
  const { axiosInstance } = useAxios();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleCancel = () => {
    setOpen(false);
    setSelectedOrderId(null);
  };

  const fetchOrderDetails = async (id_order: number) => {
    const response = await axiosInstance(0).get<{
      order: Order[];
      selectedOrderDetails: Order[];
    }>(`api/v1/order/getonebyOrderId/${id_order}`);
    return response.data.order[0];
  };

  const { data: selectedOrderDetails } = useQuery(
    ["orderDetails", selectedOrderId],
    () => fetchOrderDetails(selectedOrderId as number),
    {
      enabled: !!selectedOrderId,
      onSuccess: () => setOpen(true),
      onError: (error) => console.error(error),
    }
  );
  const showModal = (id_order: number) => {
    setSelectedOrderId(id_order);
    setOpen(true);
  };
  const fetchUserData = async () => {
    const response = await axiosInstance(0).get<{ order: Order[] }>(
      `api/v1/order/getall`
    );
    return response.data.order.map(transformOrderData);
  };

  const {
    data: order,
    isLoading,
    error,
  } = useQuery(["order"], fetchUserData, {
    cacheTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
  });

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
      order.orderId.toString().includes(searchQuery)
    );
  }, [order, searchQuery]);

  const totalAmount = useMemo(() => {
    return (
      filteredOrders?.reduce(
        (total: number, order: CustomOrder) => total + order.totalPrice,
        0
      ) || 0
    );
  }, [filteredOrders]);

  return {
    order,
    filteredOrders,
    handleInputChange,
    searchQuery,
    setSearchQuery,
    isLoading,
    error,
    totalAmount,
    selectedOrderId,
    selectedOrderDetails,
    showModal,
    handleCancel,
    open,
    setOpen,
  };
};
