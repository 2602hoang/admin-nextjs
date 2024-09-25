/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
      className={` h-screen overflow-hidden  relative border-r-[1px] border-r-darker-gray border-solid  overscroll-y-auto hover:overflow-y-auto
      ${collapsed ? "w-[239px] " : "w-0 md:w-[110px]"}
      ${flag === "open" ? "open-menu  " : "close-menu hidden md:block"}`}
    >
      <div
        className={`${
          collapsed ? " " : "w-0 md:w-[110px]"
        } h-[98px] sticky  top-0  z-50  left-0 bg-brown `}
      >
        <div
          className={`flex h-[98px] w-full  justify-center items-center ${
            collapsed ? "px-[49px] pt-[6px] " : "px-9"
          }`}
        >
          <a href="/">
            {!collapsed ? (
              <img
                title="Light_Teal"
                className=" w-[30px] h-10"
                src="https://themewagon.github.io/nickelfox/LOGO.png"
              />
            ) : (
              <img
                title="Light_Teal"
                className=" w-[140px] h-10"
                src="https://themewagon.github.io/nickelfox/Logo-with-text.png"
              />
            )}
          </a>
        </div>
      </div>
      <div className={`pt-[3px]`}>
        <Menu
          selectedKeys={[current]}
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          className={`${
            collapsed ? "px-5" : "pl-7 pt-[6px] "
          } text-[16px] h-11 space-y-[17px]  font-medium `}
          items={items}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
