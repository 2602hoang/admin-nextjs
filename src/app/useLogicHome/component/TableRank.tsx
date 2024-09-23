import React from "react";
import { Progress, Table, Tag } from "antd";
import { useDataContent } from "./Data";

function TableRank() {
  const { testimonials } = useDataContent();
  const getTagColorByKey = (key: string | number) => {
    const keyColorMap: Record<string | number, string> = {
      1: "#FCB859",
      3: "#20aef3",
      2: "#A9DFD8",
      4: "#f2c8ed",
    };
    return keyColorMap[key] || "green";
  };
  const getBorderColorByKey = (key: string | number) => {
    switch (key) {
      case 1:
        return "#FCB859";
      case 3:
        return "#20aef3";
      case 2:
        return "#A9DFD8";
      default:
        return "#f2c8ed";
    }
  };
  const columns = [
    {
      title: <span className="custom-table-title">#</span>,
      dataIndex: "key",
      width: 80,
      key: "key",
      render: (text: string | number) => <span>0{text}</span>,
    },
    {
      title: <span className="custom-table-title">Name</span>,
      dataIndex: "name",
      width: 325,
      key: "name",
      render: (text: string) => (
        <span className="leading-[19px] text-[16px] font-inter">{text}</span>
      ),
    },
    {
      title: <span className="custom-table-title ">Popularity</span>,
      key: "popularity",
      width: 240,
      render: (record: {
        key: string | number;
        number: number | undefined;
      }) => (
        <Progress
          percent={record.number}
          status="active"
          trailColor="transparent"
          showInfo={false}
          strokeColor={getBorderColorByKey(record.key)}
          size={["70%", 3]}
        />
      ),
    },
    {
      title: <span className="custom-table-title  ">Sales</span>,
      dataIndex: "number",
      key: "sales",
      render: (sales: number, record: { key: string | number }) => (
        <Tag
          className={`w-20 h-9  flex justify-center items-center rounded-lg border p-3 `}
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
    <div className=" overflow-x-auto flex flex-col   gap-y-7   px-5 py-5 justify-center items-start ">
      <h4 className="text-[1.5rem] font-semibold font-inter leading-[1.235rem] pt-5 pl-3">
        Top Products
      </h4>
      <div className="px-6 w-full">
        <Table
          columns={columns}
          dataSource={testimonials}
          size="middle"
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
