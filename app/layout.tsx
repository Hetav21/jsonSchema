import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qualification Task App",
  description: "Generated using next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        <div className=" text-center mx-auto bg-[linear-gradient(72.68deg,_#002CC4_28.97%,_#5468FF_145.47%)] min-h-28 "></div>
        <div className="ml-20 mr-20">
        {children}
        </div>
        </body>
    </html>
  );
}