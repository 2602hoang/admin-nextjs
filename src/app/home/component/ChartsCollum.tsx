import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartsCollum = () => {
  const data = [
    { name: "Level 1", Volume: 79, Service: 78 },
    { name: "Level 2", Volume: 80, Service: 77 },
    { name: "Level 3", Volume: 65, Service: 92 },
    { name: "Level 4", Volume: 43, Service: 114 },
    { name: "Level 5", Volume: 82, Service: 75 },
    { name: "Level 6", Volume: 105, Service: 52 },
  ];
  return (
    <div className="flex w-full items-start justify-center flex-col h-auto p-4">
      <h1 className="text-2xl font-semibold leading-9 mb-7">Level</h1>
      <ResponsiveContainer
        className="w-full h-full min-h-52"
        width="100%"
        height="100%"
      >
        <BarChart
          // width={400}
          // height={300}
          data={data}
          // margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          {/* Đường lưới của biểu đồ */}
          <CartesianGrid strokeDasharray="3 3" />
          {/* Trục X hiển thị các mức */}
          <XAxis dataKey="name" />
          {/* Trục Y hiển thị giá trị */}
          <YAxis />
          {/* Tooltip hiển thị thông tin chi tiết */}
          <Tooltip />
          {/* Chú thích */}
          <Legend />
          {/* Biểu đồ cột hiển thị dữ liệu Volume */}
          <Bar
            dataKey="Volume"
            stackId="a"
            fill="#A9DFD8"
            name="Volume"
            barSize={10}
          />
          {/* Biểu đồ cột hiển thị dữ liệu Service */}
          <Bar
            dataKey="Service"
            stackId="a"
            fill="#666666"
            name="Service"
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartsCollum;
