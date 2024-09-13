"use client";
import "@/style/index.css";
import { Inter } from "next/font/google";
import Navbar from "../navbar/NavBar";
import { Header } from "../header/Header";
import { useState, useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);
  // Simulate loading

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {loading === true ? (
          <div className="flex flex-row gap-3 w-full h-screen justify-center items-center text-center">
            <h1 className="text-3xl text-red-500">Loading...</h1>
            <div className="size-8 rounded-full bg-red-500 animate-bounce"></div>
            <div className="size-8 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
            <div className="size-8 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        ) : (
          <div className="md:w-full grid grid-cols-5 font-sans grid-rows-5 h-screen overflow-hidden relative">
            {/* Navbar */}
            <div
              className={`${
                collapsed ? "w-full md:w-[250px]" : "w-3/5 md:w-[80px] z-50"
              } fixed top-0 left-0 h-screen transform transition-transform duration-300 md:translate-x-0 bg-menu md:row-span-5`}
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
                  : "md:col-span-4 md:ml-[80px] ml-0"
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
        )}
      </body>
    </html>
  );
};

export default LayoutPage;
