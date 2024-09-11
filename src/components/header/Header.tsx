import {
  BellOutlined,
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
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
  const items: MenuProps["items"] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5Z"
            fill="#d9e3f0"
          ></path>
        </svg>
      ),
      label: <a href="#">View Profile</a>,
      key: "0",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4.09 8.08ZM4 15Zm4.09 4.91Zm0-15.82Zm7.83 0Zm3.99 3.99ZM22 8.3c0 .42-.33.75-.75.75H20v1.837a.432.432 0 0 1-.65.373c-.43-.25-.93-.33-1.41-.2-.308.074-.68-.125-.68-.442V9.74c0-1.65-1.35-3-3-3H9.74c-1.65 0-3 1.35-3 3v4.52c0 1.65 1.35 3 3 3h.45a.21.21 0 0 1 .21.21c0 .963.698 1.774 1.617 1.96.173.035.29.242.233.408a.235.235 0 0 1-.22.162H9.06v1.25a.749.749 0 1 1-1.5 0v-1.47a5.004 5.004 0 0 1-3.33-3.33H2.75a.749.749 0 1 1 0-1.5H4v-2.2H2.75a.749.749 0 1 1 0-1.5H4v-2.2H2.75a.749.749 0 1 1 0-1.5h1.48a5.004 5.004 0 0 1 3.33-3.33V2.75a.749.749 0 1 1 1.5 0V4h2.19V2.75c0-.41.34-.75.75-.75s.75.34.75.75V4h2.2V2.75c0-.41.34-.75.75-.75s.75.34.75.75v1.48c1.59.48 2.84 1.73 3.32 3.32h1.48c.42 0 .75.34.75.75Z"
            fill="#d9e3f0"
          ></path>
          <path
            d="M20.99 15.531c-.68 0-1.07-.34-1.07-.84 0-.2.06-.43.2-.67a1 1 0 0 0-.37-1.37l-.91-.53a.885.885 0 0 0-1.21.32l-.06.1c-.48.83-1.26.83-1.74 0l-.06-.1a.873.873 0 0 0-1.2-.32l-.92.53c-.32.18-.51.52-.51.87 0 .17.05.34.14.5.14.24.21.47.21.67 0 .5-.4.84-1.08.84-.55 0-1.01.45-1.01 1v.94c0 .55.46 1 1.01 1 .68 0 1.08.34 1.08.84 0 .2-.07.43-.21.67a1 1 0 0 0 .37 1.37l.92.53c.41.25.96.1 1.2-.32l.06-.1c.48-.83 1.26-.83 1.74 0l.06.1c.25.42.79.57 1.21.32l.91-.53c.32-.18.51-.52.51-.87 0-.17-.05-.34-.14-.5-.14-.24-.2-.47-.2-.67 0-.5.39-.84 1.07-.84.56 0 1.01-.45 1.01-1v-.94c0-.55-.45-1-1.01-1Zm-4.29 3.19a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Z"
            fill="#d9e3f0"
          ></path>
          <path
            d="M16.25 10.02v.572c0 .335-.445.546-.77.468-.5-.13-1-.06-1.41.19l-.91.53a1.993 1.993 0 0 0-1.012 1.92c.032.386-.238.855-.589 1.02a2.023 2.023 0 0 0-1.042 1.142c-.078.216-.267.388-.497.388-1.26 0-2.27-1.01-2.27-2.27v-3.96c0-1.26 1.01-2.27 2.27-2.27h3.96c1.26 0 2.27 1.01 2.27 2.27Z"
            fill="#d9e3f0"
          ></path>
        </svg>
      ),
      label: <a href="#">Account Settings</a>,
      key: "1",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="m19.34 14.49-1-1.66c-.21-.37-.4-1.07-.4-1.48V8.82a5.91 5.91 0 0 0-3.37-5.33A2.926 2.926 0 0 0 11.99 2c-1.09 0-2.07.59-2.59 1.52-1.95.97-3.3 2.98-3.3 5.3v2.53c0 .41-.19 1.11-.4 1.47l-1.01 1.67c-.4.67-.49 1.41-.24 2.09.24.67.81 1.19 1.55 1.44 1.94.66 3.98.98 6.02.98 2.04 0 4.08-.32 6.02-.97.7-.23 1.24-.76 1.5-1.45s.19-1.45-.2-2.09ZM14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z"
            fill="#d9e3f0"
          ></path>
        </svg>
      ),
      label: <a href="#">Notifications</a>,
      key: "2",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill="#d9e3f0"
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.5 12.05c-.04.09-.09.17-.16.24l-2.95 2.95c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.67-1.67H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.1 0 .19.02.29.06.18.08.33.22.41.41.07.18.07.38-.01.57zM17 10.99H7c-.1 0-.19-.02-.29-.06a.782.782 0 01-.41-.41.707.707 0 010-.57c.05-.09.1-.17.17-.24l2.95-2.95c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.81 9.49H17c.41 0 .75.34.75.75s-.34.75-.75.75z"
          ></path>
        </svg>
      ),
      label: <a href="#">Switch Account</a>,
      key: "3",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#d9e3f0"
          className="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      label: <a href="#">Help Center</a>,
      key: "4",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            stroke="#ff0000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1.5"
            d="M17.44 14.62L20 12.06 17.44 9.5M9.76 12.06h10.17M11.76 20c-4.42 0-8-3-8-8s3.58-8 8-8"
          ></path>
        </svg>
      ),
      label: (
        <a href="#" className="text-red-500">
          Logout
        </a>
      ),
      key: "5",
    },
  ];

  return (
    <div
      className={` h-16 px-1 md:px-6 flex items-center
         bg-menu justify-between  transition-all duration-300`}
    >
      <div className="flex items-center gap-1 md:gap-5 w-full">
        <Button type="primary" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
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
