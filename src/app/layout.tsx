import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import HashScroll from "@/components/HashScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlayerNation",
  description: "Your ultimate destination for player stats, insights, and sports gaming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen min-w-0 flex-col overflow-x-hidden bg-background antialiased`}
      >
        <Navbar />
        <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
        <Footer />
        <HashScroll />
        <CookieConsent />
      </body>
    </html>
  );
}
