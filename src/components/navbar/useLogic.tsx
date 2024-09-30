/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAuth } from "@/contexts/AuthContext";
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
} from "@/icon/DataIcon";
import { MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Kbd } from "@nextui-org/kbd";

type MenuItem = Required<MenuProps>["items"][number] & {
  key: string;
  icon: React.ReactNode;
  label: string;
};
export interface NavbarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleCollapsed: () => void;
}
export const useLogicNavbar = ({
  collapsed,
  setCollapsed,
  toggleCollapsed,
}: NavbarProps) => {
  const [current, setCurrent] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const { logout, userToken } = useAuth();

  useEffect(() => {
    const key = items.find((item) => item.key === pathname)?.key;
    if (key) setCurrent(key);
  }, [pathname]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!userToken) return;
      if (event.shiftKey) {
        switch (event.key) {
          case "Q":
            logout();
            break;
          case "A":
            router.push("/");
            break;
          case "I":
            router.push("/profile");
            break;
          case "O":
            router.push("/order");
            break;
          case "P":
            router.push("/product");
            break;
          case "ArrowRight":
            setCollapsed(true);
            break;
          case "ArrowLeft":
            setCollapsed(false);
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [logout, router, collapsed, toggleCollapsed]);

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
      key: "/auth/Login",
      icon: (
        <span onClick={() => logout()}>
          <IconLogin />
        </span>
      ),
      label: "Login",
    },
    {
      key: "/auth/Signup",
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

export const KeyboardShortcuts = () => (
  <div className="space-y-5">
    <h3 className="text-red-400">Keyboard Shortcuts</h3>
    <p>
      Press <Kbd>Shift</Kbd> + <Kbd>Q</Kbd> to logout .
    </p>
    <p>
      Press <Kbd>Shift</Kbd> + <Kbd>A</Kbd> to go to the home page.
    </p>
    <p>
      Press <Kbd>Shift</Kbd> + <Kbd>I</Kbd> to go to the profile page.
    </p>
    <p>
      Press <Kbd>Shift</Kbd> + <Kbd>O</Kbd> to go to the order page.
    </p>
    <p>
      Press <Kbd>Shift</Kbd> + <Kbd>P</Kbd> to go to the product page.
    </p>
    <p>
      Press <Kbd>Shift</Kbd> + <Kbd>ArrowRight</Kbd> to collapse the sidebar.
    </p>
    <p>
      Press <Kbd>Shift</Kbd> + <Kbd>ArrowLeft</Kbd> to expand the sidebar.
    </p>
  </div>
);
