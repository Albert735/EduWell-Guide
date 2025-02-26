import type { Metadata } from "next";
import { Montserrat, Rubik } from "next/font/google"; // ✅ Import correct fonts
import "./globals.css";

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

export const metadata: Metadata = {
  title: "EduWell Guide",
  description: "A guide to help you navigate the EduWell platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
