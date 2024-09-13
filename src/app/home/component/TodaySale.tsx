/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDataContent } from "./Data";
import { Card } from "antd";

function TodaySale() {
  const { data } = useDataContent();

  return (
    <div className="w-full h-auto bg-content1 text-white justify-start items-start rounded-lg p-5 space-y-20 flex-col flex">
      <div className="flex text-start flex-col space-y-2 pt-8">
        <h1 className="text-[1.5rem] font-semibold leading-[1.235rem]">
          Today’s Sales
        </h1>
        <p className="text-[1rem] mt-4 font-normal leading-[1.57rem] text-slate-500">
          Sales Summary
        </p>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  w-full gap-4">
        {data.map((item) => (
          <Card key={item.key} className="w-full bg-content1_card  text-white">
            <div className="space-y-4">
              <img src={`${item.icon}`} width={30} height={30} />
              <p className="text-[1.5rem] font-semibold leading-[1.235rem]">
                {item.number}
              </p>
              <p className="text-[1rem] leading-[1.5rem]">{item.title}</p>
              <p className="text-[0.75rem] leading-[1.25rem] font-medium">
                {item.discription}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TodaySale;
