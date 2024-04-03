import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

import FloatingNav from "@/components/ui/floating-navbar";
import { IconHome, IconHanger, IconShoe, IconHandStop, IconDiamond } from "@tabler/icons-react";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-black",
          fontSans.variable
        )}
      >
        <FloatingNav />
        {children}</body>
    </html>
  );
}
