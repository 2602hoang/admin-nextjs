
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
    <div className="flex  w-full gap-[14px] flex-wrap h-auto">
      <div className=" div_home 2xl:w-[66%] lg:w-[99.5%]  ">
        <TodaySale />
      </div>
      <div className=" div_home lg:w-[32.5%] 2xl:w-[32%]">
        <ChartsCollum />
      </div>
      <div className=" div_home  lg:w-[65.5%] xl:w-[66%]  ">
        <TableRank />
      </div>
      <div className=" div_home  xl:w-[32.5%] lg:w-[49%] 2xl:w-[32%] md:order-1 xl:order-1  lg:order-1">
        <Charttwoline />
      </div>
      <div className=" div_home xl:w-[66%] lg:w-[99.5%]  md:order-3 lg:order-3 xl:order-2 2xl:order-2">
        <ChartsLine />
      </div>
      <div className=" div_home  lg:w-[49%]  xl:w-[32.5%]  md:order-2 lg:order-2 xl:order-3 2xl:w-[32%] 2xl:order-1">
        <Earnings />
      </div>
      <div className=" div_home lg:order-4  md:order-4 lg:w-[99.5%] xl:w-[66%] 2xl:w-[49%] ">
        <SlideTrending />
      </div>
      <div className=" div_home 2xl:w-[49%] min-h-[460px]    lg:w-[99.5%]  lg:order-5 md:order-5">
        <TableUser />
      </div>

      <div className="w-full text-center md:text-end h-[60px] my-16 px-10 lg:order-5   md:order-6">
        <h1 className="">Made in vietname 🇻🇳</h1>
      </div>
    </div>
  );
}

export default Content;
