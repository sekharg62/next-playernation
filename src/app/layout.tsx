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
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-background antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <HashScroll />
        <CookieConsent />
      </body>
    </html>
  );
}
