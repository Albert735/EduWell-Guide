"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>

        


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
