import LenisProvider from "@/context/LenisProvider";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <LenisProvider>
        <section data-section="/" className="min-h-screen">
          <Hero />
        </section>
        <section data-section="/about" className="min-h-screen">
          <About />
        </section>
        <section data-section="/projects" className="min-h-screen">
          <Projects />
        </section>
        <section data-section="/contact" className="min-h-screen">
          <Contact />
        </section>
      </LenisProvider>
    </main>
  );
}
