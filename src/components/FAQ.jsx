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
    <div className="w-full bg-black text-white px-[5rem] py-20">
      {/* Top Head Section */}
      <div className="flex justify-between items-start gap-20">
        {/* Left Content */}
        <div className="w-1/2">
          <span className="px-4 py-1 rounded-full bg-[#0F0F0F] border border-white/10 inline-flex items-center gap-2 text-sm">
            <span className="text-lg">◎</span> FAQ'S
          </span>

          <h1 className="text-[6rem] font-medium leading-[1] mt-6">Answers</h1>

          <p className="text-gray-400 text-lg mt-5">
            Find answers to common questions about my design process, services
            etc...
          </p>

          {/* Image Box */}
          <div className="w-full h-[470px] bg-[#1B1B1B] rounded-3xl mt-10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200"
              className="w-full h-full object-cover grayscale"
              alt=""
            />
          </div>
        </div>

        {/* Right FAQ List */}
        <div className="w-1/2 flex flex-col gap-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 cursor-pointer transition-all"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg">{item.q}</h3>
                <Plus
                  className={`w-6 h-6 transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                />
              </div>

              {/* Dropdown */}
              {open === i && (
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
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
