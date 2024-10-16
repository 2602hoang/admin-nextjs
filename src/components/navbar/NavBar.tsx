"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuProps } from "antd";
import { NavbarProps, useLogicNavbar } from "./useLogic";
import { useRouter } from "next/navigation";
import clsx from "clsx";
const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setSize({ width: window.innerWidth });
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
const Navbar: React.FC<NavbarProps> = ({
  collapsed,
  setCollapsed,
  toggleCollapsed,
}) => {
  const { items, current, setCurrent } = useLogicNavbar({
    collapsed,
    setCollapsed,
    toggleCollapsed,
  });
  const [flag, setFlag] = useState<string>("");
  const router = useRouter();
  const { width } = useWindowSize();

  const onClick: MenuProps["onClick"] = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem) {
      setCurrent(selectedItem.key);
      router.push(selectedItem.key);
      if (width < 768) {
        toggleCollapsed();
      }
      return;
    }
  };

  useEffect(() => {
    setFlag(collapsed ? "open" : "close");
  }, [collapsed]);

  return (
    <div
      className={clsx(
        "h-screen overflow-hidden bg-brown fixed md:relative border-r-[1px] border-r-darker-gray border-solid hover:overflow-y-auto",
        collapsed ? "w-[239px]" : "w-0 md:w-[110px]",
        flag === "open" ? "open-menu" : "close-menu hidden md:block"
      )}
    >
      <div
        className={clsx(
          collapsed ? "" : "w-0 md:w-[110px]",
          "h-[98px] sticky top-0 z-40 left-0 "
        )}
      >
        <div
          className={clsx(
            "flex h-[98px] w-full justify-center  items-center",
            collapsed ? "px-[49px] pt-[6px]" : "px-9"
          )}
        >
          <a href="/">
            {!collapsed ? (
              <img
                title="Light_Teal"
                className="w-[30px] h-10"
                src="https://themewagon.github.io/nickelfox/LOGO.png"
              />
            ) : (
              <img
                title="Light_Teal"
                className="w-[140px] h-10"
                src="https://themewagon.github.io/nickelfox/Logo-with-text.png"
              />
            )}
          </a>
        </div>
      </div>
      <div className="pt-[3px]">
        <Menu
          selectedKeys={[current]}
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          className={clsx(
            collapsed ? "px-5" : "pl-7 pt-[6px]",
            "text-[16px] h-11 space-y-[17px] font-medium"
          )}
          items={items}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
