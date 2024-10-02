"use client";
import Content from "../useLogicHome/ContentHome";
import LayoutPage from "./(Dashboard)/layout";
export default function Home() {
  return (
    <LayoutPage>
      <div className="pb-[25px] ">
        <Content />
      </div>
    </LayoutPage>
  );
}
