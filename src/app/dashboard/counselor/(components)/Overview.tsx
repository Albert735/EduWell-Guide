import React from "react";
import {
  LuCalendarCheck,
  LuCalendarMinus2,
  LuCalendarClock,
} from "react-icons/lu";
import { BsEyeFill } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";

interface OverviewProps {
  id: number;
  title: string;
  number: number;
  percentage?: number;
  icon?: React.ReactNode;
  color?: string;
  time: string;
}

const overviewData: OverviewProps[] = [
  {
    id: 0,
    title: "Total Counseling ",
    number: 20,
    percentage: +10,
    icon: (
      <span>
        <IoPeopleOutline size={26} />
      </span>
    ),
    time: "Last 30 days",
  },
  {
    id: 1,
    title: "New Appointments",
    number: 100,
    percentage: +0.5,
    icon: (
      <span>
        <IoPersonAddOutline size={26} />
      </span>
    ),
    time: "Last 30 days",
  },
  {
    id: 2,
    title: "Total Visitors",
    number: 50,
    percentage: 15,
    icon: (
      <span>
        <BsEyeFill size={26} />
      </span>
    ),
    time: "Last 30 days",
  },
  {
    id: 3,
    title: "Overall Bookings",
    number: 30,
    percentage: -5,
    icon: (
      <span>
        <LuCalendarCheck size={26} />
      </span>
    ),
    time: "Last 30 days",
  },
  {
    id: 4,
    title: "Cancelled Appointments",
    number: 15,
    percentage: 20,
    icon: (
      <span>
        <LuCalendarMinus2 size={26} />
      </span>
    ),
    time: "Last 30 days",
  },
  {
    id: 5,
    title: "Appointments Today",
    number: 8,
    percentage: 12,
    icon: (
      <span>
        <LuCalendarClock size={26} />
      </span>
    ),
    time: "Last 30 days",
  },
];

export default function Overview() {
  return (
    <div className="flex flex-row flex-wrap justify-between w-full gap-4 p-2 rounded-lg   h-full  overflow-y-auto border shadow">
      {overviewData.map((index) => (
        <div
          key={index.id}
          className="flex justify-between w-[340px] items-start p-4 rounded-lg  border gap-1 hover:bg-white/10 cursor-pointer transition-all duration-200 ease-in-out"
        >
          <div className="mt-1.5">{index.icon}</div>

          <div className="flex flex-col justify-between w-full">
            <div className="p-1">
              <h2 className="text-sm font-medium">{index.title}</h2>
            </div>
            <div className="flex justify-between  items-center p-1">
              <span className="text-md font-bold">{index.number}k</span>
              <div className="flex text-[12px] text-gray-500 gap-2">
                <span>{index.time}</span>
                <span>{index.percentage}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
