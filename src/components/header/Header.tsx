import { DownOutlined, UpOutlined } from "@ant-design/icons";
import {
  IconColese,
  IconOpen,
  IconNotications,
  IconSearch,
} from "@/icon/DataIcon";
import { Avatar, Badge, Button, Dropdown, Input, Space, Modal } from "antd";
import React from "react";

import { KeyboardShortcutsNavBar } from "../navbar/useLogic";
import { useLogicHeader } from "./useLogic";

export interface HeaderProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  collapsed,
  toggleCollapsed,
}) => {
  const {
    items,
    dropdownVisible,
    toggleDropdown,
    handleMenuClick,
    isModalVisible,
    handleModalClose,
  } = useLogicHeader();

  return (
    <div className="h-20 px-3 bg-brown md:h-[116px] flex items-center z-30  w-full md:relative fixed justify-between">
      <div className="flex items-center justify-start gap-2 w-full">
        <div className="">
          <button
            className="rounded-full text-center size-10 pl-2"
            onClick={toggleCollapsed}
          >
            {collapsed ? <IconColese /> : <IconOpen />}
          </button>
        </div>
        <div className="w-full h-[52px]">
          <Input
            className="md:w-[73%] 2xl:w-[71%] h-full gap-x-[3px] rounded-lg pl-1 flex border-none bg-dark-slate-gray text-white focus:border-light-gray focus-within:bg-light-gray hover:bg-light-gray"
            placeholder="  Search here..."
            prefix={<IconSearch />}
          />
        </div>
      </div>
      <div className="flex gap-x-1 md:gap-x-3 items-center justify-center">
        <div className="relative">
          <Badge dot={true} className="mr-2">
            <Button type="text" icon={<IconNotications />} />
          </Badge>
        </div>
        <div className="flex items-center gap-x-1 md:gap-x-4 pr-5">
          <Avatar src="/avatauser.png" className="size-11 text-black" />
          <Dropdown
            menu={{ items, onClick: handleMenuClick }}
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

      <Modal
        title={
          <div className="text-white bg-brown text-center uppercase">
            Help Center
          </div>
        }
        className="bg-brown"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={<div className="text-white bg-brown"></div>}
      >
        <div className="text-white bg-brown h-auto">
          <KeyboardShortcutsNavBar />
        </div>
      </Modal>
    </div>
  );
};
