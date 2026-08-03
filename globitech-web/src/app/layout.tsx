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
  title: "Globitech Ghana | Cyber Solutions — Takoradi",
  description:
    "Globitech Cyber Solutions — cybersecurity services from Takoradi, Ghana, and owner of WO~MENS HAVEN (sisters-haven.com).",
  keywords: [
    "cybersecurity",
    "Ghana",
    "Takoradi",
    "Globitech",
    "WO~MENS HAVEN",
    "sisters-haven",
    "security consulting",
    "West Africa",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
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
