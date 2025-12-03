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
  useEffect(() => {
    if (!hoverEffect || !containerRef.current) return;

    const container = containerRef.current;

    const handleMouseEnter = () => {
      linesRef.current.forEach((line) => {
        if (!line) return;

        const parent = line.parentElement;
        if (!parent) return;

        const h = parent.clientHeight;

        // 👉 Check if duplicate already exists
        let duplicate = parent.querySelector(".duplicate-text");

        // Agar nahi hai to create karo with COMPLETE cloning
        if (!duplicate) {
          // ✅ Clone the entire element with all styles
          duplicate = line.cloneNode(true);
          duplicate.classList.add("duplicate-text");

          // ✅ Get computed styles from original
          const computedStyles = window.getComputedStyle(line);

          // ✅ Copy critical styles explicitly
          duplicate.style.position = "absolute";
          duplicate.style.left = "0";
          duplicate.style.width = "100%";
          duplicate.style.top = `${h}px`;

          // ✅ Preserve original styling
          duplicate.style.fontSize = computedStyles.fontSize;
          duplicate.style.fontWeight = computedStyles.fontWeight;
          duplicate.style.fontFamily = computedStyles.fontFamily;
          duplicate.style.color = computedStyles.color;
          duplicate.style.letterSpacing = computedStyles.letterSpacing;
          duplicate.style.textTransform = computedStyles.textTransform;
          duplicate.style.lineHeight =
            computedStyles.lineHeight || textLineHeight || "normal";

          // ✅ Copy background gradients and effects
          if (computedStyles.backgroundImage !== "none") {
            duplicate.style.backgroundImage = computedStyles.backgroundImage;
            duplicate.style.backgroundClip = computedStyles.backgroundClip;
            duplicate.style.webkitBackgroundClip =
              computedStyles.webkitBackgroundClip;
            duplicate.style.webkitTextFillColor =
              computedStyles.webkitTextFillColor;
          }

          parent.appendChild(duplicate);
        }

        // 👉 Purane animations kill karo
        gsap.killTweensOf([line, duplicate]);

        // 👉 Reset positions before new hover
        gsap.set(line, { y: 0 });
        gsap.set(duplicate, { y: h });

        // Original line up
        gsap.to(line, {
          y: -h,
          duration: 0.45,
          ease: "power3.inOut",
        });

        // Duplicate move through
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

        // 👉 Purane tweens clear karo
        gsap.killTweensOf([line, duplicate]);

        // Line ko wapas original
        gsap.to(line, {
          y: 0,
          duration: 0.45,
          ease: "power3.inOut",
        });

        // Duplicate ko neeche le jao & remove
        if (duplicate) {
          gsap.to(duplicate, {
            y: h,
            duration: 0.45,
            ease: "power3.inOut",
            onComplete: () => {
              duplicate.remove();
            },
          });
        }
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);

      // Cleanup: koi duplicate bach na jaye
      linesRef.current.forEach((line) => {
        if (!line) return;
        const parent = line.parentElement;
        if (!parent) return;
        const duplicate = parent.querySelector(".duplicate-text");
        if (duplicate) duplicate.remove();
      });
    };
  }, [hoverEffect, textLineHeight]);

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
