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
import { useCallback, useEffect, useMemo, useState } from "react";
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
export const useLogicNavbar = ({ setCollapsed }: NavbarProps) => {
  const [current, setCurrent] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const { logout, userToken } = useAuth();

  useEffect(() => {
    const key = items.find((item) => item.key === pathname)?.key;
    if (key) setCurrent(key);
  }, [pathname]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (!userToken) return;

      const keyActions: { [key: string]: () => void } = {
        Q: () => logout(),
        A: () => router.push("/"),
        I: () => router.push("/profile"),
        O: () => router.push("/order"),
        P: () => router.push("/product"),
        ArrowRight: () => setCollapsed(true),
        ArrowLeft: () => setCollapsed(false),
      };

      if (event.shiftKey && keyActions[event.key]) {
        keyActions[event.key]();
      }
    },
    [logout, router, setCollapsed, userToken]
  );

  useEffect(() => {
    if (!userToken) return;

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, userToken]);

  const handleMenuClick = (key: string) => {
    setCurrent(key);
    router.push(key);
  };

  const items: MenuItem[] = useMemo(
    () => [
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
          <span onClick={() => logout()}>
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
    ],
    []
  );

  return { items, current, setCurrent, handleMenuClick };
};

export const KeyboardShortcutsNavBar = () => (
  <div className="space-y-5">
    <h3 className="text-red-400">Keyboard Shortcuts Sidebar</h3>
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
