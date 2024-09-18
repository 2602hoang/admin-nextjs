"use client";
import "@/style/index.scss";
import Navbar from "../navbar/NavBar";
import { Header } from "../header/Header";
import { useState, useEffect } from "react";
import { LoadingPage } from "../loading/LoadingPage";

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

  return (
    <html lang="en">
      <body>
        {loading === true ? (
          <LoadingPage />
        ) : (
          <div className="w-full font-inter grid grid-cols-5  grid-rows-5 h-screen overflow-hidden relative">
            {/* Navbar */}
            <div
              className={`${
                !collapsed ? "md:w-[110px] w-0" : "w-[240px] "
              } fixed top-0 left-0 h-screen  bg-menu md:row-span-5 z-50
              `}
            >
              <Navbar
                toggleCollapsed={toggleCollapsed}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
              />
            </div>

            {/* Overlay for Drawer */}
            {collapsed && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                onClick={toggleCollapsed}
              ></div>
            )}

            {/* Header */}
            <div
              className={`${
                collapsed
                  ? "col-span-4 md:ml-[240px] ml-0"
                  : "md:col-span-4 md:ml-[110px] ml-0"
              } h-[116px] z-999 bg-menu fixed px-3 top-0 left-0 right-0`}
            >
              <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
            </div>

            {/* Main Content */}
            <div
              className={`${
                collapsed
                  ? "col-span-4 md:ml-[240px] ml-0"
                  : "col-span-4 md:ml-[110px] ml-0"
              } h-screen  font-inter  bg-menu fixed  top-[80px] md:top-[116px] left-0 right-0 overflow-auto`}
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
