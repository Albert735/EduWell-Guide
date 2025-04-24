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
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [settingsToggle, setSettingsTogle] = useState(false);
  const pathname = usePathname();

  if (!pathname) return null; // Early return to prevent issues with undefined pathname.
  console.log(pathname);

  const handleClick = () => {
    setSettingsTogle(!settingsToggle);
  };

  return (
    <div className="">
      <div className="hidden lg:flex flex-col justify-between h-full px-4 py-4 bg-white/5 border-r ">
        <span className="flex flex-col gap-[2rem]">
          <span className="flex justify-between items-center">
            <span>
              <h1>Eduwell Guide</h1>
              <span className="text-[14px] -400">Expert Guidance</span>
            </span>
            <IoIosArrowForward size={20} />
          </span>

          <span className="flex flex-col gap-2">
            <Link href="/dashboard/counselor">
              <span
                className={`flex justify-start items-center gap-2 hover:dark:bg-white/15 hover:bg-black/5  py-2 px-2 rounded-md transition-all  duration-300 cursor-pointer ${
                  pathname === "/dashboard/counselor"
                    ? "dark:bg-white/10 bg-black/10"
                    : ""
                }`}
              >
                <RxDashboard size={20} />
                <span>Dashboard</span>
              </span>
            </Link>

            <Link href="/dashboard/counselor/appointment">
              <span
                className={`flex justify-start items-center gap-2 hover:dark:bg-white/15 hover:bg-black/5  py-2 px-2 rounded-md transition-all  duration-300 cursor-pointer ${
                  pathname === "/dashboard/counselor/appointment"
                    ? "dark:bg-white/10 bg-black/10"
                    : ""
                }`}
              >
                <LuCalendarDays size={20} />
                <span>Appointments</span>
              </span>
            </Link>

            <Link href="/dashboard/counselor/clients">
              <span
                className={`flex justify-start items-center gap-2 hover:dark:bg-white/15 hover:bg-black/5   py-2 px-2 rounded-md transition-all  duration-300 cursor-pointer ${
                  pathname === "/dashboard/counselor/clients"
                    ? "dark:bg-white/10 bg-black/10"
                    : ""
                }`}
              >
                <PiUsers size={20} />
                <span>Clients</span>
              </span>
            </Link>

            <Link href="/dashboard/counselor/messages">
              <span
                className={`flex justify-between items-center gap-2 hover:dark:bg-white/15 hover:bg-black/5  py-2 px-2 rounded-md transition-all  duration-300 cursor-pointer ${
                  pathname === "/dashboard/counselor/messages"
                    ? "dark:bg-white/10 bg-black/10"
                    : ""
                }`}
              >
                <span className="flex gap-2 items-center">
                  <AiOutlineMessage size={20} />
                  <span>Messages</span>
                </span>

                <span className="relative w-5 h-5 dark:bg-white bg-black  rounded-md">
                  <span className="text-sm dark:text-black text-white absolute left-1.5 ">
                    0
                  </span>
                </span>
              </span>
            </Link>

            <Link href="/dashboard/counselor/review">
              <span
                className={`flex justify-start items-center gap-2 hover:dark:bg-white/15 hover:bg-black/5  py-2 px-2 rounded-md transition-all  duration-300 cursor-pointer ${
                  pathname === "/dashboard/counselor/review"
                    ? "dark:bg-white/10 bg-black/10"
                    : ""
                }`}
              >
                <FaRegStar size={20} />
                <span>Reviews</span>
              </span>
            </Link>

            <Link href="/dashboard/counselor/payments">
              <span
                className={`flex justify-start items-center gap-2 hover:dark:bg-white/15 hover:bg-black/5  py-2 px-2 rounded-md transition-all  duration-300 cursor-pointer ${
                  pathname === "/dashboard/counselor/payments"
                    ? "dark:bg-white/10 bg-black/10"
                    : ""
                }`}
              >
                <GrCreditCard size={20} />
                <span>Payments</span>
              </span>
            </Link>
          </span>
        </span>

        <span
          onClick={handleClick}
          className={`flex relative justify-between w-full items-center gap-2 hover:dark:bg-white/15 hover:bg-black/5   py-2 px-2 rounded-md transition-all  duration-300 cursor-pointer  ${
            pathname === "/dashboard/counselor/appointment"
              ? "dark:bg-white/10 bg-black/10"
              : ""
          }`}
        >
          {settingsToggle && (
            <div className="absolute bottom-12 left-0 bg-white/5 w-full">
              <span className="flex flex-col px-2 py-4 border rounded-md gap-2">
                <span className="text-[14px]">Account Settings</span>
                <span className="text-[14px]">Settings</span>
                <span className="text-[14px]">Notification</span>
              </span>
            </div>
          )}
          <span className="flex justify-start items-center gap-2 ">
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
                className="block p-2 hover:bg-gray rounded"
              >
                Dashboard
              </Link>
              <Link
                href="/bookings"
                className="block p-2 hover:bg-gray rounded"
              >
                My Bookings
              </Link>
              <Link
                href="/messages"
                className="block p-2 hover:bg-gray rounded"
              >
                Messages
              </Link>
              <Link
                href="/settings"
                className="block p-2 hover:bg-gray rounded"
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
