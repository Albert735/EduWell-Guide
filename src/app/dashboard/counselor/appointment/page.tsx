import React from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, Tab } from "../(components)/Tabs";

const patientType = [
  { id: 0, category: "All Apply Queue", number: 1432, plus: 4 },
  { id: 1, category: "New Patient Regular", number: 432, plus: 16 },
  { id: 2, category: "New Patient Member", number: 500, plus: 2 },
  { id: 3, category: "New Patient Assurance", number: 132, plus: 5 },
];

export default function Appointments() {
  return (
    <div className="space-y-5">
      <div className="header"> Approval New Client</div>
      <div className="cards flex justify-start items-center gap-[3rem] w-full">
        {patientType.map((patient) => (
          <span key={patient.id}>
            <span className="flex flex-col border gap-4  rounded-lg w-[20rem]">
              <span className="card-category text-gray-500 px-4 py-2">
                {patient.category}
              </span>
              <span className="card-number font-medium px-4  text-[1.5rem] border-l-4 w-full border-l-blue-500">
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
          <Tab id="info" title="Customer Info">
            <p className="text-gray-700">We are showing customer info here.</p>
          </Tab>
          <Tab id="payment-history" title="Payment History">
            <p className="text-gray-700">
              We are showing customer payment history here.
            </p>
          </Tab>
          <Tab id="payment-methods" title="Payment Methods">
            <p className="text-gray-700">
              We are showing customer payment methods here.
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
