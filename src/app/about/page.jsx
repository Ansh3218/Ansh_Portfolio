import Footer from "@/components/Footer";
import About from "@/pages/About";

const page = () => {
  return (
    <>
      <section
        data-section="/about"
        className="min-h-screen bg-black rounded-tl-[3rem]"
      >
        {/* <div className="w-full p-10"> */}
        {/* <h2 className="text-5xl text-gray-200">Intro</h2> */}
        {/* </div> */}
        <About />
        <Footer />
      </section>
    </>
  );
};

export default page;
