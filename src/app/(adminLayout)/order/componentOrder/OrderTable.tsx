import React from "react";
import { Button, Space, Tag, Tooltip, Table } from "antd";
import { formatCurrency, formattedTimestamp } from "@/utils";
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
  const columns = [
    {
      title: <h3 className="text-teal-300">#</h3>,
      dataIndex: "index",
      render: (_: any, __: CustomOrder, index: number) => index + 1,
      width: 100,
    },
    {
      title: <h3 className="text-teal-300">ID</h3>,
      dataIndex: "orderId",
      align: "start" as "start",
      width: 150,
    },
    {
      title: <h3 className="text-teal-300">Phone</h3>,
      dataIndex: ["user", "phone"],
      align: "start" as "start",
    },
    {
      title: <h3 className="text-teal-300">Date</h3>,
      dataIndex: "orderDate",
      render: (date: string) => formattedTimestamp(date),
    },
    {
      title: <h3 className="text-teal-300">Status</h3>,
      dataIndex: "paymentId",
      render: (paymentId: number, order: CustomOrder) => (
        <Tooltip
          title={
            <span className="text-black">
              {paymentId === 3
                ? "Canceled"
                : paymentId === 2
                ? "Confirmed"
                : "????"}
            </span>
          }
          placement="rightTop"
          color="white"
        >
          <Tag
            color={clsx({
              green: paymentId === 2,
              red: paymentId === 3,
              yellow: paymentId === 5,
            })}
            className="uppercase"
          >
            {paymentId === 3 ? "X" : paymentId === 2 ? "√" : "?"}
          </Tag>
        </Tooltip>
      ),
    },
    {
      title: <h3 className="text-teal-300">Total Price</h3>,
      dataIndex: "totalPrice",
      render: (price: number) => formatCurrency(price),
    },
    {
      title: <h3 className="text-teal-300">Action</h3>,
      render: (order: CustomOrder) => (
        <Space size="middle">
          <Button
            className="w-full bg-white text-black hover:text-white uppercase"
            onClick={() => showModal(order.orderId)}
          >
            View
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="rounded-b-2xl pb-2 px-1">
      <Table
        columns={columns}
        dataSource={filteredOrders.map((order) => ({
          ...order,
          key: order.orderId,
        }))}
        pagination={false}
        scroll={{ y: 400, x: 1000 }}
        className="bg-dark-slate-gray rounded-t-xl"
        footer={() => (
          <div className=" rounded-b-xl bg-dark-slate-gray text-teal-600 2xl:pr-44 pr-20">
            <div className="text-end text-sm font-bold border-2 border-indigo-400  py-3">
              <span className="py-2">Total{""}:</span>
              <span className="py-2">
                {""} {formatCurrency(totalAmount)}
              </span>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default OrderTable;
