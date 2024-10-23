import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/app/providers";
import { AppHeader } from "@/entities/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Reviera",
  description: "You're author",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div
            className={`bg-[#232529] min-h-[100vh] text-[#e2e3e7] ${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <div className="container mx-auto max-w-6xl">
              <AppHeader />
            </div>

            <main className="h-[90vh]">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
