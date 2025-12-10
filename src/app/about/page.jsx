import Footer from "@/components/Footer";
import About from "@/pages/About";

const page = () => {
  return (
    <>
      <section
        data-section="/about"
        className="min-h-screen bg-black rounded-tl-[3rem]"
      >
        <About />
        <Footer />
      </section>
    </>
  );
};

export default page;
