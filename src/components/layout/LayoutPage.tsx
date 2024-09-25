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
          <div className="w-full font-inter h-screen overflow-hidden relative">
            {/* Navbar */}
            <div
              className={`${
                !collapsed ? "md:w-[110px] w-0" : "w-[240px] "
              } fixed top-0 left-0 h-screen  bg-Brown  z-50`}
            >
              <Navbar
                toggleCollapsed={toggleCollapsed}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
              />
            </div>
            {collapsed && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                onClick={toggleCollapsed}
              ></div>
            )}

            {/* Header */}
            <div
              className={`${
                collapsed ? "md:ml-[240px] ml-0" : " md:ml-[110px] ml-0"
              } h-[116px] z-999 bg-Brown fixed px-3 top-0 left-0 right-0`}
            >
              <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
            </div>

            {/* Main Content */}
            <div
              className={`${
                collapsed ? "md:ml-[240px] ml-0" : "md:ml-[110px] ml-0"
              } h-screen flex-grow  font-inter  bg-Brown fixed  top-[80px] md:top-[116px] left-0 right-0 overflow-auto`}
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
