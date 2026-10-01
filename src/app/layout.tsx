import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Exam Sphere | Redefining Excellence | Olympiads & Assessment Solutions",
  description:
    "Exam Sphere is a premier educational and testing services organization offering Exam Olympiads, Outsourcing Recruitment (Manpower Supply), Government Exam Management, Educational Supplies, and Skill Development.",
  keywords: [
    "Exam Sphere",
    "Exam Olympiads",
    "Redefining Excellence",
    "Government Exam Management",
    "Outsourcing Recruitment",
    "Manpower Supply",
    "Educational Supplies",
    "Training & Skill Development",
    "Certificate Verification",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="font-sans antialiased flex flex-col min-h-screen selection:bg-gold-500 selection:text-navy-950 bg-white text-slate-800 relative">
        <Watermark />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
