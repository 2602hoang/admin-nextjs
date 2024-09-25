import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  AreaChart,
  YAxis,
  Area,
} from "recharts";
import { chartsCollum, chartsLine, charttwoline } from "./Data";

// 1
export const ChartsColumnLevel: React.FC = () => {
  return (
    <>
      <ResponsiveContainer
        className=" gap-y-4 mt-14"
        width={"100%"}
        height={250}
      >
        <BarChart
          data={chartsCollum}
          margin={{ top: 10, right: 18, bottom: 0, left: 28 }}
        >
          <XAxis />
          <Tooltip />
          <Legend
            iconType="circle"
            margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
          />
          <Bar
            dataKey="Volume"
            stackId="a"
            fill="#A9DFD8"
            name="Volume"
            barSize={25}
          />
          <Bar
            dataKey="Service"
            stackId="a"
            fill="#2b2b36"
            name="Service"
            barSize={25}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
// 2
export const ChartsLine: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={350} className="mt-10">
      <AreaChart
        data={chartsLine}
        margin={{ top: 10, right: 20, left: 20, bottom: 0 }}
      >
        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#A9DFD8" fill="#A9DFD8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};
// 3
export const Charttwoline: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={350} className="mt-10">
      <AreaChart
        data={charttwoline}
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
  );
};
