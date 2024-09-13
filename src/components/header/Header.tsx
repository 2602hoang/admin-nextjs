import { DataIcon } from "@/assets/DataIcon";
import { BellOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Input, MenuProps, Space } from "antd";
import React from "react";
interface HeaderProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}
export const Header: React.FC<HeaderProps> = ({
  collapsed,
  toggleCollapsed,
}) => {
  const {
    IconHelp,
    SwitchAccout,
    IconSettingAccout,
    IconViewProfile,
    IconNotication,
    IconOut,
  } = DataIcon();
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
        <a href="#" className=" gap-2 flex-row flex items-center">
          <IconOut /> <span className="text-red-500">Logout</span>
        </a>
      ),
      key: "5",
    },
  ];
  const { IconColese, IconOpen } = DataIcon();
  return (
    <div
      className={` h-16 px-1 md:px-6 flex items-center
         bg-menu justify-between  transition-all duration-300`}
    >
      <div className="flex items-center gap-1 md:gap-5 w-full">
        <Button type="text" onClick={toggleCollapsed}>
          {!collapsed ? <IconColese /> : <IconOpen />}
        </Button>
        <Input
          className=" md:w-1/2 flex bg-slate-500 text-white border-slate-500 focus-within:bg-slate-700 focus-within:border-white hover:bg-slate-700"
          placeholder="Search here . . . "
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="flex items-center flex-row  md:gap-4">
        <Badge dot={true}>
          <Button
            // onClick={toggleCollapsed}
            type="text"
            icon={<BellOutlined style={{ color: "white", fontSize: "30px" }} />}
          ></Button>
        </Badge>

        <Avatar className="bg-white 	 text-black" size="large">
          A
        </Avatar>
        <Dropdown className="bg-menu" menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <DownOutlined
                className="hover:cursor-pointer"
                style={{ color: "white" }}
              />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};
