import { useQuery } from "react-query";
import { useAxios } from "@/providers/AxiosProvider";
import { Product } from "./page";
import { useAuth } from "@/contexts/AuthContext";

export const useDataProduct = () => {
  const { axiosInstance } = useAxios();
  const { userToken } = useAuth();
  const fetchDataProduct = async () => {
    const res = await axiosInstance(0).get<{ products: Product[] }>(
      `api/v1/product/getall/all`
    );
    return res.data;
  };
  const {
    data: products,
    isLoading,
    error,
  } = useQuery(["products"], fetchDataProduct, {
    enabled: !!userToken,
  });

  return {
    products,
    isLoading,
    error,
  };
};
