import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Maestro | AI, Orchestrated",
  description:
    "We build AI tools that amplify human expertise. From behavioral economics to intelligent calendars, our products transform how professionals work.",
  keywords: [
    "AI",
    "artificial intelligence",
    "machine learning",
    "behavioral economics",
    "calendar",
    "productivity",
    "automation",
  ],
  authors: [{ name: "Maestro" }],
  openGraph: {
    title: "Maestro | AI, Orchestrated",
    description:
      "We build AI tools that amplify human expertise. From behavioral economics to intelligent calendars, our products transform how professionals work.",
    url: "https://maestro.onl",
    siteName: "Maestro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maestro | AI, Orchestrated",
    description:
      "We build AI tools that amplify human expertise. From behavioral economics to intelligent calendars, our products transform how professionals work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
