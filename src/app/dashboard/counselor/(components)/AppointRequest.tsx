import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

interface AppointRequestProps {
  name: string;
  date: string;
  time: string;
  status: "member" | "assurance" | "regular";
}

const appointmentData: AppointRequestProps[] = [
  {
    name: "John Doe",
    date: "2023-10-01",
    time: "10:00 AM",
    status: "member",
  },
  {
    name: "Jane Smith",
    date: "2023-10-02",
    time: "11:00 AM",
    status: "assurance",
  },
  {
    name: "Alice Johnson",
    date: "2023-10-03",
    time: "12:00 PM",
    status: "regular",
  },
  {
    name: "Bob Brown",
    date: "2023-10-04",
    time: "01:00 PM",
    status: "member",
  },
  {
    name: "Charlie Davis",
    date: "2023-10-05",
    time: "02:00 PM",
    status: "assurance",
  },
  {
    name: "Diana Evans",
    date: "2023-10-06",
    time: "03:00 PM",
    status: "regular",
  },
];

export default function AppointRequest() {
  return (
    <div className="flex flex-col gap-1 rounded-md border shadow p-2 bg-white/5 h-full overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center  ">
        <h1 className=" font-medium">Appointment Requests</h1>
        <p className="text-sm text-gray-500 underline">see all</p>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {appointmentData.map((appointment, index) => (
          <div
            key={index}
            className="flex  items-start gap-4 p-4 border rounded-md  hover:bg-white/10 transition duration-200 ease-in-out "
          >
            {/* Avatar */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-2 w-full">
              <div className="space-y-2">
                <h2 className="font-bold">{appointment.name}</h2>
                <p className="text-sm text-gray-500">
                  {appointment.date} - {appointment.time}
                </p>
                <Badge
                  variant={
                    appointment.status === "member"
                      ? "blue"
                      : appointment.status === "assurance"
                      ? "yellow"
                      : "secondary"
                  }
                >
                  {appointment.status}
                </Badge>
              </div>
              {/* button */}
              <div className="flex  gap-2 w-full">
                <button
                  // variant={"destructive"}
                  className="w-full  bg-red-100 dark:bg-red-900 dark:text-red-100 text-red-600 hover:bg-red-200 rounded-md"
                >
                  Reject
                </button>
                <button className="w-full bg-green-100 dark:bg-green-900 dark:text-green-100 text-green-600 hover:bg-green-200 rounded-md p-1">
                  Accept
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
