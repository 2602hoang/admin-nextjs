"use client";
import "@/style/index.css";
import { Roboto } from "next/font/google";
import Navbar from "../navbar/NavBar";
import { Header } from "../header/Header";
import { useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
interface LayoutPageProps {
  children: React.ReactNode;
  selectedKey: string;
  handleMenuClick: (key: string) => void;
}

const LayoutPage: React.FC<LayoutPageProps> = ({
  children,
  selectedKey,
  handleMenuClick,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div className="w-full grid grid-cols-5 grid-rows-5 h-screen overflow-hidden">
          {/* Navbar */}
          <div
            className={`${
              collapsed
                ? " w-0 md:w-[80px]  "
                : " md:w-[250px] w-4/5   md:z-0 fixed z-[999] top-0 left-0 transition-transform  md:translate-x-0"
            } h-screen md:row-span-5 transition-all duration-300 bg-gray-800 `}
          >
            <Navbar
              selectedKey={selectedKey}
              handleMenuClick={(e) => handleMenuClick(e.key)}
              toggleCollapsed={toggleCollapsed}
              collapsed={collapsed}
            />
          </div>

          {/* Header */}
          <div
            className={`${
              collapsed
                ? " md:col-span-4 md:ml-[80px] border-l-2"
                : "col-span-4 md:ml-[250px] ml-0 z-999"
            } h-16 transition-all duration-300 bg-menu fixed top-0 left-0 right-0`}
          >
            <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
          </div>

          {/* Main Content */}
          <div
            className={`${
              collapsed
                ? "col-span-4 md:ml-[80px] ml-0  mt-16 "
                : "col-span-4 ml-[250px] mt-16"
            } h-screen  transition-all duration-300 fixed bg-menu top-0 left-0 right-0`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default LayoutPage;
