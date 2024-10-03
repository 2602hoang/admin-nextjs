import { Button, Modal } from "antd";
import React from "react";
import clsx from "clsx";
import { formatCurrency, formattedTimestamp } from "@/utils";
import { Order, OrderDetail } from "../page";
import { Loading } from "@/components/state/StateCallApi";
interface ModalDetailProps {
  open: boolean;
  handleOk: () => void;
  selectedOrderId: number | null;
  selectedOrderDetails: Order | undefined;
}
export const ModalDetail: React.FC<ModalDetailProps> = ({
  open,
  handleOk,
  selectedOrderId,
  selectedOrderDetails,
}) => {
  return (
    <>
      <Modal
        title={
          <div className="bg-brown text-orange-500 flex justify-start items-start space-x-4">
            <h1 className="text-start">Order Details: {selectedOrderId}</h1>
          </div>
        }
        onCancel={handleOk}
        open={open}
        width={1200}
        footer={
          <Button key="ok" type="primary" className="bg-red" onClick={handleOk}>
            OK
          </Button>
        }
      >
        {selectedOrderDetails && selectedOrderDetails !== undefined ? (
          <div
            className={clsx(
              "overflow-y-auto overflow-x-auto max-h-[70vh] overflow-hidden px-4 text-white border-2"
            )}
          >
            <div className="md:sticky relative top-0 w-full bg-brown pb-5">
              <p
                className={clsx("text-red-500 ", {
                  "text-green-500": selectedOrderDetails.id_pay === 2,
                  "text-red-500": selectedOrderDetails.id_pay === 3,
                  "text-white": selectedOrderDetails.id_pay === 5,
                })}
              >
                <strong className="font-black ">Status:</strong>{" "}
                {selectedOrderDetails.id_pay === 2
                  ? "Done √"
                  : selectedOrderDetails.id_pay === 3
                  ? "UnDone X"
                  : "Waiting ?"}
              </p>
              <p>
                <strong className="font-black ">ID:</strong>{" "}
                {selectedOrderDetails.id_order}
              </p>
              <p>
                <strong className="font-black ">Order date:</strong>{" "}
                {formattedTimestamp(selectedOrderDetails.date_order)}
              </p>
              <p>
                <strong className="font-black ">Order user:</strong>{" "}
                {selectedOrderDetails.user.phone}
              </p>
              <p>
                <strong className="font-black ">Note user:</strong>{" "}
                {selectedOrderDetails.notes || "Không có ghi chú"}
              </p>
              <p>
                <strong className="font-black ">Total price:</strong>{" "}
                {formatCurrency(
                  selectedOrderDetails.total_price,
                  "ja-JP",
                  "JPY"
                )}
              </p>
              <p
                className={clsx("mt-4", {
                  "line-through   text-xs":
                    selectedOrderDetails.note_pays === null,
                })}
              >
                <strong className="font-black ">Order Note: </strong>{" "}
                {selectedOrderDetails.note_pays || "Not"}
              </p>
            </div>
            <table className="md:w-full w-[400px] mt-4 border-2 border-white border-solid ">
              <thead className="">
                <tr className="">
                  <th className="border-2 border-white border-solid  ">STT</th>
                  <th className="border-2 border-white border-solid  md:px-4 md:py-2">
                    Product
                  </th>
                  <th className=" border-2 border-white border-solid ">
                    Price
                  </th>
                  <th className=" border-2 border-white border-solid ">
                    Quantity
                  </th>
                  <th className=" border-2 border-white border-solid ">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedOrderDetails.order_details.map(
                  (detail: OrderDetail, idx: number) => (
                    <tr
                      key={detail.id_product}
                      className="text-center border-2 border-white border-solid"
                    >
                      <td className="px-4 border-r-2 border-white border-solid">
                        {idx + 1}
                      </td>
                      <td className=" border-r-2 border-white border-solid justify-start ml-5 space-x-2 ">
                        <div className="flex md:flex-row flex-col items-center justify-start md:pl-10">
                          <img
                            src={detail.product.images}
                            alt={detail.product.name}
                            className="size-16 object-cover"
                          />
                          <p>{detail.product.name}</p>
                        </div>
                      </td>
                      <td className="px-4 py-2 border-r-2 border-white border-solid">
                        {formatCurrency(
                          detail.total_amount / detail.qty,
                          "ja-JP",
                          "JPY"
                        )}
                      </td>
                      <td className="px-4 py-2 border-r-2 border-white border-solid">
                        {detail.qty}
                      </td>
                      <td className="px-4 py-2 border-r-2 border-white border-solid">
                        {formatCurrency(detail.total_amount, "ja-JP", "JPY")}
                      </td>
                    </tr>
                  )
                )}
                <tr>
                  <td
                    colSpan={4}
                    className=" text-end pr-2 border-r-2 border-white border-solid"
                  >
                    Tổng cộng
                  </td>
                  <td className=" text-center">
                    {formatCurrency(
                      selectedOrderDetails.total_price,
                      "ja-JP",
                      "JPY"
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <Loading />
        )}
      </Modal>
    </>
  );
};
