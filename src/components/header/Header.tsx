import { DownOutlined, UpOutlined } from "@ant-design/icons";
import {
  IconHelp,
  SwitchAccout,
  IconSettingAccout,
  IconViewProfile,
  IconNotication,
  IconOut,
  IconColese,
  IconOpen,
  IconNotications,
  IconSearch,
} from "@/assets/DataIcon";
import { Avatar, Badge, Button, Dropdown, Input, MenuProps, Space } from "antd";
import React, { useState } from "react";
interface HeaderProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}
export const Header: React.FC<HeaderProps> = ({
  collapsed,
  toggleCollapsed,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const items: MenuProps["items"] = [
    {
      label: (
        <a
          href="#"
          className="gap-2 text-focus_border flex-row flex items-center"
        >
          <IconViewProfile />
          <span className="text-focus_border"> View Profile</span>
        </a>
      ),
      key: "#",
    },
    {
      label: (
        <a
          href="#"
          className="gap-2 text-focus_border flex-row flex items-center"
        >
          <IconSettingAccout />
          <span className="text-focus_border"> Account Settings</span>
        </a>
      ),
      key: "#",
    },
    {
      label: (
        <a
          href="#"
          className="gap-2 text-focus_border flex-row flex items-center"
        >
          <IconNotication />
          <span className="text-focus_border"> Notifications</span>
        </a>
      ),
      key: "#",
    },
    {
      label: (
        <a
          href="#"
          className="gap-2 text-focus_border flex-row flex items-center"
        >
          <SwitchAccout />
          <span className="text-focus_border"> Switch Account</span>
        </a>
      ),
      key: "#",
    },
    {
      label: (
        <a
          href="#"
          className="gap-2 text-focus_border flex-row flex items-center"
        >
          <IconHelp /> <span className="text-focus_border"> Help Center</span>
        </a>
      ),
      key: "#",
    },
    {
      // icon: <IconOut />,
      label: (
        <a href="/Login" className=" gap-2 flex-row flex items-center">
          <IconOut /> <span className="text-red-500">Logout</span>
        </a>
      ),
      key: "/Login",
    },
  ];
  return (
    <div
      className={` h-20 md:h-[116px]  flex items-center z-50 
         bg-menu justify-between  transition-all duration-300`}
    >
      <div className="flex items-center   justify-start gap-2  w-full">
        <div className="">
          <button
            className="rounded-full text-center size-10 pl-2 "
            onClick={toggleCollapsed}
          >
            {collapsed ? <IconColese /> : <IconOpen />}
          </button>
        </div>
        <div className="w-full h-[52px]">
          <Input
            className=" md:w-[73%] 2xl:w-[71%]  h-full gap-x-[3px] rounded-lg pl-1 flex  border-none bg-content1 text-white  focus:border-focus_border  focus-within:bg-focus_border  hover:bg-focus_border"
            placeholder="  Search here..."
            prefix={<IconSearch />}
          />
        </div>
      </div>
      <div className="flex gap-x-1  md:gap-x-3 flex-row items-center justify-center ">
        <div className="relative">
          <Badge dot={true} className="pr-2">
            <Button type="text" icon={<IconNotications />} />
          </Badge>
        </div>
        <div className="flex  items-center gap-x-1 md:gap-x-4 pr-8">
          <Avatar
            src="data:image/png;base64,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"
            className=" size-11 text-black"
          />
          <Dropdown
            className=""
            menu={{ items }}
            trigger={["click"]}
            onOpenChange={toggleDropdown}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {dropdownVisible ? (
                  <UpOutlined className="cursor-pointer text-white" />
                ) : (
                  <DownOutlined className="cursor-pointer text-white" />
                )}
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
