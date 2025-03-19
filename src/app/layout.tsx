"use client";

// import type { Metadata } from "next";
import { Montserrat, Rubik } from "next/font/google"; // ✅ Import correct fonts
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // ✅ Choose appropriate weights
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // ✅ Define font weights
});

// export const metadata: Metadata = {
//   title: "EduWell Guide",
//   description: "A guide to help you navigate the EduWell platform",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname() || "";

  // Hide layout for specific pages
  const hideLayoutRoutes = [
    "/join",
    "/login",
    "/form/registerStudent",
    "/form/registerCounselor",
    "/form/login",
    "/form",
    "/dashboard/student",
    "/dashboard/counselor",
    "/dashboard/counselor/appointment",
    "/dashboard/counselor/clients",
    "/dashboard/counselor/messages",
    "/dashboard/counselor/review",
    "/dashboard/counselor/payments",
  ];
  const hideLayout = hideLayoutRoutes.includes(pathname);

  return (
    //suppress hydration warning
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${rubik.variable} antialiased`}>
        {/* Enable system theme */}
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <div className="dark:bg-black dark:text-white transition-all duration-200">
            {!hideLayout && <Navbar />}
            {children}
            {!hideLayout && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
