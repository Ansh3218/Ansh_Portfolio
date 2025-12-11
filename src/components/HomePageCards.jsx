"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/Projects";

export default function HomePageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => {
      const maxIndex = projects.length - slidesToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? projects.length - slidesToShow : prev - 1
    );
  };

  const getSlideWidth = () => {
    return `${100 / slidesToShow}%`;
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen text-white py-16 px-4 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-sm:min-h-[30vh] text-white py-16 px-4">
      <div className="max-w-[88rem] mx-auto">
        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: getSlideWidth() }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="w-full">
                    <div className="relative group cursor-pointer aspect-square rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <button className="w-full cursor-pointer px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                          <span className="text-sm font-light">
                            View Project
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <h3 className="mt-4 text-center text-lg font-light">
                      {project.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8 mt-6">
          <button
            onClick={prev}
            className="w-14 h-14 bg-black/85 backdrop-blur border border-black/30 rounded-full flex items-center justify-center hover:bg-black cursor-pointer transition-all duration-300"
          >
            <ChevronRight className="w-7 h-7 rotate-180" />
          </button>

          <div className="flex gap-3">
            {Array.from({
              length: projects.length - slidesToShow + 1,
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-10 bg-black"
                    : "w-2 bg-black/85 hover:bg-black/50 cursor-pointer"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-14 h-14 bg-black/85 backdrop-blur border border-black/30 rounded-full flex items-center justify-center hover:bg-black cursor-pointer transition-all duration-300"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
