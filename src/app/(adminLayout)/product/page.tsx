"use client";
import React from "react";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useDataProduct } from "./useLogic";
import { CardProduct } from "./componentProduct/CardProduct";

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

function ProductList() {
  // Renamed to avoid conflict with the interface
  const { products, error, isLoading } = useDataProduct();

  return (
    <>
      <h1 className="text-2xl font-bold">Product List</h1>
      <LayoutStateHandler isLoading={isLoading} error={error} data={products}>
        <div className="text-red-400 grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-7 py-5 w-full min-h-[400px]">
          {Array.isArray(products) &&
            products.map((product: Product) => (
              <CardProduct key={product.id_product} {...product} />
            ))}
        </div>
      </LayoutStateHandler>
    </>
  );
}

export default ProductList;
