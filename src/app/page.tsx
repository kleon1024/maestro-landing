import {
  Navigation,
  Hero,
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
        <Products />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
