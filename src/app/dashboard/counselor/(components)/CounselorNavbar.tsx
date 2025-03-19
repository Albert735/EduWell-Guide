import React from "react";

export default function counselorNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex flex-col">
      <header className="flex bg-white/5 h-14 lg:h-[55px] items-center gap-4 border-b px-6">
        Navbar
      </header>

      {children}
    </div>
  );
}
