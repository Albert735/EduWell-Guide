import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// import { Button } from "@/components/ui/button";

const demoClients = [
  {
    id: 0,
    email: "albertqauye735@gmail.com",
    Visits: 5,
    phone: "024-675-8089",
    progress: 24,
    status: "Completed",
  },
  {
    id: 1,
    email: "0ghermano675@gmail.com",
    Visits: 8,
    phone: "055-125-8689",
    progress: 56,
    status: "in progress",
  },
  {
    id: 2,
    email: "geraldfreck98@gmail.com",
    Visits: 7,
    phone: "055-125-8689",
    progress: 78,
    status: "in progress",
  },
  {
    id: 3,
    email: "helenyute@yahoo.com",
    Visits: 2,
    phone: "054-105-8600",
    progress: 38,
    status: "Completed",
  },
  {
    id: 4,
    email: "frankskipps0@outlook.com",
    Visits: 7,
    phone: "024-625-8669",
    progress: 87,
    status: "Completed",
  },
  {
    id: 5,
    email: "jeffthelper@outlook.com",
    Visits: 3,
    phone: "054-105-8600",
    progress: 12,
    status: "in progress",
  },
  {
    id: 6,
    email: "jessicajacklin@outlook.com",
    Visits: 1,
    phone: "054-185-8690",
    progress: 100,
    status: "Completed",
  },
];

export default function Clients() {
  return (
    <div>
      <span className="px-2">
        <h1>Clients</h1>
      </span>

      <Table>
        <TableCaption>A list of your recent clients.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[17rem]">Email</TableHead>
            <TableHead>Visits</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demoClients.map((clients) => (
            <TableRow key={clients.id}>
              <TableCell className="font-medium">{clients.email}</TableCell>
              <TableCell>{clients.Visits}</TableCell>
              <TableCell>{clients.phone}</TableCell>
              <TableCell className="flex justify-center items-center gap-4">
                <Progress value={clients.progress} />
                {clients.progress}%
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={
                    clients.status === "Completed" ? "secondary" : "outline"
                  }
                >
                  {clients.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
