import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Coverage } from "@/components/Coverage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Coverage />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
