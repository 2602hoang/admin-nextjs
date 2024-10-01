"use client";
import "@/style/index.scss";
import Navbar from "../navbar/NavBar";
import { Header } from "../header/Header";
import { useState, useEffect } from "react";
import { LoadingPage } from "../loading/LoadingPage";
import { FloatButton } from "antd";

interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <html lang="en">
      <body>
        <div className="w-full font-inter flex  md:h-screen relative bg-brown overflow-hidden">
          {/* Navbar */}
          <div
            className={`    ${
              collapsed ? " md:w-[239px] z-50" : "md:w-[110px] w-0 "
            }`}
          >
            <Navbar
              toggleCollapsed={toggleCollapsed}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
            {collapsed && (
              <div
                className=" h-screen inset-0 bg-brown bg-opacity-20  ml-[240px] fixed  z-50 md:hidden"
                onClick={toggleCollapsed}
              />
            )}
          </div>

          <div
            className={` w-full flex flex-col  bg-brown md:relative min-h-screen  overflow-y-auto  `}
          >
            {/* Header */}
            <div className={`h-[116px]  md:sticky top-0 z-30 `}>
              <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
            </div>
            {/* Main Content */}
            <div>
              {children}
              <FloatButton.BackTop className="h-16 w-16" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default LayoutPage;
