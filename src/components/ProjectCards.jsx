"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { projects } from "@/data/Projects";

export const ProjectCards = () => {
  return (
    <div className="w-full min-h-screen py-12 px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[88rem] mx-auto">
        {projects.map((project, idx) => (
          <Link href={`/projects/${project.slug}`} key={idx} className="w-full">
            <div className="relative group shadow-2xl bg-white/10 grayscale hover:grayscale-0 backdrop-blur-sm rounded-2xl transition-all duration-300 w-full h-[35vw] md:h-[38vw] lg:h-[35vw] overflow-hidden cursor-pointer flex items-end justify-center flex-col hover:shadow-none hover:backdrop-blur-none">
              {/* IMAGE - TERA ORIGINAL EFFECT */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-2xl duration-700 transform scale-95 group-hover:scale-100"
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
