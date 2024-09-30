"use client";
import React, { useState } from "react";

import { Input, Tag } from "antd";
import { formatCurrency, formattedTimestamp } from "@/utils";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useFetchOrderData } from "@/app/(Page)/order/useLogic";
import { IconSearch } from "@/icon/DataIcon";
export interface OrderDetail {
  id_order: number;
  user: { phone: string };
  id_pay: number;
  date_order: string;
  total_price: number;
}

function Order() {
  const { order, isLoading, error } = useFetchOrderData();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredOrders = order?.filter(
    (order: OrderDetail) =>
      order.user.phone.includes(searchQuery) ||
      order.id_order.toString().includes(searchQuery)
  );

  const totalAmount =
    filteredOrders?.reduce(
      (total: any, order: OrderDetail) => total + order.total_price,
      0
    ) || 0;

  return (
    <LayoutStateHandler isLoading={isLoading} error={error} data={order}>
      <div className="md:w-full w-11/12 overflow-x-scroll">
        <div className="mb-4 w-full justify-end items-end flex">
          <Input
            className="w-2/5 h-full gap-x-[3px] rounded-lg pl-1 border-none bg-dark-slate-gray text-white focus:border-light-gray focus-within:bg-light-gray hover:bg-light-gray"
            placeholder="Search by phone number or order ID"
            allowClear
            value={searchQuery}
            onChange={handleInputChange}
            prefix={<IconSearch />}
          />
        </div>
        {filteredOrders && filteredOrders.length > 0 ? (
          <table className="table-auto bg-brown w-full border-collapse">
            <thead>
              <tr className="text-center text-2xl uppercase font-bold border-2 border-teal-400 border-solid">
                <th className="">#</th>
                <th className="">ID</th>
                <th className="">Phone</th>
                <th className="">Date</th>
                <th className="">Status</th>
                <th className="">Total Price</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm ">
              {filteredOrders?.map((order: OrderDetail, index: number) => (
                <tr
                  key={order.id_order}
                  className="capitalize font-medium border-2 border-teal-400 border-solid"
                >
                  <td className="border-r-2 border-teal-400 border-solid p-4">
                    {index + 1}
                  </td>
                  <td className="border-r-2 border-teal-400 border-solid">
                    {order.id_order}
                  </td>
                  <td className="border-r-2 border-teal-400 border-solid">
                    {order.user.phone}
                  </td>
                  <td className="border-r-2 border-teal-400 border-solid">
                    {formattedTimestamp(order.date_order)}
                  </td>
                  <td className="border-r-2 border-teal-400 border-solid">
                    <Tag
                      color={
                        order.id_pay === 1
                          ? "#fdc323"
                          : order.id_pay === 2
                          ? "#7ae284"
                          : "#FF0000"
                      }
                      className="uppercase"
                    >
                      {order.id_pay === 1
                        ? "Wait for confirmation"
                        : order.id_pay === 2
                        ? "Application confirmed"
                        : "Cancel"}
                    </Tag>
                  </td>
                  <td className="">{formatCurrency(order.total_price)}</td>
                </tr>
              ))}
              <tr className="text-sm font-bold border-2 border-teal-400 border-solid">
                <td
                  colSpan={5}
                  className="text-center p-4 border-r-2 border-teal-400 border-solid"
                >
                  Total
                </td>
                <td className="border text-center border-teal-400 ">
                  {formatCurrency(totalAmount)}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="text-center text-lg font-semibold mt-4">
            <h1>No orders found</h1>
          </div>
        )}
      </div>
    </LayoutStateHandler>
  );
}

export default Order;
