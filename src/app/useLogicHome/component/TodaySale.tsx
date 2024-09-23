/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDataContent } from "./Data";

function TodaySale() {
  const { data } = useDataContent();

  return (
    <div className="font-inter p-8 md:px-8 md:py-7 ">
      <div className="flex  text-start flex-col space-y-2 mb-[24px] pt-2   ">
        <h4 className="text-[1.5rem] font-inter font-semibold mb-[4px] leading-[1.235rem]">
          Today’s Sales
        </h4>
        <p className="text-[1rem]  font-normal leading-[1.57rem]  text-text_topday">
          Sales Summary
        </p>
      </div>
      <div className="grid lg:grid-cols-4 w-full  gap-5  md:grid-cols-2 grid-cols-1    md:gap-x-6">
        {data.map((item) => (
          <div key={item.key} className="p-5   bg-menu  rounded-xl ">
            <div className="">
              <img src={`${item.icon}`} className="size-[26px]" />
              <p className=" text-[1.5rem] mb-5 mt-7 font-semibold leading-[1.235rem]">
                {item.number}
              </p>
              <div className="">
                <p className="text-[1rem] mb-1 leading-[1.5rem]">
                  {item.title}
                </p>
                <p className="text-[0.75rem] leading-[1.25rem] font-medium">
                  {item.discription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodaySale;
