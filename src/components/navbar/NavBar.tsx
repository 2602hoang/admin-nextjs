/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuProps } from "antd";

import { useLogicNavbar } from "./useLogic";
import { useRouter } from "next/navigation";

interface NavbarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleCollapsed: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ collapsed }) => {
  const { items, current, setCurrent } = useLogicNavbar();
  const [flag, setFlag] = useState<string>("");
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem) {
      setCurrent(selectedItem.key);
      router.push(selectedItem.key);
    }
  };
  useEffect(() => {
    setFlag(collapsed ? "open" : "close");
  }, [collapsed]);
  console.log(flag);

  return (
    <div
      className={` h-screen bg-menu relative
${flag === "open" ? "open-menu  pt-[10px]" : "close-menu hidden md:block"}
       border-r-[1px] border-r-border_menu border-solid z-20 w-full `}
    >
      <div
        className={`${
          collapsed ? "w-[240px]" : "w-0 md:w-[110px]"
        } h-[98px] fixed justify-center items-center flex bg-menu top-0 border-r-[1px] border-r-border_menu border-solid z-50  left-0 px-5 `}
      >
        <div
          className={`${
            collapsed ? " px-[25px] pt-[32px] pb-[26px]" : " "
          } flex h-[98px] w-full  justify-center items-center  `}
        >
          <a href="/">
            {!collapsed ? (
              <img
                title="logo"
                className="bg-menu w-[30px] h-10"
                src="https://themewagon.github.io/nickelfox/LOGO.png"
              />
            ) : (
              <img
                title="logo"
                className="bg-menu w-[140px] h-10"
                src="https://themewagon.github.io/nickelfox/Logo-with-text.png"
              />
            )}
          </a>
        </div>
      </div>
      <div
        className={`flex  overscroll-y-auto hover:overflow-y-auto ${
          collapsed ? "justify-start items-start  w-full " : ""
        }   bg-menu   h-full z-30  pt-[102px]`}
      >
        <Menu
          selectedKeys={[current]}
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          className={`${
            collapsed ? "px-5" : "pl-[29px] py-1 "
          } text-[1rem] h-11 space-y-[16px]  font-medium `}
          items={items}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
