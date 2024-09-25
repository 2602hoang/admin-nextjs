/* eslint-disable @typescript-eslint/no-explicit-any */
import { Progress } from "antd";
import React from "react";

const Percent = (percent: any) => (
  <span className="text-white text-3xl font-black">{percent}%</span>
);

export const Earnings = () => {
  return (
    <div className="p-5">
      <div className="pt-4 pl-4 mb-2 xl:mb-12">
        <h4 className="text-[24px] font-semibold leading-[29.64px]">
          Earnings
        </h4>
        <p className="font-normal mt-4  leading-[24px] text-light-gray">
          Total Expense
        </p>
        <h1 className="text-[48px]  font-bold mt-8 text-light-teal leading-[56px] text-wrap ">
          $6078.76
        </h1>
        <p className="font-normal text-[16px] mt-7 leading-[24px] text-light-gray">
          Profit is 48% More than last Month
        </p>
      </div>
      <div className="w-full h-auto flex justify-center ">
        <Progress
          type="dashboard"
          percent={80}
          strokeWidth={20}
          strokeColor="#A9DFD8"
          size={180}
          format={(percent) => Percent(percent)}
        />
      </div>
    </div>
  );
};
