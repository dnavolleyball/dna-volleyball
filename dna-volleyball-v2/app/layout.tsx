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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DNA Volleyball - Premium Athlete Development in Durham Region, Ontario",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DNA Volleyball | Athlete Development in Durham Region",
    description:
      "Premium volleyball athlete development programs in Durham Region, Ontario. Develop. Train. Evolve. Compete.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "DNA Volleyball",
  alternateName: "Durham Nova Academy",
  url: "https://www.dnavolleyball.ca",
  logo: "https://www.dnavolleyball.ca/logo.png",
  email: "info@dnavolleyball.ca",

  sport: "Volleyball",

  areaServed: {
    "@type": "AdministrativeArea",
    name: "Durham Region, Ontario, Canada",
  },

  sameAs: [
    "https://www.instagram.com/dnavolleyballca/",
    "https://book.communiti.app/dnavolleyball",
  ],
};;

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* BackgroundDNA temporarily disabled */}
        {/* <BackgroundDNA /> */}

        {children}
      </body>
    </html>
  );
}