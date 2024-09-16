import React from "react";
import { Progress, Table, Tag } from "antd";
import { useDataContent } from "./Data";

function TableRank() {
  const { testimonials } = useDataContent();
  const getTagColorByKey = (key: string | number) => {
    // Define key-to-color mapping, adjust as needed
    const keyColorMap: Record<string | number, string> = {
      1: "#FCB859",
      3: "#20aef3",
      2: "#A9DFD8",
      4: "#f2c8ed",
    };

    // Default color if the key doesn't match
    return keyColorMap[key] || "green";
  };
  const getBorderColorByKey = (key: string | number) => {
    switch (key) {
      case 1:
        return "#FCB859"; // Red border
      case 3:
        return "#20aef3"; // Green border
      case 2:
        return "#A9DFD8"; // Blue border
      default:
        return "#f2c8ed"; // Default gray border
    }
  };
  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      render: (text: string | number) => <span>0{text}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Popularity",
      key: "popularity",
      render: (record: {
        key: string | number;
        number: number | undefined;
      }) => (
        <Progress
          className="text-white px-2"
          percent={record.number}
          status="active"
          showInfo={false}
          size={["100%", 3]}
          strokeColor={getBorderColorByKey(record.key)}
        />
      ),
    },
    {
      title: "Sales",
      dataIndex: "number",
      key: "sales",
      render: (sales: number, record: { key: string | number }) => (
        <Tag
          className={`w-20 h-9 flex justify-center items-center rounded-lg border p-3 `}
          style={{
            backgroundColor: `${getTagColorByKey(record.key)}3D`,
            color: getTagColorByKey(record.key),
            borderColor: getBorderColorByKey(record.key),
          }}
        >
          {sales}%
        </Tag>
      ),
    },
  ];

  return (
    <div className="w-full bg-content1 overflow-x-auto flex flex-col text-start h-auto gap-y-5  rounded-md p-5 justify-center items-start space-y-0">
      <h4 className="text-2xl font-semibold leading-9 font-inter">
        Top Product
      </h4>
      <Table
        columns={columns}
        dataSource={testimonials}
        size="middle"
        className="w-full font-inter"
        rowKey="key"
        pagination={false}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
}

export default TableRank;
