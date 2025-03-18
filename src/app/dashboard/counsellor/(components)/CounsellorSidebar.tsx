"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { RxDashboard } from "react-icons/rx";
import { LuCalendarDays } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { GrCreditCard } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [settingsToggle, setSettingsTogle] = useState(false);

  const handleClick = () => {
    setSettingsTogle(!settingsToggle);
  };

  return (
    <div>
      <div className="flex flex-col justify-between h-full px-4 py-4 bg-white/5 border-r">
        <span className="flex flex-col gap-[2rem]">
          <span className="flex justify-between items-center">
            <span>
              <h1>Eduwell Guide</h1>
              <span className="text-[14px] text-gray-400">Expert Guidance</span>
            </span>
            <IoIosArrowForward size={20} />
          </span>

          <span className="flex flex-col gap-2">
            <span className="flex justify-start items-center gap-2 hover:bg-white/10 py-2 px-2 rounded-md transition-all ease-in-out duration-200 delay-100">
              <RxDashboard size={20} />
              <span>Dashboard</span>
            </span>

            <span className="flex justify-start items-center gap-2 hover:bg-white/10 py-2 px-2 rounded-md transition-all ease-in-out duration-200 delay-100">
              <LuCalendarDays size={20} />
              <span>Appointments</span>
            </span>
            <span className="flex justify-start items-center gap-2 hover:bg-white/10 py-2 px-2 rounded-md transition-all ease-in-out duration-200 delay-100">
              <PiUsers size={20} />
              <span>Clients</span>
            </span>

            <span className="flex justify-start items-center gap-2 hover:bg-white/10 py-2 px-2 rounded-md transition-all ease-in-out duration-200 delay-100">
              <AiOutlineMessage size={20} />
              <span>Messages</span>
            </span>
            <span className="flex justify-start items-center gap-2 hover:bg-white/10 py-2 px-2 rounded-md transition-all ease-in-out duration-200 delay-100">
              <FaRegStar size={20} />
              <span>Reviews</span>
            </span>
            <span className="flex justify-start items-center gap-2 hover:bg-white/10 py-2 px-2 rounded-md transition-all ease-in-out duration-200 delay-100">
              <GrCreditCard size={20} />
              <span>Payments</span>
            </span>
          </span>
        </span>

        <span
          onClick={handleClick}
          className="flex relative justify-between w-full"
        >
          {settingsToggle && (
            <div className="absolute bottom-10 bg-white/5 w-full">
              <span className="flex flex-col px-2 py-4 border rounded-md gap-2">
                <span className="text-[14px]">Account Settings</span>
                <span className="text-[14px]">Settings</span>
                <span className="text-[14px]">Notification</span>
              </span>
            </div>
          )}
          <span className="flex justify-start items-center gap-2">
            <IoSettingsOutline size={20} />
            <span>Settings</span>
          </span>
          <IoIosArrowUp size={20} />
        </span>
      </div>

      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="p-2">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-gray-900 text-white p-4">
            <h2 className="text-lg font-bold mb-4">EduWell Guide</h2>
            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Dashboard
              </Link>
              <Link
                href="/bookings"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                My Bookings
              </Link>
              <Link
                href="/messages"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Messages
              </Link>
              <Link
                href="/settings"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
