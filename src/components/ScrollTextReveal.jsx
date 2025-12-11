"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTextReveal({
  children,
  duration = 1,
  stagger = 1,
  y = 30, // 👈 fixed slide amount
  triggerPercent = 10, // 👈 screen ke % pe animation start hoga
}) {
  const el = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current.children,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: el.current,
            start: `top ${triggerPercent}%`,
            // 👆 jab element ka TOP screen ke selected % pe aaye tab animate
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={el} className="overflow-hidden">
      {children}
    </div>
  );
}
