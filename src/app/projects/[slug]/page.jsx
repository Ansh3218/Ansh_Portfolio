import { projects } from "@/data/Projects";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

export default async function ProjectDetails({ params }) {
  // Pehle params ko await karo
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="p-10 text-white">Project Not Found</div>;

  return (
    <div className="w-full min-h-screen py-16 px-10 flex justify-center">
      <div className="relative w-full max-w-[60vw] bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden transition-all duration-500">
        {/* TOP IMAGE WITH SAME STYLE */}
        <div className="relative w-full h-[30vw] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-3xl transition-all duration-700 transform scale-95 hover:scale-100"
          />

          {/* Glass Gradient Overlay Same as cards */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 flex items-center justify-between">
            <h1 className="text-white text-3xl font-bold">{project.name}</h1>
            <MdArrowBack className="rotate-[140deg] text-4xl text-gray-300" />
          </div>
        </div>

        {/* PROJECT DETAILS CONTENT */}
        <div className="p-10 text-white space-y-6">
          <p className="text-lg opacity-90 leading-relaxed">
            {project.description}
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
            <ul className="list-disc ml-6 opacity-90">
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* GALLERY */}
          {project.gallery && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-3">More Images</h2>

              <div className="grid grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="rounded-xl w-full object-cover shadow-xl"
                  />
                ))}
              </div>
            </div>
          )}

          {/* BACK BUTTON */}
          <Link
            href="/projects"
            className="inline-block mt-8 text-white bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg hover:bg-white/30 transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
