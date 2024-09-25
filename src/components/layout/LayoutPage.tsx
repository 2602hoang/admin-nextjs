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
    setCollapsed((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <html lang="en">
      <body>
        <div className="w-full font-inter flex  h-screen relative bg-brown overflow-hidden">
          {/* Navbar */}
          <div
            className={`bg-brown  ${
              collapsed
                ? "w-[239px] z-50 md:relative fixed"
                : "md:w-[110px] w-0"
            }`}
          >
            <Navbar
              toggleCollapsed={toggleCollapsed}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
          </div>
          {collapsed && (
            <div
              className="fixed inset-0 bg-black bg-opacity-30  z-50 md:hidden"
              onClick={toggleCollapsed}
            />
          )}
          <div className={`flex w-full flex-col  md:relative  overflow-auto  `}>
            {/* Header */}
            <div className={`h-[116px] sticky top-0 z-30`}>
              <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
            </div>
            {/* Main Content */}
            <div className={`flex-grow`}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default LayoutPage;
