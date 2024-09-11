"use client";
import LayoutPage from "@/components/layout/LayoutPage";
import Dashbord from "./home/dashbord/Dashbord";
import { useState } from "react";
import Leaderboard from "./home/leaderborard/Leaderboard";

export default function Home() {
  const [selectedKey, setSelectedKey] = useState<string>("1");

  const handleMenuClick = (key: string) => {
    setSelectedKey(key);
  };

  console.log(selectedKey);

  // Define the component to render based on selectedKey
  let content;
  switch (selectedKey) {
    case "1":
      content = <Dashbord />;
      break;
    case "2":
      content = <Leaderboard />;
      break;
    case "3":
      content = <h1>Page 3</h1>;
      break;
    case "4":
      content = <h1>Page 4</h1>;
      break;
    case "5":
      content = <h1>Page 5</h1>;
      break;
    case "6":
      content = <h1>Page 6</h1>;
      break;
    case "7":
      content = <h1>Page 7</h1>;
      break;
    case "8":
      content = <h1>Page 8</h1>;
      break;
    case "9":
      content = <h1>Page 9</h1>;
      break;
    case "10":
      content = <h1>Page 10</h1>;
      break;
    case "11":
      content = <h1>Page 11</h1>;
      break;
    case "12":
      content = <h1>Page 12</h1>;
      break;
    default:
      content = <Dashbord />;
  }

  return (
    <LayoutPage handleMenuClick={handleMenuClick} selectedKey={selectedKey}>
      <div className="w-full sticky h-screen  overflow-y-auto px-4 text-white pt-2">
        {content}
      </div>
    </LayoutPage>
  );
}
