import CircularText from "@/animations/TextAnimations/CircleText";
import TextReveal from "@/animations/TextAnimations/TextRevel";
import Video from "@/components/Video";

const Hero = () => {
  return (
    <div className="relative w-full h-auto overflow-x-hidden">
      <div
        className="relative text-[10.5vw] uppercase text-[#E6E6E6] text-center leading-[9vw] font-[arial] max-md:text-[15vw] max-md:leading-[15vw] flex flex-col items-center"
        style={{ padding: "1.5rem" }}
      >
        <TextReveal>
          <div>
            The <span className="text-[#6b6b6b]">vision</span>
          </div>
        </TextReveal>

        <TextReveal>
          <div className="flex text-center justify-center gap-x-10">
            that <span>turns</span>
          </div>
        </TextReveal>

        <TextReveal>
          <span className="text-[#6b6b6b]">creativity</span>
        </TextReveal>

        <TextReveal>
          <div className="flex text-center justify-center gap-x-[5vw]">
            <div className="w-[15vw] h-[7vw] overflow-hidden rounded-full">
              <Video />
            </div>
            into
          </div>
        </TextReveal>

        <TextReveal>
          <div className="text-[#6b6b6b]">experience.</div>
        </TextReveal>
      </div>

      <div className="fixed left-5 bottom-0">
        <CircularText
          text="CODE • DESIGN • DEPLOY • SCALE • "
          onHover="speedUp"
          spinDuration={20}
        />
      </div>
    </div>
  );
};

export default Hero;
