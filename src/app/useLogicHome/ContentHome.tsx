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
    <div className="flex w-full  h-auto justify-start items-start gap-[14px]  flex-wrap  ">
      <div className=" bg-content1 rounded-xl  h-auto 2xl:w-[66%] lg:w-[99.5%] w-[100%] ">
        <TodaySale />
      </div>
      <div className=" bg-content1 rounded-xl h-auto  md:h-[398px] 2xl:h-[330px]  w-[100%] lg:w-[32.5%] 2xl:w-[32%]">
        <ChartsCollum />
      </div>
      <div className=" bg-content1 rounded-xl w-full  h-auto md:h-[398px] 2xl:h-[467px]  lg:w-[65.5%] xl:w-[66%] md:w-[100%] ">
        <TableRank />
      </div>
      <div className=" bg-content1 rounded-xl w-full  h-auto xl:h-[467px] md:h-[450px]  md:w-[100%] xl:w-[32.5%] lg:w-[49%] 2xl:w-[32%] md:order-1 xl:order-1  lg:order-1">
        <Charttwoline />
      </div>

      <div className=" bg-content1 rounded-xl w-full h-auto xl:h-[467px] xl:w-[66%] lg:w-[100%]  md:order-3 lg:order-3 xl:order-2 2xl:order-2">
        <ChartsLine />
      </div>
      <div className=" bg-content1  rounded-xl w-full  h-auto lg:w-[49%] xl:h-[467px] xl:w-[32.5%] md:w-[100%] md:order-2 lg:order-2 xl:order-3 2xl:w-[32%] 2xl:order-1">
        <Earnings />
      </div>

      <div className=" bg-content1 rounded-xl h-auto  xl:h-[467px] md:w-full  lg:order-4  md:order-4 xl:w-[66%] 2xl:w-[49%] ">
        <SlideTrending />
      </div>
      <div className=" bg-content1 rounded-xl 2xl:w-[49%] xl:h-[449px] 2xl:h-[467px] h-auto   w-full xl:w-[99.5%]  lg:order-5 md:order-5">
        <TableUser />
      </div>

      <div className="mt-5 text-white w-full text-center md:text-end md:h-[60px]  pb-10 lg:order-5 px-5 mb-24 md:order-6">
        <h1 className="">Made in vietname 🇻🇳</h1>
      </div>
    </div>
  );
}

export default Content;
