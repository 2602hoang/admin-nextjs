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
import { dataTableUser, DataTableUser } from "./Data";

const getColorFromName = (name: string) => {
  const hash = Array.from(name).reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );
  const color = hash % 360;
  return `hsl(${color}, 70%, 50%)`;
};

const columns: TableColumnsType<DataTableUser> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => (
      <span className="gap-1 flex flex-row items-center">
        <Avatar
          className="size-7"
          style={{ backgroundColor: getColorFromName(text) }}
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
    render: (text: number) => <span>${text}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: (record: DataTableUser) => (
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

export const TableUser: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 4;

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataTableUser> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleChange = (pagination: TablePaginationConfig) => {
    setCurrentPage(pagination.current ?? 1);
  };

  const footer = () => {
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, dataTableUser.length);
    return (
      <div className="flex mt-3  md:justify-between justify-center items-center text-white">
        <div>
          Show {start} - {end} of {dataTableUser.length} total items
        </div>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          size="small"
          total={dataTableUser.length}
          onChange={(page) => setCurrentPage(page)}
          hideOnSinglePage
        />
      </div>
    );
  };

  return (
    <div>
      <div className="rounded-md px-2 gap-2 justify-between md:px-12 items-center pt-5 flex">
        <h4 className="text-[24px] font-semibold leading-[29.64px]">
          Customers
        </h4>

        <div>
          <Input
            className="h-12 flex bg-brown border-none text-white border-slate-500 focus-within:bg-light-gray hover:bg-light-gray"
            placeholder="Search . . . "
            prefix={<SearchOutlined />}
          />
        </div>
      </div>
      <div className="px-5 justify-center items-center flex mt-6">
        <Table
          className="w-[95%]"
          pagination={{
            current: currentPage,
            pageSize,
            total: dataTableUser.length,
            onChange: (page) => setCurrentPage(page),
          }}
          size="small"
          scroll={{ x: "max-content" }}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataTableUser}
          footer={footer}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
