"use client";
import "@/style/index.scss";
import { useEffect, useState } from "react";
import { FloatButton } from "antd";
import { LoadingPage } from "@/components/loading/LoadingPage";
import Navbar from "@/components/navbar/NavBar";
import { Header } from "@/components/header/Header";
import clsx from "clsx";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };
  const { userToken } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!userToken) {
      return router.push("/login");
    }
  }, [router]);
  return (
    <>
      <LoadingPage />
      <div className="w-full font-inter flex md:h-screen fixeds md:relative bg-brown ">
        <div
          className={clsx(
            "relative ",
            collapsed ? "md:w-[239px] z-50" : "md:w-[110px] w-0"
          )}
        >
          <Navbar
            toggleCollapsed={toggleCollapsed}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
          {collapsed && (
            <div
              className="h-screen bg-brown opacity-80 fixed  right-0 top-0 z-50 md:hidden w-custom"
              onClick={toggleCollapsed}
            />
          )}
        </div>
        <div className="w-full bg-brown md:relative min-h-screen md:overflow-auto">
          <div className="h-[116px] md:sticky top-0 z-30">
            <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
          </div>
          <div className="text-white px-3 md:px-[21px] relative">
            {children}
            <FloatButton.BackTop className="h-16 w-16" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutPage;
