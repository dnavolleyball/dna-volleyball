import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DNA Volleyball",
  description:
    "Develop your Volleyball DNA through progressive training programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}