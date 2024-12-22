"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "Mon",
//     present: 60,
//     absent: 40,
//   },
//   {
//     name: "Tue",
//     present: 70,
//     absent: 60,
//   },
//   {
//     name: "Wed",
//     present: 90,
//     absent: 75,
//   },
//   {
//     name: "Thu",
//     present: 90,
//     absent: 75,
//   },
//   {
//     name: "Fri",
//     present: 65,
//     absent: 55,
//   },
// ];

const AttendanceChart = ({
  data,
}:{
  data: { name: string; present:number; absent:number}[];
}) => {
  return (
    
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={25}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="rgba(0, 0, 0, 0.1)"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderColor: "transparent",
            }}
            labelStyle={{ color: "#64748b", fontWeight: "bold" }}
            itemStyle={{ color: "#475569" }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{
              paddingBottom: "20px",
              color: "#475569",
              fontSize: "14px",
              fontWeight: "500",
            }}
          />
          <Bar
            dataKey="present"
            fill="url(#presentGradient)"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="url(#absentGradient)"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <defs>
            <linearGradient id="presentGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.6} />
            </linearGradient>
            <linearGradient id="absentGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.6} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    
  );
};

export default AttendanceChart;
