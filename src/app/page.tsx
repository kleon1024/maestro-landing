import {
  Navigation,
  Hero,
  FlagshipRA,
  Services,
  ProcessWorkflow,
  Products,
  About,
  Contact,
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
        <FlagshipRA />
        <Services />
        <ProcessWorkflow />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
