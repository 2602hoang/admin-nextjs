import React from "react";
import {
  Legend,
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
        <h4 className="text-2xl font-semibold font-inter leading-9 pt-4 pl-4">
          Visitor Insights
        </h4>
      </div>
      <ResponsiveContainer className="" width="100%" height={300}>
        <AreaChart
          // width={300}
          // height={300}
          data={data}
          margin={{ top: 10, right: 20, left: 20, bottom: 0 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" />{" "} */}
          {/* Đường kẻ ô lưới trong biểu đồ */}
          <XAxis dataKey="month" /> {/* Trục X biểu diễn các tháng */}
          <YAxis /> {/* Trục Y biểu diễn giá trị tổng cộng */}
          <Tooltip /> {/* Hiển thị thông tin khi di chuột vào biểu đồ */}
          {/* <Legend /> Hiển thị chú thích cho các đường trong biểu đồ */}
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
