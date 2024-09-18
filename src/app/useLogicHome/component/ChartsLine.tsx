import React from "react";
import {
  Area,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const ChartsLine = () => {
  // Dữ liệu cho biểu đồ
  const data = [
    { total: 1532, month: "Jan" },
    { total: 3000, month: "Feb" },
    { total: 2000, month: "Mar" },
    { total: 2780, month: "Apr" },
    { total: 1890, month: "May" },
    { total: 2390, month: "Jun" },
    { total: 3490, month: "Jul" },
    { total: 3490, month: "Aug" },
    { total: 2013, month: "Sep" },
    { total: 8022, month: "Oct" },
    { total: 2001, month: "Nov" },
    { total: 1300, month: "Dec" },
  ];

  return (
    <div className="w-full h-auto  justify-center items-start space-y-3 md:space-y-9 p-5 flex-col flex">
      <div>
        <h4 className="text-[24px] font-semibold font-inter leading-[29px] pt-4 pl-4">
          Visitor Insights
        </h4>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: 20, bottom: 0 }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#A9DFD8"
            fill="#A9DFD8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartsLine;
