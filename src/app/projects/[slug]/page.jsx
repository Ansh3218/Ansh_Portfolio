import { projects } from "@/data/Projects";
import Link from "next/link";
import { AnimatedButton } from "@/components/Buttons";

export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="p-10 text-black">Project Not Found</div>;

  return (
    <section data-section="/projects">
      <div className="w-full min-h-screen py-20 px-10 flex justify-center bg-white/10">
        {/* MAIN WRAPPER */}
        <div className="w-full max-w-[90vw]">
          {/* ================= HEADER (TITLE + SUBTEXT + BUTTON) ================= */}
          <h1 className="text-[3.8rem] font-semibold text-black tracking-tight">
            {project.name}
          </h1>

          <p className="text-gray-600 text-xl mt-4 max-w-[60ch] leading-relaxed">
            {project.shortDesc ||
              "This project transforms ideas into clean, functional and elegant digital experiences."}
          </p>

          {/* LIVE PREVIEW BUTTON */}
          <div className="mt-8">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <AnimatedButton px="3%">Preview</AnimatedButton>
            </a>
          </div>

          {/* ================= CLIENT / SERVICES / TIMELINE ================= */}
          <div className="flex items-start justify-start gap-28 mt-16">
            <div>
              <p className="text-gray-400 text-sm uppercase">Client</p>
              <p className="text-lg font-medium mt-1">
                {project.client || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm uppercase">Services</p>
              <p className="text-lg font-medium mt-1">
                {project.services || "Product Design"}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm uppercase">Timeline</p>
              <p className="text-lg font-medium mt-1">
                {project.timeline || "2 weeks"}
              </p>
            </div>
          </div>

          {/* ================= TOP BIG IMAGE (WHITE CARD STYLE) ================= */}
          <div className="mt-14 w-full p-4 bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full rounded-2xl object-cover transition duration-700 hover:scale-[1.01]"
            />
          </div>

          {/* ================= DESCRIPTION ================= */}
          <div className="mt-14">
            <h2 className="text-2xl font-semibold text-black">Description</h2>
            <p className="text-gray-700 text-lg w-[90%] text-justify leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* ================= TECHNOLOGIES ================= */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-black">
              Technologies Used
            </h2>

            <ul className="list-disc ml-6 text-lg text-gray-700 mt-3">
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* ================= GALLERY ================= */}
          {project.gallery && (
            <div className="mt-14">
              <h2 className="text-2xl font-semibold text-black">More Images</h2>

              <div className="grid grid-cols-2 gap-6 mt-4">
                {project.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="rounded-xl grayscale transition-all duration-500 hover:grayscale-0 w-full object-cover shadow-md hover:scale-95 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          )}

          {/* BACK BUTTON */}
          <div className="mt-12">
            <Link href="/projects">
              <AnimatedButton
                rounded="30px"
                px="2rem"
                className="text-lg"
                py="0.8rem"
              >
                Back to Projects
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
