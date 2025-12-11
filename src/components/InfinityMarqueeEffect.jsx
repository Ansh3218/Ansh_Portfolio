// InfiniteMarqueeEffect.jsx
"use client";

import React from "react";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Smartphone,
  Triangle,
  Hexagon,
  Zap,
  Database,
  Table,
  Figma,
  Send,
  Wind,
  BoxSelect,
  Layers,
} from "lucide-react";
import ScrollTextReveal from "./ScrollTextReveal";

function MarqueeRow({ items, direction = "left" }) {
  return (
    <div className="relative w-full overflow-hidden py-2">
      <div
        className={`flex ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {/* Triple duplicate for seamless infinite loop */}
        {[...items, ...items, ...items].map((skill, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-3 px-6 py-4 bg-black border border-white/10 rounded-full flex items-center gap-3 hover:bg-white/10 transition-all duration-300"
          >
            <skill.icon className="w-5 h-5 text-white/70" />
            <span className="text-white/80 text-sm whitespace-nowrap">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InfiniteMarqueeEffect() {
  const row1 = [
    { icon: Code2, label: "HTML" },
    { icon: Palette, label: "CSS" },
    { icon: Braces, label: "JavaScript" },
    { icon: Atom, label: "React.js" },
    { icon: Smartphone, label: "React Native" },
  ];

  const row2 = [
    { icon: Triangle, label: "Next.js" },
    { icon: Hexagon, label: "Node.js" },
    { icon: Zap, label: "Express.js" },
    { icon: Database, label: "MongoDB" },
    { icon: Table, label: "SQL" },
  ];

  const row3 = [
    { icon: Figma, label: "Figma" },
    { icon: Send, label: "Postman" },
    { icon: Wind, label: "TailwindCSS" },
    { icon: BoxSelect, label: "Bootstrap" },
    { icon: Layers, label: "Full Stack" },
  ];

  return (
    <div>
      <ScrollTextReveal triggerPercent={90} stagger={2}>
        <h1 className="text-center text-6xl text-[#B2B2B2] py-10">Skills</h1>
      </ScrollTextReveal>

      <div className="w-full mt-20 flex flex-col items-center justify-center gap-10 pb-10">
        {/* 🖥 DESKTOP (680px up) → only 2 rows */}
        <div className="hidden md:flex flex-col gap-10 w-full">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>

        {/* 📱 MOBILE (680px down) → 3 rows */}
        <div className="flex md:hidden flex-col gap-10 w-full">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
          <MarqueeRow items={row3} direction="left" />
        </div>
      </div>
    </div>
  );
}
