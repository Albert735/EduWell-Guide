import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AppointRequestProps {
  name: string;
  date: string;
  time: string;
  status: string;
}

const appointmentData: AppointRequestProps[] = [
  {
    name: "John Doe",
    date: "2023-10-01",
    time: "10:00 AM",
    status: "Pending",
  },
  {
    name: "Jane Smith",
    date: "2023-10-02",
    time: "11:00 AM",
    status: "Confirmed",
  },
  {
    name: "Alice Johnson",
    date: "2023-10-03",
    time: "12:00 PM",
    status: "Cancelled",
  },
  {
    name: "Bob Brown",
    date: "2023-10-04",
    time: "01:00 PM",
    status: "Pending",
  },
  {
    name: "Charlie Davis",
    date: "2023-10-05",
    time: "02:00 PM",
    status: "Confirmed",
  },
  {
    name: "Diana Evans",
    date: "2023-10-06",
    time: "03:00 PM",
    status: "Cancelled",
  },
];

export default function AppointRequest() {
  return (
    <div className="flex flex-col gap-1 rounded-md shadow-sm ">
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
                <Badge>{appointment.status}</Badge>
              </div>
              {/* button */}
              <div className="flex  gap-2 w-full">
                <Button
                  variant={"secondary"}
                  className="bg-red-100 text-red-700 hover:bg-red-300 w-full"
                >
                  Reject
                </Button>
                <Button
                  variant="secondary"
                  className=" bg-green-100 text-green-700 hover:bg-green-300 w-full"
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
