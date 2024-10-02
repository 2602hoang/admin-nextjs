import React from "react";
import { Progress, Table, Tag } from "antd";
import { tableRank } from "./Data";

function TableRank() {
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
        <span className="leading-[19px] text-[16px] ">{text}</span>
      ),
    },
    {
      title: <span className="custom-table-title ml-3 ">Popularity</span>,
      key: "popularity",
      width: 260,
      render: (record: {
        key: string | number;
        number: number | undefined;
      }) => (
        <div className="ml-3">
          <Progress
            percent={record.number}
            status="active"
            trailColor="transparent"
            showInfo={false}
            strokeColor={getBorderColorByKey(record.key)}
            size={["70%", 2]}
          />
        </div>
      ),
    },
    {
      title: <span className="custom-table-title   ml-4 ">Sales</span>,
      dataIndex: "number",
      key: "sales",
      render: (sales: number, record: { key: string | number }) => (
        <div className="mr-6">
          <Tag
            className={`w-[80px] h-8  flex justify-center items-center rounded-md  border p-3 `}
            style={{
              backgroundColor: `${getTagColorByKey(record.key)}3D`,
              color: getTagColorByKey(record.key),
              borderColor: getBorderColorByKey(record.key),
            }}
          >
            {sales}%
          </Tag>
        </div>
      ),
    },
  ];

  return (
    <div className="p-5">
      <h4 className="text-[24px] font-semibold leading-[29.64px] pt-4  pl-3">
        Top Products
      </h4>
      <div className="px-6 mt-7 ">
        <Table
          columns={columns}
          dataSource={tableRank}
          size="middle"
          className="overflow-x-auto overflow-auto"
          rowKey="key"
          pagination={false}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </div>
    </div>
  );
}

export default TableRank;
