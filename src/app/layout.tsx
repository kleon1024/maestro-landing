import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maestro.onl"),
  title: "Maestro AI — Research Data Services & AI Tools for Academics",
  description:
    "Maestro builds AI-powered research tools and custom enterprise solutions. RA Data Service for academics. Custom AI development, tool integration, and automation for SMEs in Singapore and globally.",
  keywords: [
    "Maestro AI",
    "AI research assistant",
    "RA data service",
    "research data processing",
    "academic data cleaning",
    "trade data extraction",
    "econometrics data service",
    "AI tools for researchers",
    "AI custom development Singapore",
    "SME AI solutions",
    "enterprise AI tools",
  ],
  authors: [{ name: "Maestro" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://maestro.onl" },
  openGraph: {
    title: "Maestro AI — Research Data Services & AI Tools for Academics",
    description:
      "Maestro builds AI-powered research tools and custom enterprise solutions. RA Data Service for academics. Custom AI development, tool integration, and automation for SMEs in Singapore and globally.",
    url: "https://maestro.onl",
    siteName: "Maestro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maestro AI — Research Data Services & AI Tools for Academics",
    description:
      "Maestro builds AI-powered research tools and custom enterprise solutions. RA Data Service for academics. Custom AI development, tool integration, and automation for SMEs in Singapore and globally.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
