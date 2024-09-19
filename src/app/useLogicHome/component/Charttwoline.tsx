import React from "react";
import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export const Charttwoline = () => {
  const data = [
    {
      name: "Page A",
      thisMonth: 4000,
      LastMonth: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      thisMonth: 3000,
      LastMonth: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      thisMonth: 2000,
      LastMonth: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      thisMonth: 2780,
      LastMonth: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      thisMonth: 1890,
      LastMonth: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      thisMonth: 2390,
      LastMonth: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      thisMonth: 3490,
      LastMonth: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="w-full h-auto justify-center gap-y-5 items-start md:space-y-5 p-5 flex-col flex">
      <h4 className="text-[24px] font-semibold font-inter leading-[29px] pt-4 pl-4">
        Customer Fulfillment
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f2c8ed" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f2c8ed" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a9dfd8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#a9dfd8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis />
          <Tooltip />
          <Legend iconType="circle" />
          <Area
            type="monotone"
            dataKey="thisMonth"
            stroke="#f2c8ed"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="LastMonth"
            stroke="#a9dfd8"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
