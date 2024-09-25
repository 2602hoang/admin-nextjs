/* eslint-disable @typescript-eslint/no-unused-vars */
import { DeleteFilled, EditOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Input,
  Pagination,
  Space,
  Table,
  TableColumnsType,
} from "antd";
import {
  TablePaginationConfig,
  TableRowSelection,
} from "antd/es/table/interface";
import React, { useState } from "react";

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  phone: string;
  address: string;
  total: number;
}
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => (
      <span className="gap-1 flex flex-row items-center">
        <Avatar
          className="size-7"
          style={{ backgroundColor: getRandomColor() }}
        >
          {text[0]}
        </Avatar>
        {text}
      </span>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Billing Address",
    dataIndex: "address",
  },
  {
    title: "Total Spent",
    dataIndex: "total",
    render: (text) => <span>${text}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: (record) => (
      <Space size="middle">
        <Button
          type="link"
          icon={<EditOutlined className="text-white" />}
        ></Button>
        <Button
          type="link"
          icon={<DeleteFilled className="text-red-500" />}
        ></Button>
      </Space>
    ),
  },
];

const data: DataType[] = [];
for (let i = 1; i < 23; i++) {
  data.push({
    key: i,
    name: `nam ${i}`,
    email: `${i}huy@gmail.com`,
    phone: `${i}987654321`,
    address: `London, Park Lane no. ${i}`,
    total: 10 * i,
  });
}

export const TableUser = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 4;

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleChange = (pagination: TablePaginationConfig) => {
    setCurrentPage(pagination.current ?? 1);
  };

  const footer = () => {
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, data.length);
    return (
      <div className="flex mt-3 justify-between items-center text-white">
        <div>
          Show {start} - {end} of {data.length} total items
        </div>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length}
          onChange={(page) => setCurrentPage(page)}
          hideOnSinglePage
        />
      </div>
    );
  };

  return (
    <div>
      <div className=" rounded-md px-2 gap-2 justify-between md:px-12 items-center pt-5 flex">
        <h4 className="font-inter text-[24px]  font-semibold leading-[29.64px]">
          Customers
        </h4>

        <div>
          <Input
            className="h-12 flex bg-Brown border-none text-white  border-slate-500 focus-within:bg-Light_Gray hover:bg-Light_Gray"
            placeholder="Search . . . "
            prefix={<SearchOutlined />}
          />
        </div>
      </div>
      <div className="px-5 justify-center items-center flex  mt-6  ">
        <Table
          className="font-inter w-[95%]"
          pagination={{
            current: currentPage,
            pageSize,
            total: data.length,
            onChange: (page) => setCurrentPage(page),
          }}
          size="small"
          scroll={{ x: "max-content" }}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          footer={footer}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
