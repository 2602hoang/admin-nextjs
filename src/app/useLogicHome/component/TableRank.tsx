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
      title: <span className="custom-table-title">#</span>,
      dataIndex: "key",
      key: "key",
      render: (text: string | number) => <span>0{text}</span>,
    },
    {
      title: <span>Name</span>,
      dataIndex: "name",
      key: "name",
    },
    {
      title: <span>Popularity</span>,
      key: "popularity",
      render: (record: {
        key: string | number;
        number: number | undefined;
      }) => (
        <Progress
          className="text-white px-2 "
          percent={record.number}
          status="active"
          showInfo={false}
          size={["100%", 3]}
          strokeColor={getBorderColorByKey(record.key)}
        />
      ),
    },
    {
      title: <span className="ml-28">Sales</span>,
      dataIndex: "number",
      key: "sales",
      render: (sales: number, record: { key: string | number }) => (
        <Tag
          className={`w-20 h-9 ml-28 flex justify-center items-center rounded-lg border p-3 `}
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
    <div className=" overflow-x-auto flex flex-col  h-auto gap-y-5   px-5 py-5 justify-center items-start ">
      <h4 className="text-[24px] font-semibold font-inter leading-[29px] pt-4 pl-4">
        Top Products
      </h4>
      <div className="px-6 w-full">
        <Table
          columns={columns}
          dataSource={testimonials}
          size="small"
          className="font-inter "
          rowKey="key"
          pagination={false}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </div>
    </div>
  );
}

export default TableRank;
