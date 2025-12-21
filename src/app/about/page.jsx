import Footer from "@/components/Footer";
import MotivatedContext from "@/components/MotivatedContext";
import About from "@/pages/About";

const page = () => {
  return (
    <>
      <section data-section="/about" className="min-h-screen bg-black/50">
        <MotivatedContext />
        <About />
        <Footer />
      </section>
    </>
  );
};

export default page;
