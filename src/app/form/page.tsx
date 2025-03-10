"use client";

import Link from "next/link";
import ToggleTheme from "@/components/Toggle-theme";
import { Button } from "@/components/ui/button";

export default function JoinPage() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto items-center justify-start h-screen">
      <div className="flex justify-between items-start w-full  p-4">
        <Link href="/">
          <h1 className="text-2xl">EduWell Guide</h1>
        </Link>
        <ToggleTheme />
      </div>

      <div className="relative flex flex-col items-center justify-center  w-full h-full gap-5">
        <div className="flex flex-col items-center justify-center space-y-4 py-[1rem]">
          <h1 className="text-2xl font-bold">Choose Account Type</h1>
          <p className="text-center w-[15rem] text-gray-400">
            Choose the type of account you want to create
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link href="/form/registerStudent">
            <Button variant={"outline"} className="w-[20rem]">
              Student
            </Button>
          </Link>
          <Link href="/form/registerCounsellor">
            <Button variant={"default"} className="w-[20rem]">
              Counsellor
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
