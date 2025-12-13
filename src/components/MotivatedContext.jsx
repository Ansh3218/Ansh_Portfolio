"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MotivatedContext() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-black/5 flex items-center justify-center overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto font-[font]">
        {/* Heading */}
        <h1 className="text-3xl max-md:text-4xl font-[font] text-[#c9c8c8] mb-6 leading-tight w-[90%] pl-[25vw] pt-[8vw] text-right">
          Transform Your Ideas Into Digital Reality Empowering innovation &nbsp;
          <span className="text-[#494949] bg-black">
            through cutting-edge solutions
          </span>
        </h1>
        {/* CTA Button */}
        <Link
          href={"https://www.linkedin.com/in/ansh-chauhan-4b2b46271/"}
          target="_blank"
        >
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center gap-4 cursor-pointer px-1 gap-x-8 py-1 bg-transparent border-2 border-[#494949] rounded-full text-white text-lg mt-[5rem] font-medium hover:border-gray-500 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="pl-7">See my Linkedin</span>

            {/* Arrow Circle Container */}
            <div className="relative w-12 h-12 bg-[#494949] rounded-full flex items-center justify-center overflow-hidden group-hover:bg-gray-600 transition-all duration-300">
              {/* First Arrow - moves right on hover */}
              <ArrowRight
                className={`absolute transition-all duration-300 ${
                  isHovered
                    ? "translate-x-10 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
                size={20}
              />

              {/* Second Arrow - comes from left on hover */}
              <ArrowRight
                className={`absolute transition-all duration-300 ${
                  isHovered
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                size={20}
              />
            </div>
          </button>
        </Link>
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute bottom-20 left-10 w-20 h-2 bg-white/50 rounded-full animate-bounce"></div>
      <div className="absolute top-40 left-10 w-20 h-2 bg-white/50 rounded-full animate-bounce"></div>
      <div className="absolute bottom-36 right-20 w-20 h-2 bg-white/50 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-30 right-20 w-20 h-2 bg-white/50 rounded-full animate-bounce delay-300"></div> */}
    </div>
  );
}
