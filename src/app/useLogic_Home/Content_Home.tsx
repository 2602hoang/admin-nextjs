/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import TableRank from "./component/TableRank";

import { Earnings } from "./component/Earnings";
import SlideTrending from "./component/SlideTrending";
import ChartsLine from "./component/ChartsLine";
import { TableUser } from "./component/TableUser";
import { Charttwoline } from "./component/Charttwoline";
import ChartsCollum from "./component/ChartsCollum";
import TodaySale from "./component/TodaySale";

function Content() {
  return (
    <div className="flex w-full  h-auto justify-start items-start gap-x-[14px] flex-row  gap-y-[13px]    flex-wrap  ">
      <div className=" bg-content1 w-full rounded-xl 2xl:w-[66%] xl:w-[99%]  h-auto md:h-[320px] xl:h-[400px] lg:w-[99%] md:w-[100%]  2xl:h-[330px]">
        <TodaySale />
      </div>
      <div className=" bg-content1 w-full md:mt-[214px] lg:mt-0  md:w-[100%] xl:w-[31%] rounded-xl h-[400px] 2xl:h-[330px] lg:w-[31%] 2xl:w-[32%]">
        <ChartsCollum />
      </div>
      <div className=" bg-content1 w-full  lg:mt-0  rounded-xl 2xl:h-[450px] h-[500px] md:h-[400px] lg:w-[67%] 2xl:w-[66%] md:w-[100%] ">
        <TableRank />
      </div>
      <div className=" bg-content1 w-full  rounded-xl h-[400px] lg:h-[450px] xl:h-[450px] md:w-[100%] xl:w-[31%] lg:w-[49%] 2xl:w-[32%] xl:order-1  lg:order-1">
        <Charttwoline />
      </div>

      <div className=" bg-content1 w-full  rounded-xl h-[400px] 2xl:h-[450px] xl:h-[450px] xl:w-[67%] lg:w-[100%] lg:order-3 xl:order-2 2xl:w-[66%] 2xl:order-2">
        <ChartsLine />
      </div>
      <div className=" bg-content1 w-full  rounded-xl h-[450px] 2xl:h-[450px] lg:w-[49%] xl:w-[31%] md:w-[100%]  lg:order-2 xl:order-3 2xl:w-[32%] 2xl:order-1">
        <Earnings />
      </div>

      <div className=" bg-content1 w-full 2xl:ml-0 rounded-xl   lg:w-full h-[450px] 2xl:h-[500px]  lg:order-4  xl:w-[67%] 2xl:w-[48.5%] ">
        <SlideTrending />
      </div>
      <div className="  2xl:w-[49.5%]  h-auto md:h-[500px] w-full  lg:w-[99%] lg:order-5 ">
        <TableUser />
      </div>

      <div className="mt-2 text-white w-full text-center md:text-end md:h-[60px]   h-[130px] pb-10 lg:order-5 px-5 mb-24 ">
        <h1 className="">Made in vietname 🇻🇳</h1>
      </div>
      {/* <div className="mt-14 text-white w-full text-center    h-[60px]  2xl:order-5 px-5 mb-24 ">
        <h1>Made in vietname 🇻🇳</h1>
      </div> */}
    </div>
  );
}

export default Content;
