"use client";
import React from "react";
import { Avatar, Menu, MenuProps } from "antd";

import { useLogicNavbar } from "./useLogic";

interface NavbarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleCollapsed: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ collapsed, setCollapsed }) => {
  const { items, current, setCurrent } = useLogicNavbar();
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  console.log(current);

  return (
    <div
      className={`flex flex-col h-screen bg-menu w-full 

       border-r-[0.5px] border-r-slate-400 border-solid  `}
    >
      <div className="flex h-16  ">
        <div className="flex h-16 flex-row md:justify-center w-full justify-between items-center md:px-0 px-5">
          <Avatar className="bg-white text-black" size="large">
            LOGO
          </Avatar>
        </div>
      </div>
      <div
        className={`flex ${
          collapsed ? "justify-start items-center w-full " : ""
        }   bg-menu   h-full  overscroll-y-auto hover:overflow-y-auto `}
      >
        <Menu
          selectedKeys={[current]}
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          className=" h-[100%]"
          items={items}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
