"use client";
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "@/context/ThemeContext";

const GridMotion = ({ items = [], gradientColor = "black" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(0);
  const { activeSection } = useTheme(); // ✅ Get active section from context

  const themes = {
    "/": { bg: "gray", box: "#212121" },
    "/about": { bg: "black", box: "#212121" },
    "/projects": { bg: "white", box: "#E6E6E6" },
    "/services": { bg: "black", box: "#212121" },
    "/contact": { bg: "#E6E6E6", box: "#212121" },
    "/footer": { bg: "black", box: "#212121" },
  };

  const theme = themes[activeSection] || themes["/"]; // ✅ Use activeSection instead of pathname

  useEffect(() => {
    mouseXRef.current = window.innerWidth / 2;
  }, []);

  const totalItems = 28;
  const defaultItems = Array.from(
    { length: totalItems },
    (_, i) => `Item ${i + 1}`
  );
  const combinedItems = useMemo(() => {
    return items.length > 0 ? items.slice(0, totalItems) : defaultItems;
  }, [items]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 400;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const direction = index % 2 === 0 ? 1 : -1;
        const moveAmount =
          ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
            maxMoveAmount / 2) *
          direction;

        gsap.to(row, {
          x: moveAmount,
          duration:
            baseDuration + inertiaFactors[index % inertiaFactors.length],
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    const removeLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeLoop();
    };
  }, []);

  return (
    <div ref={gridRef} className="h-full w-full overflow-hidden">
      <section
        className="w-full h-screen overflow-hidden relative flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ background: theme.bg }}
      >
        <div className="w-[150vw] h-[150vh] grid grid-rows-4 grid-cols-1 rotate-[-15deg] gap-4 relative z-[2]">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-7 gap-4"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
              style={{ willChange: "transform" }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                const isImage =
                  typeof content === "string" &&
                  (content.startsWith("http") || content.startsWith("/"));

                return (
                  <div key={itemIndex} className="relative">
                    <div
                      className="relative w-full h-full overflow-hidden rounded-[12px] transition-all duration-300 transform will-change-transform hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_15px_45px_rgba(0,0,0,0.7)]"
                      style={{ background: theme.box }}
                    ></div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GridMotion;
