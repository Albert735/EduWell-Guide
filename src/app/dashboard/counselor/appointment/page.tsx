import React from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, Tab } from "../(components)/Tabs";
import { RiMentalHealthLine } from "react-icons/ri";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

// Define types for the data structures
type PatientType = {
  id: number;
  category: string;
  number: number;
  plus: number;
};

type Patient = {
  id: string;
  name: string;
  subsciption: "Member" | "Regular" | "Assurance";
  dateOfRegister: string;
  phone: string;
  email: string;
  image: string;
};

type Counselor = {
  name: string;
  appointmentSchedule: string;
  image: string;
};

// Demo data
const patientType: PatientType[] = [
  { id: 0, category: "All Apply Queue", number: 1432, plus: 4 },
  { id: 1, category: "New Patient Regular", number: 432, plus: 16 },
  { id: 2, category: "New Patient Member", number: 500, plus: 2 },
  { id: 3, category: "New Patient Assurance", number: 132, plus: 5 },
];

const patients: Patient[] = [
  {
    id: "#66423",
    name: "Kathryn Murphy",
    subsciption: "Member",
    dateOfRegister: "12 Dec, 2025",
    phone: "024-467-0987",
    email: "kathrynymur234@outlook.com",
    image:
      "/assets/female-freelancer-writes-notes-notepad-notes-future-plans-checklist-organization-free-time-poses-outside-against-buildings.jpg",
  },
  {
    id: "#66424",
    name: "John Doe",
    subsciption: "Regular",
    dateOfRegister: "15 Jan, 2026",
    phone: "024-467-1234",
    email: "johndoe123@outlook.com",
    image:
      "/assets/female-freelancer-writes-notes-notepad-notes-future-plans-checklist-organization-free-time-poses-outside-against-buildings.jpg",
  },
  {
    id: "#66425",
    name: "Jane Smith",
    subsciption: "Assurance",
    dateOfRegister: "20 Feb, 2026",
    phone: "024-467-5678",
    email: "janesmith567@outlook.com",
    image:
      "/assets/female-freelancer-writes-notes-notepad-notes-future-plans-checklist-organization-free-time-poses-outside-against-buildings.jpg",
  },
  // Add more patients...
];

const counselors: Counselor[] = [
  {
    name: "Dr. Jedd Spence",
    appointmentSchedule: "2 March, 2026 - 3:00pm",
    image: "/assets/modern-man-beige-suit.jpg",
  },
  {
    name: "Dr. Emily Carter",
    appointmentSchedule: "5 March, 2026 - 10:00am",
    image: "/assets/modern-man-beige-suit.jpg",
  },
  {
    name: "Dr. Michael Brown",
    appointmentSchedule: "10 March, 2026 - 1:00pm",
    image: "/assets/modern-man-beige-suit.jpg",
  },
  // Add more counselors...
];

export default function Appointments() {
  return (
    <div className="space-y-5">
      <div className="header">Approval New Client</div>
      <div className="cards flex justify-start items-center gap-[3rem] w-full">
        {patientType.map((patient) => (
          <span key={patient.id}>
            <span className="flex flex-col border gap-4 rounded-lg w-[20rem]">
              <span className="card-category text-gray-500 px-4 py-2">
                {patient.category}
              </span>
              <span className="card-number font-medium px-4 text-[1.5rem] border-l-4 w-full border-l-blue-500">
                {patient.number} Patient
              </span>
              <span className="card-number flex gap-2 px-4 py-2">
                <Badge variant={"secondary"} className="rounded-md">
                  +{patient.plus}
                </Badge>
                in this month
              </span>
            </span>
          </span>
        ))}
      </div>
      <div className="tabs">
        <Tabs>
          <Tab id="in-queue" title="In Queue">
            <div className="cards flex flex-wrap justify-start items-center gap-[5rem] w-full">
              {patients.map((patient, index) => (
                <span
                  key={patient.id}
                  className="flex flex-col border w-[25rem] px-4 py-2 rounded-lg gap-10"
                >
                  <span className="flex justify-between items-center border-b py-2">
                    <span className="flex gap-2 items-center">
                      <span className="border rounded-full p-1">
                        <RiMentalHealthLine size={20} />
                      </span>
                      <span>{patient.id}</span>
                    </span>
                    <Badge
                      variant={
                        patient.subsciption === "Member"
                          ? "secondary"
                          : patient.subsciption === "Assurance"
                          ? "yellow"
                          : "blue"
                      }
                      className="rounded-md"
                    >
                      {patient.subsciption}
                    </Badge>
                  </span>
                  <span className="flex flex-col justify-start items-start border-b gap-4 px-2 pb-4">
                    <span className="flex justify-between items-center w-full">
                      <span className="flex items-center gap-4">
                        <div className="relative w-[3rem] h-[3rem]">
                          <Image
                            src={patient.image}
                            alt="Patient"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>
                        <span className="flex flex-col gap-1">
                          <h2 className="text-gray-400 font-sans text-[12px]">
                            Patient name
                          </h2>
                          <p className="text-[14px] font-medium">
                            {patient.name}
                          </p>
                        </span>
                      </span>
                      <span className="flex flex-col gap-1">
                        <h2 className="text-gray-400 font-sans text-[12px]">
                          Date of register
                        </h2>
                        <p className="text-[14px] font-medium">
                          {patient.dateOfRegister}
                        </p>
                      </span>
                    </span>
                    <span className="flex justify-between items-center w-full">
                      <span className="flex flex-col gap-1">
                        <h2 className="text-gray-400 font-sans text-[12px]">
                          Phone
                        </h2>
                        <p className="text-[14px] font-medium">
                          {patient.phone}
                        </p>
                      </span>
                      <span className="flex flex-col gap-1">
                        <h2 className="text-gray-400 font-sans text-[12px]">
                          Email
                        </h2>
                        <p className="text-[14px] font-medium">
                          {patient.email}
                        </p>
                      </span>
                    </span>
                  </span>
                  <span className="flex justify-between items-center w-full border-b pb-2">
                    <span className="flex items-center gap-4">
                      <div className="relative w-[3rem] h-[3rem]">
                        <Image
                          src={counselors[index].image}
                          alt="Counselor"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        />
                      </div>
                      <span className="flex flex-col gap-1">
                        <h2 className="text-gray-400 font-sans text-[12px]">
                          Counselor name
                        </h2>
                        <p className="text-[14px] font-medium">
                          {counselors[index].name}
                        </p>
                      </span>
                    </span>
                    <span className="flex flex-col gap-1">
                      <h2 className="text-gray-400 font-sans text-[12px]">
                        Appointment Schedule
                      </h2>
                      <p className="text-[14px] font-medium">
                        {counselors[index].appointmentSchedule}
                      </p>
                    </span>
                  </span>
                  <span className="flex justify-between items-center py-2 w-full">
                    <Button variant={"outline"} className="w-[10rem]">
                      <RxCross2 />
                      Decline
                    </Button>
                    <Button variant={"default"} className="w-[10rem]">
                      <FaCheck />
                      Accept
                    </Button>
                  </span>
                </span>
              ))}
            </div>
          </Tab>
          <Tab id="accepted" title="Accepted">
            <p className="text-gray-700">
              We are showing customer payment history here.
            </p>
          </Tab>
          <Tab id="declined" title="Declined">
            <p className="text-gray-700">
              We are showing customer payment methods here.
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
