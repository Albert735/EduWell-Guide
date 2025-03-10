"use client";

import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();

  return (
    <div
      className="back flex items-start justify-start p-4 w-full cursor-pointer"
      onClick={() => router.back()} // Go back to the previous page
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H6M12 5l-7 7 7 7"></path>
      </svg>
    </div>
  );
}
