import { useQuery } from "react-query";
import { useAxios } from "@/providers/AxiosProvider";
import { Product } from "./page";
// import axios from "axios";
// import { URL } from "@/utils/index";

export const useDataProduct = () => {
  const { axiosInstance } = useAxios();

  const fetchDataProduct = async () => {
    const res = await axiosInstance.get<{ products: Product[] }>(
      `api/v1/email/api/get`
    );
    return res.data; // Ensure this returns an array of products
  };
  // const fetchDataProduct = async () => {
  //   const res = await axios.get<{ products: Product[] }>(
  //     `${URL}api/v1/email/api/get`
  //   );
  //   return res.data;
  // };

  const {
    data: products,
    isLoading,
    error,
  } = useQuery(["products"], fetchDataProduct);

  return {
    products,
    isLoading,
    error,
  };
};
