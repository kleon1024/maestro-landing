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
  title: "Maestro AI — AI Infrastructure for Evidence-Heavy Work",
  description:
    "Maestro builds reusable AI systems for research, business automation, and market intelligence -- turning scattered sources into verified workflows, deliverables, and institutional memory.",
  keywords: [
    "Maestro AI",
    "AI infrastructure",
    "evidence-heavy workflows",
    "research infrastructure",
    "business automation",
    "market intelligence",
    "RA data service",
    "research compute",
    "experiment infrastructure",
    "dataset infrastructure",
    "paperwork automation",
    "lead research",
    "AI tools for expert work",
  ],
  authors: [{ name: "Maestro" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://maestro.onl" },
  openGraph: {
    title: "Maestro AI — AI Infrastructure for Evidence-Heavy Work",
    description:
      "Maestro builds reusable AI systems for research, business automation, and market intelligence -- turning scattered sources into verified workflows, deliverables, and institutional memory.",
    url: "https://maestro.onl",
    siteName: "Maestro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maestro AI — AI Infrastructure for Evidence-Heavy Work",
    description:
      "Maestro builds reusable AI systems for research, business automation, and market intelligence -- turning scattered sources into verified workflows, deliverables, and institutional memory.",
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
