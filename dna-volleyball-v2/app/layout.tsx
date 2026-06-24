import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  metadataBase: new URL("https://www.dnavolleyball.ca"),

  title: {
    default: "DNA Volleyball | Athlete Development in Durham Region",
    template: "%s | DNA Volleyball",
  },

  description:
    "DNA Volleyball provides premium volleyball athlete development programs in Durham Region, Ontario. Develop, train, evolve, and unlock your volleyball DNA.",

  keywords: [
    "DNA Volleyball",
    "Durham volleyball",
    "Durham Region volleyball",
    "volleyball training Ontario",
    "youth volleyball training",
    "volleyball academy Durham",
    "volleyball athlete development",
    "volleyball programs Durham Region",
    "Ontario volleyball training",
  ],

  authors: [{ name: "DNA Volleyball" }],
  creator: "DNA Volleyball",
  publisher: "DNA Volleyball",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "DNA Volleyball | Athlete Development in Durham Region",
    description:
      "Premium volleyball athlete development programs in Durham Region, Ontario. Develop. Train. Evolve. Compete.",
    url: "https://www.dnavolleyball.ca",
    siteName: "DNA Volleyball",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DNA Volleyball | Athlete Development in Durham Region",
    description:
      "Premium volleyball athlete development programs in Durham Region, Ontario. Develop. Train. Evolve. Compete.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="text-white">
        <GoogleAnalytics />
        {/* BackgroundDNA temporarily disabled */}
        {/* <BackgroundDNA /> */}

        {children}
      </body>
    </html>
  );
}