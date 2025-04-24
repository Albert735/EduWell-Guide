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
    <div className="flex flex-col p-4 gap-4">
      {/* Filter Input */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Filter clients..."
          className="w-full h-11 px-4 border rounded-md bg-transparent outline-none text-sm sm:text-base"
        />
      </div>

      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[800px] w-full rounded-lg overflow-hidden">
          <TableCaption>A list of your recent clients.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[240px] text-left py-3">
                Email
              </TableHead>
              <TableHead className="text-left py-3">Visits</TableHead>
              <TableHead className="text-left py-3">Phone</TableHead>
              <TableHead className="text-center py-3">Progress</TableHead>
              <TableHead className="text-center py-3">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {demoClients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium text-sm sm:text-base">
                  {client.email}
                </TableCell>
                <TableCell className="text-sm sm:text-base">
                  {client.visits}
                </TableCell>
                <TableCell className="text-sm sm:text-base">
                  {client.phone}
                </TableCell>
                <TableCell className="text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <Progress value={client.progress} />
                    <span className="whitespace-nowrap">
                      {client.progress}%
                    </span>
                  </div>
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
    </div>
  );
}
