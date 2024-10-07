import React from "react";
import { todaySale } from "./Data";
import Image from "next/image";

function TodaySale() {
  const colorClasses = [
    "text-gold",
    "text-light-teal",
    "text-light-pink",
    "text-sky-blue",
  ];
  return (
    <div className=" p-8 md:px-8 md:py-7 ">
      <div className=" mb-6 pt-1   ">
        <h4 className=" mb-1  text-[24px] font-semibold leading-[29.64px]">
          Today’s Sales
        </h4>
        <p className="text-sm  font-normal   text-light-gray-text">
          Sales Summary
        </p>
      </div>
      <div className="grid lg:grid-cols-4 w-full  gap-5  md:grid-cols-2 grid-cols-1    md:gap-x-6">
        {todaySale.map((item, index) => (
          <div key={item.key} className="p-5   bg-brown  rounded-xl ">
            <div className="">
              <Image
                src={`${item.icon}`}
                width={26}
                height={26}
                alt={item.title}
              />
              <p className=" text-[24px] mb-4 mt-6 font-semibold leading-[29.64px]">
                {item.number}
              </p>
              <div className="">
                <p className=" leading-[24px]">{item.title}</p>
                <p className="text-[12px] mt-2 leading-[15px] font-medium">
                  <span className={colorClasses[index % colorClasses.length]}>
                    {item.discription}
                  </span>
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
