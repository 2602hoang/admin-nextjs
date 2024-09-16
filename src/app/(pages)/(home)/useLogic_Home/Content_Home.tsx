/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import ChartsCollum from "@/app/useLogic_Home/component/ChartsCollum";
import ChartsLine from "@/app/useLogic_Home/component/ChartsLine";
import { Charttwoline } from "@/app/useLogic_Home/component/Charttwoline";
import { Earnings } from "@/app/useLogic_Home/component/Earnings";
import SlideTrending from "@/app/useLogic_Home/component/SlideTrending";
import TableRank from "@/app/useLogic_Home/component/TableRank";
import { TableUser } from "@/app/useLogic_Home/component/TableUser";
import TodaySale from "@/app/useLogic_Home/component/TodaySale";
import React from "react";

function Content() {
  return (
    <div className="flex md:min-w-[calc(100%-250px)] min-w-full  h-auto justify-start items-start lg:gap-x-3 flex-row 2xl:gap-x-3 gap-y-5    flex-wrap  ">
      <div className=" bg-content1 w-full rounded-xl 2xl:w-[66%] h-auto md:h-[320px] lg:w-[99%] 2xl:h-[330px]">
        <TodaySale />
      </div>
      <div className=" bg-content1 w-full md:mt-[200px] lg:mt-0    rounded-xl h-[450px] 2xl:h-[330px] lg:w-[32%] ">
        <ChartsCollum />
      </div>
      <div className=" bg-content1 w-full   rounded-xl h-[450px] lg:w-[66%] ">
        <TableRank />
      </div>
      <div className=" bg-content1 w-full  rounded-xl h-[450px] xl:w-[32%] lg:w-[49%]">
        <Charttwoline />
      </div>

      <div className=" bg-content1 w-full  rounded-xl h-[450px] 2xl:h-[450px] xl:w-[66%] lg:w-[49%] 2xl:order-2">
        <ChartsLine />
      </div>
      <div className=" bg-content1 w-full lg:w-full rounded-xl h-[500px] 2xl:h-[450px] xl:w-[32%] 2xl:order-1">
        <Earnings />
      </div>

      <div className=" bg-content1 w-full 2xl:ml-0 rounded-xl   lg:w-full h-[500px]  2xl:order-3  xl:w-[66%] 2xl:w-[49%] ">
        <SlideTrending />
      </div>
      <div className="  2xl:w-[49%] h-auto md:h-[500px] w-full  lg:w-[99%] 2xl:order-4 ">
        <TableUser />
      </div>
      <div className="mt-2 text-white w-full text-center md:text-end md:h-[60px]   h-[130px] pb-10 2xl:order-5 px-5 mb-24 ">
        <h1 className="">Made in vietname 🇻🇳</h1>
      </div>
      {/* <div className="mt-14 text-white w-full text-center    h-[60px]  2xl:order-5 px-5 mb-24 ">
        <h1>Made in vietname 🇻🇳</h1>
      </div> */}
    </div>
  );
}

export default Content;
