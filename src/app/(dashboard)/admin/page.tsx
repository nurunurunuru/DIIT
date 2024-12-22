import React, { Suspense } from "react";
import prisma from "@/lib/prisma";
import EventCalendarContainer from "@/components/EventCalanderContainer";
import Announcements from "@/components/Announcements";
import FinanceChart from "@/components/FinanceChart";
import AttendanceChartContainer from "@/components/AttandenceChartContainer";
import CountChartContainer from "@/components/CountChartContainer";
import UserCard from "@/components/UserCard";

const Adminpage = async ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  // Fetch student data
  const students = await prisma.student.findMany({
    select: { id: true, name: true, email: true },
  });

  return (
    <div className="p-4 w-full flex flex-col lg:flex-row gap-8">
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-8">
        {/* UserCard Section */}
        <div className="flex gap-4 justify-between">
          <UserCard type="admin" />
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </div>

        {/* Middle Charts */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>

        {/* Bottom Chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>

        {/* Student ID List */}
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Student List</h1>
          <div className="mt-4 flex flex-col gap-2">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex justify-between items-center p-2 border rounded-md"
              >
                <span>{student.name}</span>
                <span className="text-sm text-gray-500">{student.email}</span>
                <span className="text-sm font-mono">{student.id}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams} />
        <Announcements />
      </div>
    </div>
  );
};

export default Adminpage;
