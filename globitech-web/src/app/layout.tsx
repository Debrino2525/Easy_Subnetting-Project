import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Globitech Cyber Solutions | Takoradi, Ghana",
  description:
    "Cybersecurity services from Globitech Cyber Solutions in Takoradi, Western Region, Ghana — protecting organizations across West and East Africa.",
  keywords: [
    "cybersecurity",
    "Ghana",
    "Takoradi",
    "Globitech",
    "security consulting",
    "West Africa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
