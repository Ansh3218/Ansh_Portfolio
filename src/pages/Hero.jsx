"use client";
import TextReveal from "@/animations/TextAnimations/TextRevel";

const Hero = () => {
  return (
    <div className="relative w-full h-auto overflow-x-hidden">
      <div className="relative max-sm:h-[20%] text-[10.5vw] leading-[9vw] pt-[1.5rem] uppercase text-[#E6E6E6] text-center font-[arial] flex flex-col items-center px-6 max-lg:text-[13vw] max-lg:leading-[12vw] max-sm:text-[16vw] max-sm:leading-[18vw] max-sm:pt-[15rem] max-md:pt-[10rem] max-sm:text-nowrap">
        <TextReveal>
          <div>
            The <span className="text-[#6b6b6b]">vision</span>
          </div>
        </TextReveal>

        <TextReveal>
          <div className="flex text-center justify-center gap-x-10 max-sm:gap-x-5">
            that <span>turns</span>
          </div>
        </TextReveal>

        <TextReveal>
          <span className="text-[#6b6b6b]">creativity</span>
        </TextReveal>

        <TextReveal>
          <span className="flex text-center justify-center items-center gap-x-[5vw] max-sm:gap-x-[3vw]">
            <div className="w-[7vw] h-[9vw] rounded-full overflow-hidden max-sm:w-[4rem] max-sm:h-[5.5rem]">
              <img src="/images/ansh.jpg" alt="alt" />
            </div>
            into
          </span>
        </TextReveal>

        <TextReveal>
          <div className="text-[#6b6b6b]">experience.</div>
        </TextReveal>
      </div>
    </div>
  );
};

export default Hero;
