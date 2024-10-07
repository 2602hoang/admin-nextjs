import { User } from "../../profile/useLogic";
import { Order, OrderDetail } from "../page";

export interface CustomOrder {
  orderId: number;
  userId: number;
  paymentId: number;
  addressId: number;
  notes: string;
  paymentNote: string | null;
  totalPrice: number;
  status: number;
  finished: number;
  orderDate: string;
  createdAt: string;
  updatedAt: string;
  orderDetails: OrderDetail[];
  user: User;
}
export const transformOrderData = (order: Order): CustomOrder => {
  return {
    orderId: order.id_order,
    userId: order.id_user,
    paymentId: order.id_pay,
    addressId: order.id_adress,
    notes: order.notes,
    paymentNote: order.note_pays,
    totalPrice: order.total_price,
    status: order.status,
    finished: order.finished,
    orderDate: order.date_order,
    createdAt: order.created_at,
    updatedAt: order.updated_at,
    orderDetails: order.order_details,
    user: order.user,
  };
};
