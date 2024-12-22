"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";



const CountChart = ({boys,girls}:{boys:number,girls: number}) => {
  const data = [
    {
      name: "Total",
      count: boys+girls,
      fill: "#E2E8F0", // Subtle white with a classic tone
    },
    {
      name: "Girls",
      count: girls,
      fill: "#FBBF24", // Warm yellow for girls
    },
    {
      name: "Boys",
      count: boys,
      fill: "#3B82F6", // Cool blue for boys
    },
  ];
  return (
    <div className="relative w-full h-[75%] bg-gradient-to-b from-amber-100 to-gray-900 rounded-2xl shadow-xl text-white">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={20}
            data={data}
          >
            <RadialBar 
              background 
              
              cornerRadius={50}
              dataKey="count" 
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="Male & Female Icon"
          width={60}
          height={60}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        </div>
     
  );
};

export default CountChart;
