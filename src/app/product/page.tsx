/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import LayoutStateHandler from "@/components/layout/LayoutState";
import { useDataProduct } from "./useLogic";

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
        <div className="md:p-10 text-red-400 grid md:grid-cols-2 grid-cols-1 md:gap-10 w-full min-h-[400px]">
          {Array.isArray(products) &&
            products.map((product: Product) => (
              <div
                key={product.id}
                className=" flex flex-col justify-center md:h-[400px] items-center gap-y-6 p-6 rounded-lg"
              >
                <div
                  className="rounded-xl bg-dark-slate-gray overflow-hidden relative text-center p-4 group w-full  items-center 
              flex flex-col max-w-sm hover:shadow-2xl hover:shadow-teal-400 transition-all duration-500 shadow-xl"
                >
                  <div className="text-gray-500 group-hover:scale-105 transition-all">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-32 h-32 rounded-2xl "
                    />
                  </div>
                  <div className="group-hover:pb-10 transition-all duration-500 mt-10 delay-200">
                    <h1 className="font-semibold text-light-teal">
                      {product.title}
                    </h1>
                    <p className="text-white text-sm">{product.dis}</p>
                  </div>
                  <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
                    <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
                      <a className="hover:scale-110 hover:text-blue-700 cursor-pointer transition-all duration-500 delay-200">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <path d="M22 6l-10 7L2 6"></path>
                        </svg>
                      </a>
                      <a className="hover:scale-110 hover:text-blue-700 cursor-pointer transition-all duration-500 delay-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM8.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM9 8h12"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>

                      <a className="hover:scale-110 hover:text-blue-700 cursor-pointer transition-all duration-500 delay-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM12 8v5"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M11.995 16h.009"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </LayoutStateHandler>
    </>
  );
}

export default Product;
