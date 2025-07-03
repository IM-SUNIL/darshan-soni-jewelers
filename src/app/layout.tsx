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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="transition-colors duration-300">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
