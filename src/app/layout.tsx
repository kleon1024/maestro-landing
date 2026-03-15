import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maestro.onl"),
  title: "Maestro AI — Complex Engineering into Compounding AI Infrastructure",
  description:
    "Maestro turns complex engineering into compounding AI infrastructure. Every project produces a reusable AI module. Data engineering was first. Document intelligence, compliance, and workflow automation are next.",
  keywords: [
    "Maestro AI",
    "AI automation infrastructure",
    "AI engineering modules",
    "RA data service",
    "research data processing",
    "AI tools for researchers",
    "AI custom development Singapore",
    "enterprise AI automation",
    "document intelligence",
    "compliance automation",
    "workflow automation",
  ],
  authors: [{ name: "Maestro" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://maestro.onl" },
  openGraph: {
    title: "Maestro AI — Complex Engineering into Compounding AI Infrastructure",
    description:
      "Maestro turns complex engineering into compounding AI infrastructure. Every project produces a reusable AI module. Data engineering was first. Document intelligence, compliance, and workflow automation are next.",
    url: "https://maestro.onl",
    siteName: "Maestro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maestro AI — Complex Engineering into Compounding AI Infrastructure",
    description:
      "Maestro turns complex engineering into compounding AI infrastructure. Every project produces a reusable AI module. Data engineering was first. Document intelligence, compliance, and workflow automation are next.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
