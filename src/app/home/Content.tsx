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
    <div className="w-full flex flex-col bg-menu my-6  pb-5">
      {/* <h1 className="text-2xl font-bold leading-9">Dashbord</h1> */}

      <div className=" w-full h-auto flex flex-col gap-5 lg:grid md:grid-rows-4 lg:grid-cols-6 lg:grid-rows-6 xl:grid-rows-4  lg:gap-x-5 sm:grid-rows-7  py-5 ">
        <div className="flex w-full md:max-h-[550px]  lg:col-span-6 lg:row-start-1 2xl:col-span-4 justify-center">
          <TodaySale />
        </div>
        <div className="w-full md:max-h-[550px]  bg-content1 rounded-lg p-5 sm:flex   lg:col-span-4 lg:col-start-3 lg:row-start-2 row-start-2  2xl:col-start-1 2xl:col-span-4">
          <TableRank />
        </div>
        <div className="w-full md:max-h-[550px]  bg-content1 rounded-lg p-5 sm:flex  lg:col-span-2 lg:col-start-1  lg:row-start-2 2xl:col-span-2 2xl:row-start-1 ">
          <ChartsCollum />
        </div>

        <div className="w-full md:max-h-[550px]  bg-content1 rounded-lg p-5 sm:flex  lg:col-span-3   xl:col-span-4 xl:col-start-3 xl:row-start-3 row-start-3 2xl:row-start-2 2xl:col-span-2">
          <Charttwoline />
        </div>
        <div className="w-full md:max-h-[550px]  bg-content1 rounded-lg p-5 sm:flex  lg:col-span-3 xl:col-span-2 xl:col-start-1  xl:row-start-3">
          <Earnings />
        </div>

        <div className="w-full  md:max-h-[550px]  bg-content1 rounded-lg p-2  sm:flex lg:row-start-4 lg:col-span-6 xl:col-span-4 xl:col-start-3 xl:row-start-4 2xl:col-start-1  2xl:col-span-3 ">
          <SlideTrending />
        </div>
        <div className="w-full md:max-h-[550px]  bg-content1 rounded-lg p-5 sm:flex lg:row-start-5 lg:col-span-6 xl:col-span-2 xl:col-start-1 xl:row-start-4  2xl:row-start-3 2xl:col-start-3 2xl:col-span-4 ">
          <ChartsLine />
        </div>

        <div className="w-full  md:max-h-[550px]  bg-content1 rounded-lg p-2 lg:row-start-6  lg:col-span-6 row-start-6 xl:row-start-5 2xl:row-start-4 2xl:col-span-3  2xl:col-start-4">
          <TableUser />
        </div>
      </div>
    </div>
  );
}

export default Content;
