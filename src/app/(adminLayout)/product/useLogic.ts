import { useQuery } from "react-query";
import { useAxios } from "@/providers/AxiosProvider";
import { Brand, Category, Product } from "./page";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

export const useDataProduct = () => {
  const { axiosInstance } = useAxios();
  const { userToken } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const handleCancel = () => {
    setOpen(false);
    setSelectedProductId(null);
  };
  const handleOpen = (id: number) => {
    setSelectedProductId(id);
    setOpen(true);
  };

  const fetchProductById = async (id: number) => {
    const res = await axiosInstance(0).get<{ product: Product }>(
      `api/v1/product/getone/${id}`
    );
    return res.data;
  };
  const {
    data,
    isLoading: isLoadingProduct,
    error: errorProduct,
  } = useQuery(
    ["product", selectedProductId],
    () => fetchProductById(selectedProductId as number),
    {
      enabled: !!selectedProductId,
    }
  );

  const fetchDataCategory = async () => {
    const res = await axiosInstance(0).get<{ categories: Category[] }>(
      `api/v1/category/getall`
    );
    return res.data;
  };
  const {
    data: categories,
    // isLoading: isLoadingCategory,
    // error: errorCategory,
  } = useQuery(["categories"], fetchDataCategory, {
    enabled: !!userToken,
  });

  const fetchDataBrand = async () => {
    const res = await axiosInstance(0).get<{ brands: Brand[] }>(
      `api/v1/brand/getall`
    );
    return res.data;
  };
  const {
    data: brands,
    // isLoading: isLoadingBrand,
    // error: errorBrand,
  } = useQuery(["brands"], fetchDataBrand, {
    enabled: !!userToken,
  });

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
    data,
    open,
    categories,
    brands,
    handleCancel,
    selectedProductId,
    isLoadingProduct,
    errorProduct,
    handleOpen,
  };
};
