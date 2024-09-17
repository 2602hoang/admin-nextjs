/* eslint-disable @typescript-eslint/no-unused-vars */
import { DeleteFilled, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Space, Table, TableColumnsType } from "antd";
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
        <Avatar style={{ backgroundColor: getRandomColor() }}>{text[0]}</Avatar>
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
      <div className="text-white">
        Show {start} - {end} of {data.length} total items
      </div>
    );
  };

  return (
    <div className="w-full rounded-xl flex-col space-y-8 bg-content1 justify-center  items-center h-auto md:h-[500px] overflow-auto ">
      <div className="w-full bg-content1 rounded-md px-2 gap-2 justify-between md:px-12 items-center pt-7 flex">
        <div>
          <h4 className="text-[1.5rem] font-semibold font-inter leading-[1.235rem]">
            Customers
          </h4>
        </div>
        <div>
          <Input
            className="w-full h-12 flex bg-menu border-none text-white  border-slate-500 focus-within:bg-focus_border hover:bg-focus_border"
            placeholder="Search . . . "
            prefix={<SearchOutlined />}
          />
        </div>
      </div>
      <div className="w-full bg-content1 font-inter rounded-md max-h-auto justify-center items-center  flex overflow-auto  hover:overflow-x-auto">
        <Table
          className="w-[95%] font-inter"
          pagination={{
            current: currentPage,
            pageSize,
            total: data.length,
            onChange: (page) => setCurrentPage(page),
            // itemRender: (page, type, originalElement) => {
            //   if (type === "prev") {
            //     return <button>Previous</button>;
            //   }
            //   if (type === "next") {
            //     return <button>Next</button>;
            //   }
            //   return originalElement;
            // },
          }}
          size="middle"
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
