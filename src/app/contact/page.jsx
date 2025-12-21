import Footer from "@/components/Footer";
import Contact from "@/pages/Contact";
import React from "react";

const page = () => {
  return (
    <section data-section="/contact" className="min-h-screen">
      <Contact />
      <Footer />
    </section>
  );
};

export default page;
