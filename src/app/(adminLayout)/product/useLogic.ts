import { useQuery } from "react-query";
import { useAxios } from "@/providers/AxiosProvider";
import { Product } from "./page";

export const useDataProduct = () => {
  const { axiosInstance } = useAxios();
  const fetchDataProduct = async () => {
    const res = await axiosInstance(0).get<{ products: Product[] }>(
      `api/v1/email/api/get`
    );
    return res.data;
  };
  const {
    data: products,
    isLoading,
    error,
  } = useQuery(["products"], fetchDataProduct, {
    cacheTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
    retry: 0,
  });

  return {
    products,
    isLoading,
    error,
  };
};
