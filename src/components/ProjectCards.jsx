"use client";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { projects } from "@/data/Projects";

const ProjectCards = () => {
  return (
    <div className="project-container w-full min-h-screen h-auto grid grid-cols-2 max-[680px]:grid-cols-1 gap-8 p-12 items-center justify-items-center">
      {projects.map((project, idx) => (
        <Link href={`/projects/${project.slug}`} key={idx} className="w-full">
          <div className="relative group shadow-2xl bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-300 w-full max-w-[40vw] h-[35vw] overflow-hidden cursor-pointer flex items-end justify-center flex-col hover:shadow-none hover:backdrop-blur-none">
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl duration-700 transform scale-90 group-hover:scale-100"
            />

            {/* TEXT */}
            <div className="w-full bg-gradient-to-t from-black/70 to-transparent p-6 flex items-center justify-between transition-all duration-500 transform translate-y-0 -hover:translate-y-full">
              <h3 className="text-white text-xl font-semibold">
                {project.name}
              </h3>

              <MdArrowBack className="rotate-[140deg] text-3xl text-gray-200" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCards;
