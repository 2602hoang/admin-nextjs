import { Progress } from "antd";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Percent = (percent: any) => (
  <span className="text-white text-3xl font-black">{percent}%</span>
);

export const Earnings = () => {
  return (
    <div className="flex w-full h-auto flex-col justify-between ">
      <div className="w-full h-auto justify-start space-y-5">
        <h1 className="text-[1.5rem] font-semibold leading-[1.235rem]">
          Earnings
        </h1>
        <p className="text-sm font-normal leading-5 text-slate-500">
          Total Expense
        </p>
        <p className="md:text-6xl font-black text-[#A9DFD8] text-wrap text-4xl">
          $6078.76
        </p>
        <p className="text-sm font-normal leading-5 text-slate-500">
          Profit is 48% More than last Month
        </p>
      </div>
      <div className="w-full h-auto flex justify-center items-end">
        <Progress
          type="dashboard"
          percent={80}
          strokeWidth={20}
          size={200}
          format={(percent) => Percent(percent)} // Pass the Percent function to format prop
        />
      </div>
    </div>
  );
};
