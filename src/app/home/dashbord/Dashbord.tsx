import { Card } from "antd";
import React, { useState } from "react";

function Dashbord() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState([
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 22h18M5.6 8.38H4c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V9.38c0-.55-.45-1-1-1ZM12.8 5.19h-1.6c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.19c0-.55-.45-1-1-1ZM20 2h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Z"
            stroke="#fcb859"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      number: <h1>$5k</h1>,
      title: <p>Total Order</p>,
      discription: <p className="text-[#FCB859]">+10% from yesterday</p>,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8 2v3M16 2v3M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5ZM8 11h8M8 16h4"
            stroke="#A9DFD8"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      number: <h1>500</h1>,
      title: <p>Total Order</p>,
      discription: <p className="text-[#A9DFD8]">+8% from yesterday</p>,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21.01 11.22v4.49c0 4.49-1.79 6.29-6.29 6.29H9.33c-.58 0-1.11-.03-1.6-.1M3.04 15.52v-4.3M12.03 12c1.83 0 3.18-1.49 3-3.32L14.36 2H9.69l-.67 6.68C8.84 10.51 10.2 12 12.03 12Z"
            stroke="#f2c8ed"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18.33 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.99 3 19.99 2 17.37 2h-3.05l.7 7.01c.18 1.65 1.66 2.99 3.31 2.99ZM5.67 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.62C4 2 3 3 2.64 5.6l-.28 2.75C2.16 10.36 3.65 12 5.67 12Z"
            stroke="#f2c8ed"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 19c0 .75-.21 1.46-.58 2.06-.19.32-.42.61-.69.84-.03.04-.06.07-.1.1-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45C1.21 20.46 1 19.75 1 19c0-1.26.58-2.39 1.5-3.12.17-.14.35-.26.54-.36C3.62 15.19 4.29 15 5 15c1 0 1.9.36 2.6.97.12.09.23.2.33.31C8.59 17 9 17.95 9 19ZM6.49 18.98H3.51M5 17.52v2.99"
            stroke="#f2c8ed"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      number: <h1>9</h1>,
      title: <p>Total Order</p>,
      discription: <p className="text-[#f2c8ed]">+2% from yesterday</p>,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37"
            stroke="#20aef3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 18c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 18 22a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 14 18a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67ZM19.49 17.98h-2.98M18 16.52v2.99"
            stroke="#20aef3"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      number: <h1>12</h1>,
      title: <p>Total Order</p>,
      discription: <p className="text-[#20aef3]">+3% from yesterday</p>,
    },
  ]);
  return (
    <div className="w-full flex flex-col bg-menu ">
      <h1 className="text-2xl font-bold leading-9">Dashbord</h1>
      {/* <div className="bg-gray-200 sm:bg-red-300 lg:bg-green-300 lg:bg-blue-300 lg:bg-yellow-300 2lg:bg-purple-300 p-4">
        Responsive Background Color
      </div> */}
      <div className="w-full flex flex-col gap-5 lg:grid lg:grid-cols-5 xl:grid-rows-5  lg:gap-1 sm:grid-rows-7 ">
        {/* 1 */}
        <div className="flex w-full h-auto  lg:col-span-5 lg:row-start-1 2xl:col-span-3 ">
          {/* 1 */}
          <div className="w-full h-auto bg-content1 text-white rounded-md p-5 space-y-5 flex-col flex">
            <div className="flex flex-col space-y-4">
              <h1 className="text-xl font-bold leading-9">Today’s Sales</h1>
              <h2 className="text-sm font-normal leading-5 text-slate-500">
                Sales Summary
              </h2>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  w-full gap-4">
              {data.map((item) => (
                <>
                  <Card className="w-full bg-content1_card text-white">
                    <div>{item.icon}</div>
                    <p>{item.number}</p>
                    <p>{item.title}</p>
                    <p>{item.discription}</p>
                  </Card>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="sm:flex sm:flex-col w-full lg:grid h-auto  gap-3 lg:col-span-5 lg:row-span-1 lg:row-start-2 2xl">
          <div className="w-full h-7 bg-content1 rounded-md p-5 sm:flex  lg:col-span-3 lg:col-start-3 lg:row-start-2 row-start-2  2xl:col-start-4 2xl:col-span-4">
            bang
          </div>
          <div className="w-full h-7 bg-content1 rounded-md p-5 sm:flex  lg:col-span-2 lg:col-start-1  lg:row-start-2 2xl:col-span-2 2xl:row-start-1 ">
            so do
          </div>
        </div>

        {/* 3 */}
        <div className="sm:flex sm:flex-col w-full xl:grid h-auto lg:flex-row  gap-3 lg:col-span-5 xl:col-span-5 xl:row-span-1 xl:row-start-3 lg:row-start-3">
          <div className="w-full h-7 bg-content1 rounded-md p-5 sm:flex   xl:col-span-3 xl:col-start-3 xl:row-start-3 row-start-3">
            so do
          </div>
          <div className="w-full h-7 bg-content1 rounded-md p-5 sm:flex   xl:col-span-2 xl:col-start-1  xl:row-start-3">
            so do
          </div>
        </div>
        {/* 4 */}
        <div className="sm:flex sm:flex-col w-full xl:grid h-auto  gap-3 lg:col-span-5 xl:col-span-5 xl:row-span-1 xl:row-start-4 ">
          <div className="w-full h-7 bg-content1 rounded-md p-5 sm:flex  xl:col-span-3 xl:col-start-3 xl:row-start-4 ">
            hinh slide
          </div>
          <div className="w-full h-7 bg-content1 rounded-md p-5 sm:flex  xl:col-span-2 xl:col-start-1  lg:row-start-4 ">
            so do
          </div>
        </div>
        <div className="w-full h-7 bg-content1 rounded-md p-5   col-span-5 row-start-5 lg:row-start-5">
          bang
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
