/* eslint-disable react-hooks/exhaustive-deps */
import { DataIcon } from "@/assets/DataIcon";
import { MenuProps } from "antd";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number] & {
  key: string;
  label: JSX.Element;
};
export const useLogicNavbar = () => {
  const [current, setCurrent] = useState<string>("");
  // const router = useRouter();
  const {
    IconHome,
    IconLeaderboard,
    IconLogin,
    IconSign,
    IconProfile,
    IconOrder,
    IconProduct,
    IconSalereport,
    IconMessage,
    IconSetting,
    IconFavourite,
    IconHistory,
  } = DataIcon();
  useEffect(() => {
    const { pathname } = window.location;
    const key = items.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item) => (item.label as any).props.href === pathname
    )?.key;
    if (key) setCurrent(key);
  }, []);

  const items: MenuItem[] = [
    {
      key: "1",
      icon: (
        <span>
          <IconHome />
        </span>
      ),
      label: <Link href="/">Dashboard</Link>,
    },
    {
      key: "2",
      icon: (
        <span>
          <IconProfile />
        </span>
      ),
      label: <Link href="/Profile">Profile</Link>,
    },
    {
      key: "3",
      icon: (
        <span>
          {" "}
          <IconLeaderboard />
        </span>
      ),
      label: <Link href="/Leaderboard">Leaderboard</Link>,
    },
    {
      key: "4",
      icon: (
        <span>
          <IconOrder />
        </span>
      ),
      label: <Link href="/Order">Order</Link>,
    },
    {
      key: "5",
      icon: (
        <span>
          {" "}
          <IconProduct />
        </span>
      ),
      label: <Link href="/Product">Product</Link>,
    },
    {
      key: "6",
      icon: (
        <span>
          <IconSalereport />
        </span>
      ),
      label: <Link href="/Salereport">Salereport</Link>,
    },
    {
      key: "7",
      icon: (
        <span>
          <IconMessage />
        </span>
      ),
      label: <Link href="/Message">Message</Link>,
    },
    {
      key: "8",
      icon: (
        <span>
          <IconSetting />
        </span>
      ),
      label: <Link href="/Setting">Setting</Link>,
    },
    {
      key: "9",
      icon: (
        <span>
          <IconFavourite />
        </span>
      ),
      label: <Link href="/Favourite">Favourite</Link>,
    },
    {
      key: "10",
      icon: (
        <span>
          {" "}
          <IconHistory />
        </span>
      ),
      label: <Link href="/History">History</Link>,
    },
    {
      key: "11",
      icon: (
        <span>
          <IconLogin />
        </span>
      ),
      label: <Link href="/Auth/Login">Login</Link>,
    },
    {
      key: "12",
      icon: (
        <span>
          {" "}
          <IconSign />
        </span>
      ),
      label: <Link href="/Auth/Signup">Signup</Link>,
    },
  ];

  return { items, current, setCurrent };
};
