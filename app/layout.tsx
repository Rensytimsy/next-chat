"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/navigation";
import SideNavigation from "./components/sideNavigation";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./components/handletheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeContextProvider>
          <NavigationBar />
          <SideNavigation />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
