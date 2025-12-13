"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const TextReveal = ({
  children,
  delay = 0.3,
  stagger = 0.18,
  duration = 2,
  hoverEffect = false,
  textHeight,
  textLineHeight,
  parentSelector = null,
}) => {
  const containerRef = useRef();
  const linesRef = useRef([]);

  // ⭐ Normal reveal animation
  const animate = () => {
    const tl = gsap.timeline({ delay });
    // Set initial state
    tl.set(linesRef.current, {
      y: (i) => {
        const h = linesRef.current[i]?.parentElement?.clientHeight || 0;
        return h;
      },
    });

    // Animate to final state
    tl.to(linesRef.current, {
      y: 0,
      duration,
      stagger,
      ease: "power4.out",
    });
  };

  // ⭐ Initial reveal animation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (linesRef.current.length > 0) {
        animate();
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [delay, stagger, duration]);

  // ⭐ Hover animation with COMPLETE CSS cloning
  // ⭐ Hover animation WITH optional parent trigger
  useEffect(() => {
    if (!hoverEffect || !containerRef.current) return;

    const container = containerRef.current;

    // ---> NEW: Find parent if parentSelector is provided
    let hoverTarget = container;

    if (parentSelector) {
      const parent = container.closest(parentSelector);
      if (parent) hoverTarget = parent;
    }

    const handleMouseEnter = () => {
      linesRef.current.forEach((line) => {
        if (!line) return;

        const parent = line.parentElement;
        if (!parent) return;

        const h = parent.clientHeight;

        // Create duplicate if not exists
        let duplicate = parent.querySelector(".duplicate-text");
        if (!duplicate) {
          duplicate = line.cloneNode(true);
          duplicate.classList.add("duplicate-text");

          const cs = window.getComputedStyle(line);

          duplicate.style.position = "absolute";
          duplicate.style.left = "0";
          duplicate.style.top = `${h}px`;
          duplicate.style.width = "100%";
          duplicate.style.fontSize = cs.fontSize;
          duplicate.style.fontWeight = cs.fontWeight;
          duplicate.style.fontFamily = cs.fontFamily;
          duplicate.style.color = cs.color;
          duplicate.style.lineHeight = cs.lineHeight;

          parent.appendChild(duplicate);
        }

        gsap.killTweensOf([line, duplicate]);

        gsap.set(line, { y: 0 });
        gsap.set(duplicate, { y: h });

        gsap.to(line, {
          y: -h,
          duration: 0.45,
          ease: "power3.inOut",
        });

        gsap.to(duplicate, {
          y: -h,
          duration: 0.55,
          ease: "power3.inOut",
        });
      });
    };

    const handleMouseLeave = () => {
      linesRef.current.forEach((line) => {
        if (!line) return;

        const parent = line.parentElement;
        if (!parent) return;

        const duplicate = parent.querySelector(".duplicate-text");
        const h = parent.clientHeight;

        gsap.killTweensOf([line, duplicate]);

        gsap.to(line, {
          y: 0,
          duration: 0.45,
          ease: "power3.inOut",
        });

        if (duplicate) {
          gsap.to(duplicate, {
            y: h,
            duration: 0.45,
            ease: "power3.inOut",
            onComplete: () => duplicate.remove(),
          });
        }
      });
    };

    hoverTarget.addEventListener("mouseenter", handleMouseEnter);
    hoverTarget.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hoverTarget.removeEventListener("mouseenter", handleMouseEnter);
      hoverTarget.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hoverEffect, parentSelector]);

  return (
    <div ref={containerRef}>
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <div
            key={i}
            className="reveal-line overflow-hidden relative"
            style={{
              height: textHeight,
              lineHeight: textLineHeight,
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div ref={(el) => (linesRef.current[i] = el)}>{child}</div>
          </div>
        ))
      ) : (
        <div
          className="reveal-line overflow-hidden relative"
          style={{
            height: textHeight,
            lineHeight: textLineHeight,
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div ref={(el) => (linesRef.current[0] = el)}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default TextReveal;
