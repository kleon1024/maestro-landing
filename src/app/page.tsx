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

export default function Home() {
  return (
    <>
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
