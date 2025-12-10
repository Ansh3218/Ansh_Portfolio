"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What services do you provide?",
      a: "I build modern websites, MERN applications, React Native mobile apps, and clean UI/UX designs using Figma.",
    },
    {
      q: "How do I start working with you?",
      a: "Simply share your project idea or requirements, and I’ll guide you through the next steps.",
    },
    {
      q: "What technologies do you work with?",
      a: "I work with React, Node.js, Express, MongoDB, React Native, Tailwind CSS, and Figma for UI design.",
    },
    {
      q: "How long does a project take?",
      a: "Timelines depend on the project type — typically 1 to 6 weeks based on complexity.",
    },
    {
      q: "Do you offer revisions?",
      a: "Yes, I provide multiple revisions to ensure the final product meets your expectations.",
    },
    {
      q: "Do you provide both design and development?",
      a: "Yes, I handle both UI/UX design and full-stack development to deliver complete digital solutions.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <div className="w-full bg-black text-white px-[5rem] py-20 max-[1024px]:px-[3rem] max-[640px]:px-6 max-[640px]:py-14">
      {/* Top Section */}
      <div className="flex justify-between items-start gap-20 max-[1024px]:flex-col max-[1024px]:gap-12">
        {/* LEFT SIDE */}
        <div className="w-1/2 max-[1024px]:w-full">
          <span className="px-4 py-1 rounded-full bg-[#0F0F0F] border border-white/10 text-sm inline-flex items-center gap-2">
            <span className="text-lg">◎</span> FAQ'S
          </span>

          <h1 className="text-[6rem] font-medium leading-[1] mt-6 max-[1024px]:text-[4rem] max-[640px]:text-[2.8rem]">
            Answers
          </h1>

          <p className="text-gray-400 text-lg mt-5 max-[640px]:text-base">
            Find answers to common questions about my design process, services
            etc...
          </p>

          {/* IMAGE BOX */}
          <div className="w-full h-[470px] bg-[#1B1B1B] rounded-3xl mt-10 overflow-hidden max-[1024px]:h-[380px] max-[640px]:h-[250px]">
            <img
              src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200"
              className="w-full h-full object-cover grayscale"
              alt=""
            />
          </div>
        </div>

        {/* RIGHT SIDE FAQ LIST */}
        <div className="w-1/2 flex flex-col gap-4 max-[1024px]:w-full">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 cursor-pointer transition-all max-[640px]:p-4"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg max-[640px]:text-base">{item.q}</h3>

                <Plus
                  className={`w-6 h-6 transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                />
              </div>

              {/* Dropdown */}
              {open === i && (
                <p className="text-gray-400 mt-4 text-sm leading-relaxed max-[640px]:text-[13px]">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
