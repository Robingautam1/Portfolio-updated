import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Robin Gautam — MBA Candidate, IIM Rohtak",
  description:
    "Strategy, Growth & Product. MBA Candidate at IIM Rohtak. Previously led growth, content, and partnerships across fintech, social impact, and media.",
  keywords: [
    "Robin Gautam",
    "IIM Rohtak",
    "MBA",
    "Product Management",
    "Growth Strategy",
    "Consulting",
    "Portfolio",
  ],
  authors: [{ name: "Robin Gautam" }],
  openGraph: {
    title: "Robin Gautam — MBA Candidate, IIM Rohtak",
    description:
      "Strategy, Growth & Product. Building at the intersection of business thinking and hands-on execution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="bg-bg text-fg font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
