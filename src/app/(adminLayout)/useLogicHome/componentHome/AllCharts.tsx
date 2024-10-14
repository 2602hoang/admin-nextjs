"use client";
import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  ResponsiveContainer,
  // XAxis,
  AreaChart,
  // YAxis,
  Area,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { chartsCollum, chartsLine, charttwoline } from "./Data";

// Biểu đồ cột
export const ChartsColumnLevel: React.FC = () => {
  return (
    <ResponsiveContainer className="gap-y-4 mt-14" width="100%" height={250}>
      <BarChart
        data={chartsCollum}
        margin={{ top: 10, right: 18, bottom: 0, left: 28 }}
      >
        {/* <XAxis dataKey="name" /> */}
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
  );
};

// Biểu đồ đường
export const ChartsLine: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={350} className="mt-10">
      <AreaChart
        data={chartsLine}
        margin={{ top: 10, right: 20, left: 20, bottom: 0 }}
      >
        {/* <XAxis dataKey="month" /> */}
        {/* <YAxis domain={["dataMin", "dataMax"]} /> */}
        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#A9DFD8" fill="#A9DFD8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

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
        {/* <XAxis dataKey="month" /> */}
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

export const ChartsColumnReport: React.FC<{
  dataCharts: {
    name: string;
    // successTotal: number;
    // failedTotal: number;
    // canceledTotal: number;
  }[];
}> = ({ dataCharts }) => {
  return (
    <BarChart width={600} height={400} data={dataCharts}>
      <CartesianGrid strokeDasharray="3 4" />
      {/* <XAxis dataKey="name" />
      <YAxis /> */}
      <Tooltip formatter={(value, name) => [`${value}`, name]} />
      <Legend iconType="circle" />
      <Bar dataKey="Success" fill="#82ca9d" />
      <Bar dataKey="Failed" fill="#8884d8" />
      <Bar dataKey="Canceled" fill="#ffc658" />
    </BarChart>
  );
};
export const ChartsPieReport: React.FC<{
  dataChartsPie: { name: string; value: number }[];
}> = ({ dataChartsPie }) => {
  const COLORS = ["#82ca9d", "#8884d8", "#ffc658"];
  return (
    <PieChart width={600} height={400}>
      <Pie
        data={dataChartsPie}
        cx={280}
        cy={200}
        // labelLine={false}
        label={({ name, percent }) =>
          `${name}: ${`\n`} ${(percent * 100).toFixed(2)}%`
        }
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {dataChartsPie.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};
