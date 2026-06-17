import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { VideoPopup } from "@/components/common/VideoPopup";
import { GlobalCTA } from "@/components/common/GlobalCTA";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GDMI | Gbenga Dahunsi Ministry International",
  description:
    "A prophetic ministry raising a generation set apart for God's glory. Watch services, partner with projects, and grow in the prophetic.",
  icons: {
    icon: "/gdmi-logo.png",
  },
  openGraph: {
    title: "GDMI | Gbenga Dahunsi Ministry International",
    description:
      "A prophetic ministry raising a generation set apart for God's glory.",
    siteName: "GDMI",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${inter.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <GlobalCTA />
        <Footer />
        <VideoPopup />
        <Toaster />
      </body>
    </html>
  );
}
