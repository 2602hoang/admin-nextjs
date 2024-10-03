// OrderTable.tsx
import React from "react";
import { Button, Space, Tag, Tooltip } from "antd";
import { formatCurrency, formattedTimestamp } from "@/utils";
import { Order } from "../page";
import clsx from "clsx";
import { CustomOrder } from "./TransformModule";

interface OrderTableProps {
  filteredOrders: CustomOrder[];
  totalAmount: number;
  showModal: (id: number) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({
  filteredOrders,
  totalAmount,
  showModal,
}) => {
  return (
    <div className="border border-white border-solid rounded-b-2xl pb-2 px-1">
      <div className="max-h-[400px] md:max-h-[500px] 2xl:min-h-[600px] md:overflow-y-auto hover:overflow-auto overflow-hidden">
        <table className="table-auto w-full">
          <thead className="sticky top-0 bg-dark-slate-gray z-10">
            <tr className="text-center border-b-2">
              <th className="py-2">#</th>
              <th className="py-2">ID</th>
              <th className="py-2">Phone</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
              <th className="py-2">Total Price</th>
              <th className="border ">Action</th>
            </tr>
          </thead>
          <tbody className="text-center text-sm bg-brown">
            {filteredOrders.map((order: CustomOrder, index: number) => (
              <tr
                key={order.orderId}
                className="font-medium border-2 border-indigo-400 hover:bg-gray-200 transition-colors"
              >
                <td className="border-r-2 py-4 px-2 border-indigo-400">
                  {index + 1}
                </td>
                <td className="border-r-2 border-indigo-400">
                  {order.orderId}
                </td>
                <td className="border-r-2 border-indigo-400">
                  {order.user.phone}
                </td>
                <td className="border-r-2 border-indigo-400">
                  {formattedTimestamp(order.orderDate)}
                </td>
                <td className="border-r-2 text-black border-indigo-400">
                  <Tooltip
                    title={
                      <span className="text-black">
                        {order.paymentId === 3
                          ? "Canceled"
                          : order.paymentId === 2
                          ? "Confirmed"
                          : "X"}
                      </span>
                    }
                    placement="rightTop"
                    color="white"
                  >
                    <Tag
                      color={clsx({
                        green: order.paymentId === 2,
                        red: order.paymentId === 3,
                        black: order.paymentId === 1,
                      })}
                      className="uppercase"
                    >
                      {order.paymentId === 3
                        ? "X"
                        : order.paymentId === 2
                        ? "√"
                        : "?"}
                    </Tag>
                  </Tooltip>
                </td>
                <td>{formatCurrency(order.totalPrice)}</td>
                <td>
                  <Space size="middle">
                    <Button
                      className="w-full bg-green-300 text-black hover:text-white uppercase"
                      onClick={() => showModal(order.orderId)}
                    >
                      View
                    </Button>
                  </Space>
                </td>
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
                {formatCurrency(totalAmount, "ja-JP", "JPY")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
