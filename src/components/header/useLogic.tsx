import { useAuth } from "@/contexts/AuthContext";
import {
  IconHelp,
  SwitchAccout,
  IconSettingAccout,
  IconViewProfile,
  IconNotication,
  IconOut,
} from "@/icon/DataIcon";
import { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const useLogicHeader = () => {
  const { logout } = useAuth();
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
        <p className="gap-2  flex items-center">
          <IconOut />{" "}
          <span onClick={logout} className="text-red-500 hover:font-black">
            Logout
          </span>
        </p>
      ),
      key: "/login",
    },
  ];
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "help") {
      setIsModalVisible(true);
    } else {
      router.push(key);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return {
    items,
    dropdownVisible,
    toggleDropdown,
    handleMenuClick,
    isModalVisible,
    handleModalClose,
  };
};
