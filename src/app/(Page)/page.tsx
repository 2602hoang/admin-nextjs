"use client";
import Content from "../useLogicHome/ContentHome";
import LayoutPage from "./(dashboard)/layout";

export default function Home() {
  return (
    <LayoutPage>
      <div className="pb-[25px] ">
        <Content />
      </div>
    </LayoutPage>
  );
}
