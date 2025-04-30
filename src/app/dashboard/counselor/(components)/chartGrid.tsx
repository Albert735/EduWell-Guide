"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  //   CartesianGrid,
  LabelList,
  XAxis,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Example: Monthly academic counseling sessions
const chartData = [
  { month: "January", sessions: 42 },
  { month: "February", sessions: 65 },
  { month: "March", sessions: 51 },
  { month: "April", sessions: 30 },
  { month: "May", sessions: 58 },
  { month: "June", sessions: 61 },
];

export default function ChartGrid() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Academic Sessions</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="w-full">
          <BarChart
            width={400}
            height={150}
            data={chartData}
            margin={{ top: 20 }}
          >
            {/* <CartesianGrid vertical={false} /> */}
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(v) => v.slice(0, 3)}
            />
            <Tooltip />
            <Bar
              dataKey="sessions"
              fill="#10b981" // Tailwind emerald-500 for academic
              radius={[8, 8, 0, 0]}
              barSize={35}
            >
              <LabelList
                dataKey="sessions"
                position="top"
                offset={10}
                className="fill-foreground text-xs bg-red-600"
              />
            </Bar>
          </BarChart>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-1 text-sm">
        <span className="flex items-center gap-2 font-medium">
          Trending up by 12% <TrendingUp className="h-4 w-4" />
        </span>
        <span className="text-muted-foreground">
          Academic counseling growth in the last 6 months
        </span>
      </CardFooter>
    </Card>
  );
}
