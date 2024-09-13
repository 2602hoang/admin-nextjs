import React from "react";
import { Progress, Table, Tag } from "antd";
import { useDataContent } from "./Data";

function TableRank() {
  const { testimonials } = useDataContent();
  const getTagColorByKey = (key: string | number) => {
    // Define key-to-color mapping, adjust as needed
    const keyColorMap: Record<string | number, string> = {
      1: "green",
      2: "blue",
      3: "red",
      4: "purple",
    };

    // Default color if the key doesn't match
    return keyColorMap[key] || "gray";
  };

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Popularity",
      key: "popularity",
      render: (record: { number: number | undefined }) => (
        <Progress
          className="text-white px-2"
          percent={record.number}
          status="active"
        />
      ),
    },
    {
      title: "Sales",
      dataIndex: "number",
      key: "sales",
      render: (sales: number, record: { key: string | number }) => (
        <Tag
          style={{ width: "60px", textAlign: "center", fontSize: "16px" }}
          color={getTagColorByKey(record.key)}
        >
          {sales}%
        </Tag>
      ),
    },
  ];

  return (
    <div className="w-full bg-content1 overflow-x-auto flex flex-col text-start  rounded-md p-5 justify-start items-start space-y-6">
      <h1 className="text-2xl font-semibold leading-9 mb-7">Top Product</h1>
      <Table
        columns={columns}
        dataSource={testimonials}
        size="large"
        className="w-full"
        rowKey="key"
        pagination={false}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
}

export default TableRank;
