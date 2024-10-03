"use client";
import React from "react";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useDataProduct } from "./useLogic";
import { ActionsProduct } from "./componentProduct/ActionsProduct";
import { CardProduct } from "./componentProduct/CardProduct";

export interface Product {
  id: string;
  title: string;
  img: string;
  dis: string;
}

function Product() {
  const { products, error, isLoading } = useDataProduct();

  return (
    <>
      <LayoutStateHandler isLoading={isLoading} error={error} data={products}>
        <div className="text-red-400 grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-5 py-5 w-full min-h-[400px]">
          {Array.isArray(products) &&
            products.map((product: Product) => (
              <CardProduct key={product.id} {...product} />
            ))}
        </div>
      </LayoutStateHandler>
    </>
  );
}

export default Product;
