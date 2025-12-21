import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import RecentWork from "@/components/RecentWork";
import ServicesPage, { ServiceDetails } from "@/components/Services";
import LenisProvider from "@/context/LenisProvider";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <LenisProvider>
        <section data-section="/" id="home" className="min-h-screen">
          <Hero />
        </section>
        <section
          data-section="/about"
          id="about"
          className="min-h-screen bg-black max-sm:rounded-t-4xl"
        >
          <About />
        </section>
        <section
          data-section="/projects"
          id="projects"
          className="min-h-screen bg-white mt-10"
        >
          <RecentWork />
        </section>
        <section
          data-section="/projects"
          id="projects"
          className="min-h-screen"
        >
          <ServicesPage />
        </section>
        <section data-section="/services" id="service" className="min-h-screen">
          <ServiceDetails />
          <FAQ />
        </section>
        <section data-section="/contact" id="contact" className="min-h-screen">
          <Contact />
          <Footer />
        </section>
      </LenisProvider>
    </main>
  );
}
