import React from "react";
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
  return (
    <div className="flex w-full items-start justify-center gap-y-14 flex-col h-auto p-3">
      <h4 className="text-[24px] font-semibold font-inter leading-[29px] pt-4 pl-4">
        Level
      </h4>
      <ResponsiveContainer className=" gap-y-4" width={"100%"} height={200}>
        <BarChart
          data={data}
          margin={{ top: 0, right: 10, bottom: 0, left: 35 }}
        >
          <XAxis />
          <Tooltip />
          <Legend margin={{ top: 30, right: 0, bottom: 0, left: 0 }} />
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
