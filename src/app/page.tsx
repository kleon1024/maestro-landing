import {
  Navigation,
  Hero,
  TheProblem,
  TheApproach,
  FlagshipRA,
  BusinessLines,
  MarketTrajectory,
  About,
  BottomCTA,
  Footer,
} from "@/components";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Navigation />
      <main>
        <Hero />
        <TheProblem />
        <TheApproach />
        <FlagshipRA />
        <BusinessLines />
        <MarketTrajectory />
        <About />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
