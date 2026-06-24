import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import BackgroundDNA from "@/components/BackgroundDNA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DNA Volleyball",
  description: "Unlock Your Volleyball DNA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="text-white">

        {/* BackgroundDNA temporarily disabled for debugging */}
        {/* <BackgroundDNA /> */}

        {children}

      </body>
    </html>
  );
}