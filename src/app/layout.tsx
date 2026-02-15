import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL("https://maestro.onl"),
  title: "Maestro | AI, Orchestrated",
  description:
    "We build AI tools that amplify human expertise. From behavioral economics to intelligent calendars, our products transform how professionals work.",
  keywords: [
    "Maestro AI",
    "AI research assistant",
    "RA data service",
    "AI behavioral economics",
    "research data processing",
    "AI orchestration",
    "data automation",
  ],
  authors: [{ name: "Maestro" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://maestro.onl" },
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
        <SpeedInsights />
      </body>
    </html>
  );
}
