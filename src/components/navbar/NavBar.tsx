"use client";
import React from "react";
import { Avatar, Button, Menu, MenuProps } from "antd";
import { CloseSquareOutlined } from "@ant-design/icons";

import { useLogicNavbar } from "./useLogic";

interface NavbarProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
  selectedKey: string; // Accept selectedKey prop
  handleMenuClick: MenuProps["onClick"]; // Accept handleMenuClick prop
}

const Navbar: React.FC<NavbarProps> = ({
  collapsed,
  toggleCollapsed,
  handleMenuClick,
}) => {
  const { items } = useLogicNavbar();

  return (
    <div className={`flex flex-col  h-screen bg-menu w-full md:w-full`}>
      <div className="flex h-16  ">
        <div className="flex h-16 flex-row md:justify-center w-full justify-between items-center md:px-0 px-5">
          <Avatar className="bg-white text-black" size="large">
            LOGO
          </Avatar>
          <div className="md:hidden flex items-end justify-end">
            <Button
              type="link"
              icon={
                <CloseSquareOutlined
                  style={{ color: "#FF0000", fontSize: 25 }}
                />
              }
              onClick={toggleCollapsed}
            />
          </div>
        </div>
      </div>
      <div
        className={`flex ${
          collapsed ? "justify-start items-center " : "w-full"
        }   bg-menu  h-full overflow-y-hidden overscroll-auto hover:overflow-y-auto `}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          className={`h-[100%]`}
          inlineCollapsed={collapsed}
          items={items}
          onClick={handleMenuClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
