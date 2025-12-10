import React from "react";
import ShinyText from "./ShinyText";
import InfiniteMarqueeEffect from "./InfinityMarqueeEffect";
import PixelTransition from "@/animations/ImageAnimations/ImagePixalTransition";

const AboutDescription = () => {
  const services = [
    { label: "MERN Full-Stack Development" },
    { label: "Responsive Website Development" },
    { label: "React Native App Development" },
    { label: "Frontend UI/UX Engineering" },
    { label: "Figma Prototyping & UI Design" },
    { label: "API Integration & Backend Logic" },
  ];

  return (
    <div className="py-16 sm:py-24 md:py-32">
      <div className="w-full text-[#b2b2b2] flex flex-col lg:flex-row justify-start gap-8 lg:gap-0">
        {/* Text Content Section */}
        <div className="intro-desc flex flex-col pt-6 sm:pt-10 px-4 sm:px-6 md:px-8 lg:px-12 w-full lg:w-1/2">
          <div className="name">
            <h1 className="pb-8 sm:pb-10 md:pb-12 text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[11vw] sm:leading-[9vw] md:leading-[7vw] lg:leading-[6vw]">
              Meet Ansh
            </h1>
            <p className="w-full max-w-[600px] text-sm sm:text-base md:text-lg leading-relaxed">
              I'm Ansh, a dedicated Full-Stack Developer from India, focused on
              building fast, scalable, and user-centric digital experiences. I
              combine strong backend engineering with modern front-end design to
              create applications that are both powerful and intuitive. With a
              balanced approach of clean architecture, performance-driven
              development, and strategic problem-solving, I transform ideas into
              reliable, future-ready products.
            </p>
          </div>

          {/* Services Grid */}
          <div className="service border-t-2 border-[#484848] my-6 sm:my-8 md:my-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-14 pt-6 sm:pt-8 md:pt-10 lg:pt-14 font-medium">
            {services.map((item, index) => (
              <li
                key={index}
                className="bg-black shadow shadow-gray-300/20 text-xs sm:text-sm md:text-base py-3 sm:py-3.5 px-2 rounded-lg flex items-center justify-center text-center"
              >
                <ShinyText text={item.label} speed={3} />
              </li>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="image w-full lg:w-1/2 h-auto flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[640px] aspect-square">
            <PixelTransition
              firstContent={
                <img
                  src="/images/ansh.png"
                  alt="ansh"
                  className="w-full h-full object-contain rounded-xl object-center"
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#000",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "clamp(1.5rem, 5vw, 3rem)",
                      color: "#ffffff",
                    }}
                  >
                    MR_ANSH
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#000000"
              once={false}
              animationStepDuration={0.5}
              className="custom-pixel-card w-full h-full"
            />
          </div>
        </div>
      </div>
      <InfiniteMarqueeEffect />
    </div>
  );
};

export default AboutDescription;
