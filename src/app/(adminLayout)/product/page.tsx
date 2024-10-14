"use client";
import React from "react";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useDataProduct } from "./useLogic";
import { CardProduct } from "./componentProduct/CardProduct";
import { ActionsProduct } from "./componentProduct/ActionsProduct";
import clsx from "clsx";
import { DrawerProduct } from "./componentProduct/DrawerProduct";

export interface Product {
  id_product: number;
  id_brand: number;
  id_category: number;
  name: string;
  status: boolean;
  description: string;
  price: number;
  images: string;
  stock: number;
  discoust: number;
  created_at: Date;
  updated_at: Date;
  brand: Brand;
  category: Category;
}

export interface Brand {
  id_brand: number;
  name: string;
}

export interface Category {
  id_category: number;
  name: string;
}

const ProductList = () => {
  const {
    products,
    error,
    isLoading,
    data,
    open,
    handleCancel,
    handleOpen,
    categories,
    brands,
    isLoadingProduct,
    errorProduct,
  } = useDataProduct();

  return (
    <LayoutStateHandler isLoading={isLoading} error={error} data={products}>
      <div className="text-red-400 grid place-content-center w-full repository-box-grid-1-2-4 gap-7 px-4 py-5  min-h-[400px]">
        {Array.isArray(products) &&
          products.map((product: Product) => (
            <div
              key={product.id_product}
              className={clsx(
                "rounded-xl  overflow-hidden w-full md:h-[500px] relative text-center p-4 group flex flex-col hover:shadow-2xl transition-all duration-500 hover:cursor-default shadow-xl",
                {
                  "bg-gray-500 hover:shadow-red-400": product.status,
                  "bg-dark-slate-gray hover:shadow-green-400": !product.status,
                }
              )}
            >
              <CardProduct product={product} open={false} />
              <ActionsProduct
                handleOpen={() => handleOpen(product.id_product)}
                open={open}
              />
            </div>
          ))}
      </div>
      <DrawerProduct
        open={open}
        categories={categories as unknown as Category[]}
        brands={brands as unknown as Brand[]}
        handleCancel={handleCancel}
        product={data as unknown as Product}
        isLoadingProduct={isLoadingProduct}
        errorProduct={errorProduct}
      />
    </LayoutStateHandler>
  );
};

export default ProductList;
