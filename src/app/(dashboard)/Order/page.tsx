"use client";
import React from "react";
import { Input, Tag, Tooltip } from "antd";
import { formatCurrency, formattedTimestamp } from "@/utils";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useFetchOrderData } from "@/app/(dashboard)/Order/useLogic";
import { IconSearch } from "@/icon/DataIcon";

export interface OrderDetail {
  id_order: number;
  user: { phone: string };
  id_pay: number;
  date_order: string;
  total_price: number;
}

function Order() {
  const {
    order,
    isLoading,
    error,
    searchQuery,
    handleInputChange,
    filteredOrders,
    totalAmount,
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
        <>
          {filteredOrders && filteredOrders.length > 0 ? (
            <div className="border border-white border-solid rounded-b-2xl pb-2 px-1">
              <div className="max-h-[400px] md:max-h-[500px] 2xl:min-h-[600px]  hover:overflow-auto overflow-hidden">
                <table className="table-auto w-full  ">
                  <thead className="sticky top-0 bg-dark-slate-gray z-10">
                    <tr className="text-center border-b-2 ">
                      <th className="py-2 ">#</th>
                      <th className="py-2">ID</th>
                      <th className="py-2">Phone</th>
                      <th className="py-2">Date</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Total Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-center text-sm bg-brown">
                    {filteredOrders.map((order: OrderDetail, index: number) => (
                      <tr
                        key={order.id_order}
                        className="font-medium border-2 border-indigo-400 hover:bg-gray-200 transition-colors"
                      >
                        <td className="border-r-2 py-4 px-2 border-indigo-400">
                          {index + 1}
                        </td>
                        <td className="border-r-2 border-indigo-400">
                          {order.id_order}
                        </td>
                        <td className="border-r-2 border-indigo-400">
                          {order.user.phone}
                        </td>
                        <td className="border-r-2 border-indigo-400">
                          {formattedTimestamp(order.date_order)}
                        </td>
                        <td className="border-r-2 text-black border-indigo-400">
                          <Tooltip
                            title={
                              <span className="text-black">
                                {order.id_pay === 1
                                  ? "Wait for confirmation"
                                  : order.id_pay === 2
                                  ? "Confirmed"
                                  : "Canceled"}
                              </span>
                            }
                            placement="rightTop"
                            color="white"
                          >
                            <Tag
                              color={
                                order.id_pay === 1
                                  ? "black"
                                  : order.id_pay === 2
                                  ? "green"
                                  : "red"
                              }
                              className="uppercase"
                            >
                              {order.id_pay === 1
                                ? "Wait for confirmation"
                                : order.id_pay === 2
                                ? "√"
                                : "X"}
                            </Tag>
                          </Tooltip>
                        </td>
                        <td>{formatCurrency(order.total_price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-2 bg-dark-slate-gray text-white">
                <table className="table-auto w-full border-solid">
                  <tbody className="text-end text-sm">
                    <tr className="text-sm font-bold border-2 border-indigo-400">
                      <td
                        colSpan={2}
                        className="text-end border-r-2 border-indigo-400 py-2"
                      >
                        Total
                      </td>
                      <td className="border text-end pr-5 md:pr-52 py-2 border-indigo-400">
                        {formatCurrency(totalAmount)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center text-lg font-semibold mt-4">
              <h1>No orders found</h1>
            </div>
          )}
        </>
      </div>
    </LayoutStateHandler>
  );
}

export default Order;
