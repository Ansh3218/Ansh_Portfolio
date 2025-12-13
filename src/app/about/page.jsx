import Footer from "@/components/Footer";
import MotivatedContext from "@/components/MotivatedContext";
import About from "@/pages/About";

const page = () => {
  return (
    <>
      <section data-section="/about" className="min-h-screen bg-black/50">
        {/* <div className="w-full p-10"> */}
        {/* <h2 className="text-5xl text-gray-200">Intro</h2> */}
        {/* </div> */}
        <MotivatedContext />
        <About />
        <Footer />
      </section>
    </>
  );
};

export default page;
