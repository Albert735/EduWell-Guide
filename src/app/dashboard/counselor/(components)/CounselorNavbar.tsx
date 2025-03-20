import React from "react";
import ToggleTheme from "@/components/Toggle-theme";

export default function counselorNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex flex-col">
      <header className="flex justify-between w-full bg-white/5 h-14 lg:h-[55px] items-center gap-4 border-b px-6">
        <div> </div>
        <ToggleTheme />
      </header>

      {children}
    </div>
  );
}
