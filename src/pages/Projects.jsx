"use client";
import TextReveal from "@/animations/TextAnimations/TextRevel";
import { AnimatedButton } from "@/components/Buttons";
import ProjectCards from "@/components/ProjectCards";

import React from "react";

const Projects = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full">
          <div className="w-full p-[8vw] pl-[8vw] font-sans flex flex-col gap-y-5">
            <TextReveal>
              <div className="text-black flex items-center gap-x-2 text-left">
                <p className="w-2.5 h-2.5 bg-black rounded-full"></p>
                My Projects
              </div>
            </TextReveal>
            <div className="w-[40%]">
              <p className="text-3xl pb-5">
                Crafting projects that speak louder than words.
              </p>
              <div className="inline-block">
                <AnimatedButton href="https://wa.me/918218429896?text=Hi%20Aniket%20bhai%2C%20I%20want%20a%20website">
                  LET{"'"}S TALK
                </AnimatedButton>
              </div>
            </div>
          </div>
          <div className="">
            <ProjectCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
