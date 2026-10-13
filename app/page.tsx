import About from "@/components/About";
import { Contact, Footer, WhatsAppFloat } from "@/components/Contact";
import Corporate from "@/components/Corporate";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Marquee from "@/components/Marquee";
import Membership from "@/components/Membership";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Revolution from "@/components/Revolution";
import Services from "@/components/Services";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Revolution />
        <Corporate />
        <Stories />
        <Membership />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
