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
      <h4 className="text-2xl md:pt-4 pl-6  font-semibold text-start leading-9">
        Customer Fulfillment
      </h4>
      <ResponsiveContainer
        className="w-full h-full flex"
        width="100%"
        height={280}
      >
        <AreaChart
          // width={730}
          // height={250}
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="thisMonth"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="LastMonth"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
