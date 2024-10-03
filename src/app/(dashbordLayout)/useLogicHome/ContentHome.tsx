import React from "react";
import TableRank from "./componentHome/TableRank";
import { Earnings } from "./componentHome/Earnings";
import SlideTrending from "./componentHome/SlideTrending";
import { TableUser } from "./componentHome/TableUser";
import TodaySale from "./componentHome/TodaySale";
import {
  ChartsColumnLevel,
  ChartsLine,
  Charttwoline,
} from "./componentHome/AllCharts";
import Charts from "./componentHome/ComponentCharts";
function Content() {
  return (
    <div className="grid grid-cols-12 gap-[14px] h-auto overflow-hidden">
      <div className="2xl:col-span-8 wrapper-box-style-mobile">
        <TodaySale />
      </div>
      <div className="lg:col-span-4 wrapper-box-style-mobile ">
        <Charts title={"Level"} charts={<ChartsColumnLevel />} />
      </div>
      <div className="lg:col-span-8 wrapper-box-style-mobile ">
        <TableRank />
      </div>
      <div className=" xl:col-span-4 lg:col-span-6 wrapper-box-style-mobile">
        <Charts title={"Customer Fulfillment"} charts={<Charttwoline />} />
      </div>
      <div className=" xl:col-span-8 wrapper-box-style-mobile lg:col-span-12  md:order-3 lg:order-3 xl:order-2 2xl:order-2">
        <Charts title={"Visitor Insights"} charts={<ChartsLine />} />
      </div>
      <div className=" xl:col-span-4 min-h-[470px] lg:col-span-6 wrapper-box-style-mobile md:order-2 lg:order-2 xl:order-3  2xl:order-1">
        <Earnings />
      </div>
      <div className=" xl:col-span-8 2xl:col-span-6   wrapper-box-style-mobile lg:order-4  md:order-4 ">
        <SlideTrending />
      </div>
      <div className="2xl:col-span-6  wrapper-box-style-mobile min-h-[460px]   lg:order-5 md:order-5">
        <TableUser />
      </div>

      <div className="col-span-12 text-center md:text-end h-[60px] mt-5 px-10 lg:order-5   md:order-6">
        <h1 className="">Made in vietname 🇻🇳</h1>
      </div>
    </div>
  );
}

export default Content;
