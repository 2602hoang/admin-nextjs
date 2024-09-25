import React from "react";

interface ChartsData {
  title: string;
  charts: React.ReactNode;
}
const Charts: React.FC<ChartsData> = ({ title, charts }) => {
  return (
    <div className="p-3 h-full">
      <h4 className="text-[24px] font-semibold leading-[29.64px] pt-6 pl-5">
        {title}
      </h4>
      {charts}
    </div>
  );
};

export default Charts;
