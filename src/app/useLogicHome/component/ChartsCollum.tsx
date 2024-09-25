import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
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
      setChartHeight(300);
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
    <div className="p-3 h-full">
      <h4 className="font-inter text-xl font-semibold leading-[29.64px] pt-6 pl-5">
        Level
      </h4>
      <ResponsiveContainer
        className=" gap-y-4 mt-14"
        width={"100%"}
        height={chartHeight}
      >
        <BarChart
          data={data}
          margin={{ top: 10, right: 18, bottom: 0, left: 28 }}
        >
          <XAxis />
          <Tooltip />
          <Legend
            iconType="circle"
            margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
          />
          <Bar
            dataKey="Volume"
            stackId="a"
            fill="#A9DFD8"
            name="Volume"
            barSize={25}
          />
          <Bar
            dataKey="Service"
            stackId="a"
            fill="#666666"
            name="Service"
            barSize={25}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartsCollum;
