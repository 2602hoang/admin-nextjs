"use client";
import "@/style/index.css";
import { Inter } from "next/font/google";
import Navbar from "../navbar/NavBar";
import { Header } from "../header/Header";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className=" md:w-full grid grid-cols-5 font-sans grid-rows-5 h-screen overflow-hidden">
          {/* Navbar */}
          <div
            className={`${
              collapsed ? "w-full md:w-[250px]" : "w-3/5 md:w-[80px] z-50"
            } fixed top-0 left-0 h-screen  bg-gray-800  transform transition-transform duration-300 md:translate-x-0 md:relative md:row-span-5`}
          >
            <Navbar
              toggleCollapsed={toggleCollapsed}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
          </div>

          {/* Overlay for Drawer */}
          {!collapsed && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleCollapsed}
            ></div>
          )}

          {/* Header */}
          <div
            className={`${
              collapsed
                ? "col-span-4 md:ml-[250px] ml-0"
                : " md:col-span-4 md:ml-[80px] ml-0"
            } h-16 transition-all duration-300 bg-menu fixed top-0 left-0 right-0`}
          >
            <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
          </div>

          {/* Main Content */}
          <div
            className={`${
              collapsed
                ? "col-span-4 md:ml-[250px] ml-0 mt-16 "
                : "col-span-4 md:ml-[80px] ml-0 mt-16"
            } h-screen transition-all duration-300 bg-menu fixed top-0 left-0 right-0 overflow-auto`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default LayoutPage;
