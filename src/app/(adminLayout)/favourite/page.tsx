"use client";
import { formatCurrency } from "@/utils";
import React from "react";
import useLogicReportProduct, { ReportProduct } from "./useLogic";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { Table } from "antd";

const Favourite = () => {
  const { data, isLoading, error } = useLogicReportProduct();

  const columns = [
    {
      title: "Image",
      dataIndex: "images",
      render: (text: string, record: ReportProduct) => (
        <img
          alt={record.name}
          src={record.images}
          className="bg-purple-200 size-20 rounded-lg"
        />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "name",
      render: (text: string) => (
        <span className="font-bold italic">{text}</span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text: number, record: ReportProduct) => (
        <p>{formatCurrency(record.price, "vi-VN", "VND")}</p>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "so_luong",
    },
  ];

  return (
    <LayoutStateHandler isLoading={isLoading} error={error} data={data}>
      <h1 className="text-2xl font-bold text-center md:py-5 text-light-teal">
        Top {data?.length} Products Favourite For Sales
      </h1>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 400, x: 1000 }}
        className="bg-dark-slate-gray rounded-t-xl"
        rowKey={(record) => record.id_product}
      />
    </LayoutStateHandler>
  );
};

export default Favourite;
