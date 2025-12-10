"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { projects } from "@/data/Projects";

export const ProjectCards = () => {
  return (
    <div className="w-full min-h-screen py-12 px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <Link href={`/projects/${project.slug}`} key={idx} className="w-full">
            <div className="relative group shadow-2xl bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-300 w-full h-[35vw] md:h-[38vw] lg:h-[35vw] overflow-hidden cursor-pointer flex items-end justify-center flex-col hover:shadow-none hover:backdrop-blur-none">
              {/* IMAGE - TERA ORIGINAL EFFECT */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-2xl duration-700 transform scale-90 group-hover:scale-100"
              />

              {/* TEXT - BILKUL TERA WALA */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 flex items-center justify-between transition-all duration-500">
                <h3 className="text-white text-xl font-semibold">
                  {project.name}
                </h3>
                <MdArrowBack className="rotate-[140deg] text-3xl text-gray-200" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function CaseStudyCarousel() {
  const caseStudies = [
    {
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=900&fit=crop",
      title: "Luxury Packaging",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=900&fit=crop",
      title: "Product Design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&h=900&fit=crop",
      title: "Brand Identity",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&h=900&fit=crop",
      title: "Cosmetic Design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=900&fit=crop",
      title: "Luxury Packaging 2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=900&fit=crop",
      title: "Product Design 2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive slides count
  const slidesToShow = {
    base: 1, // mobile
    md: 2, // tablet
    lg: 3, // desktop
  };

  const next = () => {
    setCurrentIndex((prev) => {
      const maxIndex = caseStudies.length - getSlidesToShow();
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? caseStudies.length - getSlidesToShow() : prev - 1
    );
  };

  // Helper to get current slides count based on screen
  const getSlidesToShow = () => {
    if (typeof window === "undefined") return slidesToShow.base;
    if (window.innerWidth >= 1024) return slidesToShow.lg; // lg+
    if (window.innerWidth >= 768) return slidesToShow.md; // md+
    return slidesToShow.base;
  };

  // Better way: Use percentage width instead of fixed 100%
  const getSlideWidth = () => {
    if (typeof window === "undefined") return "100%";
    if (window.innerWidth >= 1024) return "33.333%"; // 3 cards
    if (window.innerWidth >= 768) return "50%"; // 2 cards
    return "100%"; // 1 card
  };

  return (
    <div className="min-h-screen text-white py-16 px-4">
      <div className="max-w-[88rem] mx-auto">
        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex *
                (100 /
                  (window.innerWidth >= 1024
                    ? 3
                    : window.innerWidth >= 768
                    ? 2
                    : 1))
              }%)`,
            }}
          >
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: getSlideWidth() }}
              >
                <div className="w-full">
                  <div className="relative group cursor-pointer aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <button className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                        <span className="text-sm font-light">
                          View Casestudy
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="mt-4 text-center text-lg font-light">
                    {study.title}
                  </h3>
                </div>
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
              length: caseStudies.length - getSlidesToShow() + 1,
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
