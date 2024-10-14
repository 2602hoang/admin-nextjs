import { useAxios } from "@/providers/AxiosProvider";
import { Product } from "../product/page";
import { useQuery } from "react-query";

export interface ReportProduct {
  product: Product;
  name: string;
  id_product: number;
  so_luong: number;
  price: number;
  images: string;
}
const useLogicReportProduct = () => {
  const { axiosInstance } = useAxios();
  const FetchData = async () => {
    const res = await axiosInstance(0).get<ReportProduct[]>(
      `api/v1/thongke/product/sales`
    );
    return res.data;
  };
  const { data, isLoading, error } = useQuery(["productReport"], FetchData, {

  });
  return {
    data,
    isLoading,
    error,
  };
};
export default useLogicReportProduct;
