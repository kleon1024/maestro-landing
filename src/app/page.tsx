import {
  Navigation,
  Hero,
  FlagshipRA,
  Products,
  Services,
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
        <Services />
        <FlagshipRA />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
