/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDataContent } from "./Data";
import { Card } from "antd";

function TodaySale() {
  const { data } = useDataContent();

  return (
    <div className="w-full h-auto  bg-content1 text-white justify-center items-start font-inter   rounded-lg md:px-8 md:pb-5 md:p-5 p-3 flex-col flex">
      <div className="flex text-start flex-col space-y-2 ">
        <h4 className="text-[1.5rem] font-inter font-semibold leading-[1.235rem]">
          Today’s Sales
        </h4>
        <p className="text-[1rem]  font-normal leading-[1.57rem] text-slate-500">
          Sales Summary
        </p>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-5 ml-4 w-full gap-4 md:gap-x-3">
        {data.map((item) => (
          <Card
            key={item.key}
            className="w-11/12 bg-menu  rounded-xl text-white"
          >
            <div className="space-y-5">
              <img src={`${item.icon}`} width={26} height={26} />
              <p className=" text-[1.5rem] font-semibold leading-[1.235rem]">
                {item.number}
              </p>
              <div className="space-y-2">
                <p className="text-[1rem] leading-[1.5rem]">{item.title}</p>
                <p className="text-[0.75rem] leading-[1.25rem] font-medium">
                  {item.discription}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TodaySale;
