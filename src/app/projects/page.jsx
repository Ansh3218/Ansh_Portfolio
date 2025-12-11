import Footer from "@/components/Footer";
import Projects from "@/pages/Projects";
import React from "react";

const page = () => {
  return (
    <section data-section="/projects" className="min-h-screen">
      <Projects />
      <Footer />
    </section>
  );
};

export default page;
