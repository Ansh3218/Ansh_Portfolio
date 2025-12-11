import React from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import HomePageCarousel from "./HomePageCards";
import ScrollTextReveal from "./ScrollTextReveal";

const RecentWork = () => {
  return (
    <>
      <div className="w-full h-auto min-h-screen">
        <div className="w-full">
          <ScrollTextReveal triggerPercent={70} stagger={2}>
            <h1 className="pl-[5rem] max-sm:pl-[2rem] max-sm:pb-[0rem] max-sm:pt-[8rem] pb-[3rem] pt-[10rem] text-3xl font-[font] text-gray-700 flex items-center gap-x-3">
              Recent Works <IoArrowDownCircleOutline />
            </h1>
          </ScrollTextReveal>
        </div>
        <div className="">
          <HomePageCarousel />
        </div>
      </div>
    </>
  );
};

export default RecentWork;
