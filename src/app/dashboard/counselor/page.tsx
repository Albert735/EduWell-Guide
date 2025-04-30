"use client";

import React from "react";
import AppointRequest from "./(components)/AppointRequest";
import Overview from "./(components)/Overview";
import PatientOverview from "./(components)/PatientOverview";
import ChartGrid from "./(components)/chartGrid";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

export default function CounselorDashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-4 p-4 overflow-y-auto lg:grid lg:grid-cols-4 lg:grid-rows-5 lg:h-[calc(100vh-5.5rem)]">
      {/* Overview Section */}
      <div className="col-span-2 row-span-2">
        <Overview />
      </div>

      {/* Chart + Calendar Section */}
      <div className="col-span-2 row-span-2 col-start-3 flex flex-col gap-4">
        <div className="flex flex-col xl:flex-row justify-between gap-4 h-full w-full">
          <ChartGrid />
          <Card className="p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </Card>
        </div>
      </div>

      {/* Patient Overview */}
      <div className="col-span-3 row-span-3 row-start-3">
        <PatientOverview />
      </div>

      {/* Appointment Requests */}
      <div className="col-start-4 row-span-3 row-start-3 overflow-y-auto">
        <AppointRequest />
      </div>
    </div>
  );
}
