import { DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons";
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
        <a href="#" className="gap-2 flex-row flex items-center">
          <IconViewProfile />
          View Profile
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a href="#" className="gap-2 flex-row flex items-center">
          <IconSettingAccout />
          Account Settings
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="#" className="gap-2 flex-row flex items-center">
          <IconNotication />
          Notifications
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a href="#" className="gap-2 flex-row flex items-center">
          <SwitchAccout /> Switch Account
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a href="#" className="gap-2 flex-row flex items-center">
          <IconHelp /> Help Center
        </a>
      ),
      key: "4",
    },
    {
      // icon: <IconOut />,
      label: (
        <a href="/auth/Login" className=" gap-2 flex-row flex items-center">
          <IconOut /> <span className="text-red-500">Logout</span>
        </a>
      ),
      key: "5",
    },
  ];
  return (
    <div
      className={` h-28 px-2  flex items-center z-50
         bg-menu justify-between  transition-all duration-300`}
    >
      <div className="flex items-center gap-1 md:gap-4  w-full">
        <Button className=" rounded-full" type="text" onClick={toggleCollapsed}>
          {collapsed ? <IconColese /> : <IconOpen />}
        </Button>
        <Input
          className=" md:w-[67%] h-[52px]    flex text-sm border-none bg-content1 text-white  border-slate-500 focus-within:bg-[#88888c]  hover:bg-[#88888c]"
          placeholder="Search here . . . "
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="flex gap-x-1 md:gap-x-4 flex-row items-center ">
        <div className="relative">
          <Badge dot={true}>
            <Button type="text" icon={<IconNotications />} />
          </Badge>
        </div>
        <div className="flex flex-row items-center gap-x-1 md:gap-x-4 pr-3">
          <Avatar className="bg-white size-10 	 text-black">A</Avatar>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            onOpenChange={toggleDropdown}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {dropdownVisible ? (
                  <UpOutlined
                    className="cursor-pointer"
                    style={{ color: "white" }}
                  />
                ) : (
                  <DownOutlined
                    className="cursor-pointer"
                    style={{ color: "white" }}
                  />
                )}
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
