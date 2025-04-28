import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FiFilter, FiPlus } from "react-icons/fi";
import { LuArrowUpDown } from "react-icons/lu";

interface Patient {
  id: string;
  name: string;
  status: "member" | "assurance" | "regular";
  appointmentDate: string;
  appointmentTime: string;
  type: "checkup" | "consultation" | "follow-up" | "emergency";
}

const patients: Patient[] = [
  {
    id: "PAT-001",
    name: "John Doe",
    status: "member",
    appointmentDate: "2023-05-15",
    appointmentTime: "10:00 AM",
    type: "checkup",
  },
  {
    id: "PAT-002",
    name: "Jane Smith",
    status: "assurance",
    appointmentDate: "2023-05-16",
    appointmentTime: "02:30 PM",
    type: "consultation",
  },
  {
    id: "PAT-003",
    name: "Robert Johnson",
    status: "regular",
    appointmentDate: "2023-05-17",
    appointmentTime: "09:15 AM",
    type: "follow-up",
  },
  {
    id: "PAT-004",
    name: "Emily Davis",
    status: "member",
    appointmentDate: "2023-05-18",
    appointmentTime: "11:45 AM",
    type: "emergency",
  },
  {
    id: "PAT-005",
    name: "Michael Wilson",
    status: "regular",
    appointmentDate: "2023-05-19",
    appointmentTime: "03:00 PM",
    type: "checkup",
  },
];

export default function PatientOverview() {
  return (
    <div className="flex flex-col gap-4 h-full overflow-auto p-4">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-lg">Patient Overview</h1>
        <div className="flex gap-2">
          <Button variant={"outline"} className="gap-2">
            <FiFilter size={16} />
            Filter
          </Button>
          <Button variant={"outline"} className="gap-2">
            <FiPlus size={16} />
            Add New Patient
          </Button>
        </div>
      </div>

      <Table className="">
        <TableCaption>List of recent patient appointments</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Patient ID</TableHead>
            <TableHead>
              <div className="flex items-center gap-1">
                Name
                <button className="text-muted-foreground hover:text-foreground">
                  <LuArrowUpDown size={14} />
                </button>
              </div>
            </TableHead>
            <TableHead>Appointment</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow
              key={patient.id}
              className="hover:bg-gray-50 hover:dark:bg-white/10 transition-colors duration-200"
            >
              <TableCell className="font-medium">{patient.id}</TableCell>
              <TableCell className="font-medium">{patient.name}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>
                    {new Date(patient.appointmentDate).toLocaleDateString()}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {patient.appointmentTime}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    patient.status === "member"
                      ? "blue"
                      : patient.status === "assurance"
                      ? "yellow"
                      : "secondary"
                  }
                  className="capitalize"
                >
                  {patient.status}
                </Badge>
              </TableCell>
              <TableCell className="capitalize">
                {patient.type.split("-").join(" ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
