"use client";
import { Button, Modal, Table } from "antd";
import React from "react";
import clsx from "clsx";
import { formatCurrency, formattedTimestamp } from "@/utils";
import { Order, OrderDetail } from "../page";
import { Loading } from "@/components/state/StateCallApi";

interface ModalDetailProps {
  open: boolean;
  handleCancel: () => void;
  selectedOrderId: number | null;
  selectedOrderDetails: Order | undefined;
}

export const ModalDetail: React.FC<ModalDetailProps> = ({
  open,
  handleCancel,
  selectedOrderId,
  selectedOrderDetails,
}) => {
  const columns = [
    {
      title: <h3 className="text-teal-300">#</h3>,
      align: "center" as "center",
      render: (_: unknown, __: unknown, index: number) => index + 1,
      width: 50,
    },
    {
      title: <h3 className="text-teal-300">Product</h3>,
      render: (record: OrderDetail) => (
        <div className="flex md:flex-row flex-col items-center ml-2">
          <img
            src={record.product.images}
            alt={record.product.name}
            className="size-14 object-cover"
          />
          <span className="ml-2 text-[10px] ">{record.product.name}</span>
        </div>
      ),
      align: "center" as "center",
    },
    {
      title: <h3 className="text-teal-300">Price</h3>,
      render: (record: OrderDetail) =>
        formatCurrency(record.total_amount / record.qty, "ja-JP", "JPY"),
      align: "center" as "center",
    },
    {
      title: <h3 className="text-teal-300">Quantity</h3>,
      dataIndex: "qty",
      align: "center" as "center",
    },
    {
      title: <h3 className="text-teal-300">Total</h3>,
      render: (record: OrderDetail) =>
        formatCurrency(record.total_amount, "ja-JP", "JPY"),
      align: "center" as "center",
    },
  ];

  const dataSource =
    selectedOrderDetails?.order_details.map((detail) => ({
      key: detail.id_product,
      product: detail.product,
      qty: detail.qty,
      total_amount: detail.total_amount,
    })) || [];
  const totalQuantity = selectedOrderDetails?.order_details.reduce(
    (sum, detail) => sum + detail.qty,
    0
  );
  return (
    <>
      <Modal
        title={
          <h1 className="text-start bg-brown text-teal-300 flex justify-start items-start space-x-4">
            Order Details: {selectedOrderId}
          </h1>
        }
        onCancel={handleCancel}
        open={open}
        width={1200}
        footer={
          <Button className="bg-white text-black" onClick={handleCancel}>
            OK
          </Button>
        }
      >
        {selectedOrderDetails ? (
          <div className="h-auto overflow-hidden md:px-4 text-white border-2">
            <div className="md:sticky relative top-0 w-full z-40 bg-brown pb-5">
              <p
                className={clsx("", {
                  "text-green-500": selectedOrderDetails.id_pay === 2,
                  "text-red-500": selectedOrderDetails.id_pay === 3,
                  "text-yellow-300": selectedOrderDetails.id_pay === 5,
                })}
              >
                <strong className="font-black">Status:</strong>{" "}
                {selectedOrderDetails.id_pay === 2
                  ? "Done √"
                  : selectedOrderDetails.id_pay === 3
                  ? "UnDone X"
                  : "Waiting ?"}
              </p>
              <p>
                <strong className="font-black">ID:</strong>{" "}
                {selectedOrderDetails.id_order}
              </p>
              <p>
                <strong className="font-black">Order date:</strong>{" "}
                {formattedTimestamp(selectedOrderDetails.date_order)}
              </p>
              <p>
                <strong className="font-black">Order user:</strong>{" "}
                {selectedOrderDetails.user.phone}
              </p>
              <p>
                <strong className="font-black">Note user:</strong>{" "}
                {selectedOrderDetails.notes || "No note"}
              </p>
              <p>
                <strong className="font-black">Total price:</strong>{" "}
                {formatCurrency(
                  selectedOrderDetails.total_price,
                  "ja-JP",
                  "JPY"
                )}
              </p>
              <p
                className={clsx("mt-4", {
                  "line-through text-xs":
                    selectedOrderDetails.note_pays === null,
                })}
              >
                <strong className="font-black">Order Note:</strong>{" "}
                {selectedOrderDetails.note_pays || "Not"}
              </p>
            </div>
            <div className="rounded-xl border border-white border-solid ">
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                // bordered
                className=""
                scroll={{ y: 300, x: 600 }}
                footer={() => (
                  <div className="flex flex-col items-end ">
                    <div className="mr-8">
                      <p className="">
                        Qty:
                        <span className="ml-[10px]">{totalQuantity}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Total:{" "}
                        <span>
                          {formatCurrency(
                            selectedOrderDetails.total_price,
                            "ja-JP",
                            "JPY"
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </Modal>
    </>
  );
};
