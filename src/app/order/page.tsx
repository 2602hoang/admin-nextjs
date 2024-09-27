"use client";
import React from "react";

import { Tag } from "antd";
import { formatCurrency, formattedTimestamp } from "@/utils";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useFetchOrderData } from "./useLogic";

// Define the OrderDetail interface for order details
export interface OrderDetail {
  id_order: number;
  user: { phone: string };
  id_pay: number;
  date_order: string; // ISO date string
  total_price: number;
  // Add order_details if necessary
}

// Define the component
function Order() {
  const { order, isLoading, error } = useFetchOrderData();

  const totalAmount =
    order?.reduce(
      (total: number, order: OrderDetail) => total + order.total_price,
      0
    ) || 0;

  return (
    <LayoutStateHandler isLoading={isLoading} error={error} data={order}>
      <div className="flex md:w-full w-11/12 overflow-x-scroll ">
        <table className="table-auto bg-brown w-full  border-collapse">
          <thead>
            <tr className="text-center text-2xl uppercase font-bold border-2 border-teal-400 border-solid">
              <th className="">STT</th>
              <th className="">ID đơn</th>
              <th className="">SDT người đặt</th>
              <th className="">Ngày đặt</th>
              <th className="">Trạng Thái</th>
              <th className="">Tổng thanh toán</th>
            </tr>
          </thead>
          <tbody className="text-center text-sm ">
            {order?.map((order: OrderDetail, index: number) => (
              <tr
                key={order.id_order}
                className="capitalize font-medium border-2  border-teal-400 border-solid"
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
                  {formattedTimestamp(order.date_order)}{" "}
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
                      ? "Chờ xác nhận"
                      : order.id_pay === 2
                      ? "Đơn đã xác nhận"
                      : "Đơn hủy"}
                  </Tag>
                </td>
                <td className="">{formatCurrency(order.total_price)} </td>
                <td className=""></td>
              </tr>
            ))}
            <tr className="text-sm font-bold border-2  border-teal-400 border-solid">
              <td
                colSpan={5}
                className=" text-center p-4 border-r-2 border-teal-400 border-solid"
              >
                Tổng cộng
              </td>
              <td className="border text-center border-teal-400 ">
                {formatCurrency(totalAmount)}{" "}
                {/* Ensure this function is defined */}
              </td>
              <td className=""></td>
            </tr>
          </tbody>
        </table>
      </div>
    </LayoutStateHandler>
  );
}

export default Order;
