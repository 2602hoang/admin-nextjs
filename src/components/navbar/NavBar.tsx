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
      className={`flex gap-y-3 flex-col h-screen bg-menu w-full 
${flag === "open" ? "open-menu" : "close-menu"}
       border-r-[0.5px] border-r-border_menu border-solid  `}
    >
      <div className="flex h-24  ">
        <div className="flex h-24 flex-row md:justify-center w-full justify-center items-center md:px-0 pl-7">
          <a href="/">
            {!collapsed ? (
              <img
                title="logo"
                className="bg-menu w-[31px] h-10"
                src="https://themewagon.github.io/nickelfox/LOGO.png"
              />
            ) : (
              <img
                title="logo"
                className="bg-menu w-40 h-10"
                src="https://themewagon.github.io/nickelfox/Logo-with-text.png"
              />
            )}
          </a>
        </div>
      </div>
      <div
        className={`flex ${
          collapsed ? "justify-start items-start z-50 w-full " : ""
        }   bg-menu   h-full  overscroll-y-auto hover:overflow-y-auto `}
      >
        <Menu
          selectedKeys={[current]}
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          className=" text-[1rem]  space-y-[19px] pl-[18px] font-medium "
          items={items}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
