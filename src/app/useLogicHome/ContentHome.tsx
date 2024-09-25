import React from "react";
import TableRank from "./component/TableRank";
import { Earnings } from "./component/Earnings";
import SlideTrending from "./component/SlideTrending";
import { TableUser } from "./component/TableUser";
import TodaySale from "./component/TodaySale";
import {
  ChartsColumnLevel,
  ChartsLine,
  Charttwoline,
} from "./component/AllCharts";
import Charts from "./component/ComponentCharts";

function Content() {
  return (
    <div className="grid grid-cols-12  gap-[14px]  h-auto overflow-hidden">
      <div className=" 2xl:col-span-8 wrapper-box-rounded-xl ">
        <TodaySale />
      </div>
      <div className=" lg:col-span-4 wrapper-box-rounded-xl">
        <Charts title={"Level"} charts={<ChartsColumnLevel />} />
      </div>
      <div className=" lg:col-span-8 wrapper-box-rounded-xl  ">
        <TableRank />
      </div>
      <div className=" xl:col-span-4 lg:col-span-6 wrapper-box-rounded-xl ">
        <Charts title={"Customer Fulfillment"} charts={<Charttwoline />} />
      </div>
      <div className=" xl:col-span-8 wrapper-box-rounded-xl lg:col-span-12  md:order-3 lg:order-3 xl:order-2 2xl:order-2">
        <Charts title={"Visitor Insights"} charts={<ChartsLine />} />
      </div>
      <div className=" xl:col-span-4 min-h-[470px] lg:col-span-6 wrapper-box-rounded-xl md:order-2 lg:order-2 xl:order-3  2xl:order-1">
        <Earnings />
      </div>
      <div className=" xl:col-span-8 2xl:col-span-6   wrapper-box-rounded-xl lg:order-4  md:order-4 ">
        <SlideTrending />
      </div>
      <div className="2xl:col-span-6  wrapper-box-rounded-xl min-h-[460px]   lg:order-5 md:order-5">
        <TableUser />
      </div>

      <div className="col-span-12 text-center md:text-end h-[60px] mt-5 px-10 lg:order-5   md:order-6">
        <h1 className="">Made in vietname 🇻🇳</h1>
      </div>
    </div>
  );
}

export default Content;
