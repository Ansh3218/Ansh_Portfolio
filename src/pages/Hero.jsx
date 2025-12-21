"use client";
import TextReveal from "@/animations/TextAnimations/TextRevel";
import MotivatedContext from "@/components/MotivatedContext";

const Hero = () => {
  return (
    <>
      <div className="text-[16vw] w-screen leading-[15vw] text-[#e3e3e3] text-center font-[fantasy] bg-black/60 mb-[5vw]">
        {/* <TextReveal> */}
        <div className="bg-black flex flex-col items-center text-center py-[2rem] w-screen max-sm:py-[15rem]">
          <TextReveal>
            <p>UNLOCK</p>
          </TextReveal>
          <TextReveal>
            {" "}
            <p>YOUR</p>
          </TextReveal>
          <TextReveal>
            <div className="flex items-end w-full">
              <h1 className="text-black bg-white text-center">POTENTIAL</h1>
              <h1 className="text-2xl text-black bg-white text-center">
                —&nbsp;BY MR_ANSH
              </h1>
            </div>
          </TextReveal>
        </div>
      </div>
    </>
  );
};

export default Hero;
