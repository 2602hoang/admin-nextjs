/* eslint-disable react-hooks/exhaustive-deps */

import {
  IconFavourite,
  IconHistory,
  IconHome,
  IconLeaderboard,
  IconLogin,
  IconMessage,
  IconOrder,
  IconProduct,
  IconProfile,
  IconSalereport,
  IconSetting,
  IconSign,
} from "@/assets/DataIcon";
import { MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number] & {
  key: string;
  icon: React.ReactNode;
  label: string;
};
export const useLogicNavbar = () => {
  const [current, setCurrent] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const key = items.find((item) => item.key === pathname)?.key;
    if (key) setCurrent(key);
  }, [pathname]);

  const handleMenuClick = (key: string) => {
    setCurrent(key);
    router.push(key);
  };
  const items: MenuItem[] = [
    {
      key: "/",
      icon: (
        <span>
          <IconHome />
        </span>
      ),
      label: "Dashboard",
    },
    {
      key: "/profile",
      icon: (
        <span>
          <IconProfile />
        </span>
      ),
      label: "Profile",
    },
    {
      key: "/leaderboard",
      icon: (
        <span>
          <IconLeaderboard />
        </span>
      ),
      label: "Leaderboard",
    },
    {
      key: "/order",
      icon: (
        <span>
          <IconOrder />
        </span>
      ),
      label: "Order",
    },
    {
      key: "/product",
      icon: (
        <span>
          <IconProduct />
        </span>
      ),
      label: "Product",
    },
    {
      key: "/salereport",
      icon: (
        <span>
          <IconSalereport />
        </span>
      ),
      label: "Salereport",
    },
    {
      key: "/message",
      icon: (
        <span>
          <IconMessage />
        </span>
      ),
      label: "Message",
    },
    {
      key: "/setting",
      icon: (
        <span>
          <IconSetting />
        </span>
      ),
      label: "Setting",
    },
    {
      key: "/favourite",
      icon: (
        <span>
          <IconFavourite />
        </span>
      ),
      label: "Favourite",
    },
    {
      key: "/history",
      icon: (
        <span>
          <IconHistory />
        </span>
      ),
      label: "History",
    },
    {
      key: "/login",
      icon: (
        <span>
          <IconLogin />
        </span>
      ),
      label: "Login",
    },
    {
      key: "/signup",
      icon: (
        <span>
          <IconSign />
        </span>
      ),
      label: "Signup",
    },
  ];

  return { items, current, setCurrent, handleMenuClick };
};
