"use client";
import React from "react";
import { Button, Input, Space, Tag, Tooltip } from "antd";
import { formatCurrency, formattedTimestamp } from "@/utils";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { IconSearch } from "@/icon/DataIcon";
import { useFetchOrderData } from "./useLogic";
import clsx from "clsx";
import { User } from "../profile/useLogic";
import { ModalDetail } from "./componentOrder/ModalDetail";
import { u } from "framer-motion/client";
import { Loading } from "@/components/state/StateCallApi";
import OrderTable from "./componentOrder/OrderTable";

export interface Product {
  id_product: number;
  name: string;
  images: string;
}

export interface OrderDetail {
  qty: number;
  total_amount: number;
  id_product: number;
  product: Product;
}

export interface Order {
  id_order: number;
  id_user: number;
  id_pay: number;
  id_adress: number;
  notes: string;
  note_pays: string | null;
  total_price: number;
  status: number;
  finished: number;
  date_order: string;
  created_at: string;
  updated_at: string;
  order_details: OrderDetail[];
  user: User;
}

function Order() {
  const {
    order,
    isLoading,
    error,
    totalAmount,
    selectedOrderId,
    showModal,
    selectedOrderDetails,
    handleOk,
    filteredOrders,
    searchQuery,
    handleInputChange,
    open,
  } = useFetchOrderData();

  return (
    <LayoutStateHandler isLoading={isLoading} error={error} data={order}>
      <div className="w-full h-auto mb-5">
        <div className="bg-brown mb-5">
          <Input
            className="w-4/5 md:w-2/5 h-10 gap-x-[3px] rounded-lg pl-1 border-none bg-dark-slate-gray text-white focus:border-light-gray focus-within:bg-light-gray hover:bg-light-gray"
            placeholder="Search by ID"
            allowClear
            value={searchQuery}
            onChange={handleInputChange}
            prefix={<IconSearch />}
          />
        </div>

        {filteredOrders && filteredOrders.length > 0 ? (
          <OrderTable
            filteredOrders={filteredOrders}
            totalAmount={totalAmount}
            showModal={showModal}
          />
        ) : (
          <div className="text-center text-lg font-semibold mt-4">
            <p className="text-red-400">No orders found</p>
          </div>
        )}

        <ModalDetail
          open={open}
          selectedOrderId={selectedOrderId}
          handleOk={handleOk}
          selectedOrderDetails={selectedOrderDetails}
        />
      </div>
    </LayoutStateHandler>
  );
}

export default Order;
