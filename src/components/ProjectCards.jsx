"use client";
import TextReveal from "@/animations/TextAnimations/TextRevel";
import { projects } from "@/data/Projects";
import Link from "next/link";

export function ProjectCards() {
  return (
    <section className="w-full min-h-screen py-16 px-6">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group rounded-lg overflow-hidden bg-[#0A0A0A]"
          >
            {/* IMAGE TOP */}
            <div className="w-full h-[450px] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* BOTTOM BLACK BOX */}
            <div className="w-full bg-[#0A0A0A] p-5 px-8 flex items-center justify-between font-[font]">
              {/* LEFT TEXT WITH REVEAL */}
              <TextReveal hoverEffect>
                <div>
                  <h3 className="text-white text-2xl max-md:text-3xl font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 font-medium text-base max-md:text-lg mt-1">
                    {project.services}
                  </p>
                </div>
              </TextReveal>

              {/* YEAR BOX WITH REVEAL */}
              <div className="px-6 py-1.5 rounded-full border border-neutral-700 text-gray-300 text-lg font-medium backdrop-blur-md">
                <TextReveal parentSelector={".group"} hoverEffect>
                  {project.year}
                </TextReveal>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
