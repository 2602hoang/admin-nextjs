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
} from "@/icon/DataIcon";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Input,
  MenuProps,
  Space,
  Modal,
} from "antd";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { KeyboardShortcuts } from "../navbar/useLogic";

interface HeaderProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  collapsed,
  toggleCollapsed,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const { logout } = useAuth();

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "help") {
      setIsModalVisible(true); // Open the modal when "Help Center" is clicked
    } else {
      router.push(key);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false); // Close the modal
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <p className="gap-2 text-light-gray  flex items-center">
          <IconViewProfile />
          <span className="text-light-gray hover:text-white">
            {" "}
            View Profile
          </span>
        </p>
      ),
      key: "/profile",
    },
    {
      label: (
        <p className="gap-2 text-light-gray  flex items-center">
          <IconSettingAccout />
          <span className="text-light-gray hover:text-white">
            {" "}
            Account Settings
          </span>
        </p>
      ),
      key: "/setting",
    },
    {
      label: (
        <p className="gap-2 text-light-gray  flex items-center">
          <IconNotication />
          <span className="text-light-gray hover:text-white">
            {" "}
            Notifications
          </span>
        </p>
      ),
      key: "/notifications",
    },
    {
      label: (
        <p className="gap-2 text-light-gray flex items-center">
          <SwitchAccout />
          <span className="text-light-gray hover:text-white">
            {" "}
            Switch Account
          </span>
        </p>
      ),
      key: "/switch-account",
    },
    {
      label: (
        <p
          className="gap-2 text-light-gray flex-row flex hover:text-white items-center cursor-pointer"
          onClick={() => setIsModalVisible(true)}
        >
          <IconHelp />{" "}
          <span className="text-light-gray hover:text-white"> Help Center</span>
        </p>
      ),
      key: "help",
    },
    {
      label: (
        <p onClick={logout} className="gap-2  flex items-center">
          <IconOut />{" "}
          <span className="text-red-500 hover:font-black">Logout</span>
        </p>
      ),
      key: "/auth/Login",
    },
  ];

  return (
    <div
      className={`h-20 px-3 bg-brown md:h-[116px] flex items-center z-50 justify-between`}
    >
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
          <KeyboardShortcuts />
        </div>
      </Modal>
    </div>
  );
};
