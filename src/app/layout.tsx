import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darshan Soni Jewelers - Crafting Elegance Since 1985",
  description: "Premium Indian jewelry brand offering exquisite rings, necklaces, and bridal sets. Crafting elegance since 1985 with unmatched quality and heritage.",
  keywords: "jewelry, gold jewelry, Indian jewelry, bridal sets, rings, necklaces, premium jewelry",
  authors: [{ name: "Darshan Soni Jewelers" }],
  openGraph: {
    title: "Darshan Soni Jewelers - Crafting Elegance Since 1985",
    description: "Premium Indian jewelry brand offering exquisite rings, necklaces, and bridal sets.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray min-h-screen text-black font-sans">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
