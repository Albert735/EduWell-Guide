import React from "react";
import ToggleTheme from "@/components/Toggle-theme";

export default function counselorNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <header className="hidden xl:flex justify-between w-full bg-white/5 h-14 lg:h-[55px] items-start gap-4 border-b px-6">
        <div>
          {/* <h1>Dashboard</h1> */}
        </div>
        <ToggleTheme />
      </header>

      {children}
    </div>
  );
}
