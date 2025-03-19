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

const demoClients = [
  {
    id: 0,
    email: "albertqauye735@gmail.com",
    visits: 5,
    phone: "024-675-8089",
    progress: 24,
    status: "Completed",
  },
  {
    id: 1,
    email: "0ghermano675@gmail.com",
    visits: 8,
    phone: "055-125-8689",
    progress: 56,
    status: "in progress",
  },
  {
    id: 2,
    email: "geraldfreck98@gmail.com",
    visits: 7,
    phone: "055-125-8689",
    progress: 78,
    status: "in progress",
  },
  {
    id: 3,
    email: "helenyute@yahoo.com",
    visits: 2,
    phone: "054-105-8600",
    progress: 38,
    status: "Completed",
  },
  {
    id: 4,
    email: "frankskipps0@outlook.com",
    visits: 7,
    phone: "024-625-8669",
    progress: 87,
    status: "Completed",
  },
  {
    id: 5,
    email: "jeffthelper@outlook.com",
    visits: 3,
    phone: "054-105-8600",
    progress: 12,
    status: "in progress",
  },
  {
    id: 6,
    email: "jessicajacklin@outlook.com",
    visits: 1,
    phone: "054-185-8690",
    progress: 100,
    status: "Completed",
  },
  {
    id: 7,
    email: "michaelprosper@gmail.com",
    visits: 4,
    phone: "020-123-4567",
    progress: 50,
    status: "in progress",
  },
  {
    id: 8,
    email: "nanaama.koranteng@ymail.com",
    visits: 6,
    phone: "055-987-6543",
    progress: 92,
    status: "Completed",
  },
  {
    id: 9,
    email: "samuelkofi22@gmail.com",
    visits: 9,
    phone: "024-999-1122",
    progress: 60,
    status: "in progress",
  },
  {
    id: 10,
    email: "emmanuel123@outlook.com",
    visits: 5,
    phone: "050-876-5432",
    progress: 74,
    status: "Completed",
  },
  {
    id: 11,
    email: "akosua.mensah@hotmail.com",
    visits: 8,
    phone: "020-222-3344",
    progress: 30,
    status: "in progress",
  },
];

export default function Clients() {
  return (
    <div className="p-4">
      <span className="px-2">
        <h1 className="text-lg font-semibold">Clients</h1>
      </span>

      <Table className="w-full   rounded-lg overflow-hidden">
        <TableCaption>A list of your recent clients.</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-[17rem] py-3 text-left">Email</TableHead>
            <TableHead className="py-3 text-left">Visits</TableHead>
            <TableHead className="py-3 text-left">Phone</TableHead>
            <TableHead className="py-3 text-center">Progress</TableHead>
            <TableHead className="py-3 text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demoClients.map((client) => (
            <TableRow key={client.id} className="">
              <TableCell className="font-medium">{client.email}</TableCell>
              <TableCell>{client.visits}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell className="flex items-center space-x-2">
                <Progress value={client.progress} />
                <span>{client.progress}%</span>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={
                    client.status === "Completed" ? "secondary" : "outline"
                  }
                >
                  {client.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
