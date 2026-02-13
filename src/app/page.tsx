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
        <FlagshipRA />
        <Products />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
