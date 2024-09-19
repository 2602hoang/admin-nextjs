import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  // CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const ChartsCollum = () => {
  const data = [
    { name: "Level 1", Volume: 79, Service: 78 },
    { name: "Level 2", Volume: 80, Service: 77 },
    { name: "Level 3", Volume: 65, Service: 92 },
    { name: "Level 4", Volume: 43, Service: 114 },
    { name: "Level 5", Volume: 82, Service: 75 },
    { name: "Level 6", Volume: 105, Service: 52 },
  ];
  const [chartHeight, setChartHeight] = useState(250);

  const updateChartHeight = () => {
    const windowHeight = window.innerWidth;
    if (windowHeight >= 1536) {
      setChartHeight(200);
      return;
    } else if (windowHeight >= 480) {
      setChartHeight(250);
      return;
    } else {
      setChartHeight(270);
      return;
    }
  };

  useEffect(() => {
    updateChartHeight();
    window.addEventListener("resize", updateChartHeight);
    return () => window.removeEventListener("resize", updateChartHeight);
  }, []);

  return (
    <div className="flex w-full items-start justify-center gap-y-14 flex-col h-auto p-3">
      <h4 className="text-[24px] font-semibold font-inter leading-[29px] pt-6 pl-5">
        Level
      </h4>
      <ResponsiveContainer
        className=" gap-y-4"
        width={"100%"}
        height={chartHeight}
      >
        <BarChart
          data={data}
          margin={{ top: 0, right: 10, bottom: 0, left: 35 }}
        >
          <XAxis />
          <Tooltip />
          <Legend margin={{ top: 10, right: 0, bottom: 0, left: 0 }} />
          <Bar
            dataKey="Volume"
            stackId="a"
            fill="#A9DFD8"
            name="Volume"
            barSize={20}
          />
          <Bar
            dataKey="Service"
            stackId="a"
            fill="#666666"
            name="Service"
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartsCollum;
