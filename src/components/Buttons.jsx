"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export const AnimatedButton = ({
  children,
  href,
  width = "auto",
  height = "auto",
  bgColor = "#000000",
  textColor = "#ffffff",
  rounded = "5px",
  px = "20px",
  py = "12px",
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const duplicateRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    let duplicate = duplicateRef.current;

    if (!button || !text) return;

    const handleMouseEnter = () => {
      const textHeight = text.offsetHeight;

      // Create duplicate if not exists
      if (!duplicate) {
        duplicate = document.createElement("div");
        duplicate.textContent = text.textContent;
        duplicate.style.position = "absolute";
        duplicate.style.left = "0";
        duplicate.style.top = "0";
        duplicate.style.width = "100%";
        duplicate.style.height = "100%";
        duplicate.style.display = "flex";
        duplicate.style.alignItems = "center";
        duplicate.style.transform = "translateY(100%)";
        duplicate.style.willChange = "transform";
        duplicate.style.justifyContent = "center";
        duplicate.style.color = textColor;
        duplicate.style.pointerEvents = "none";
        duplicate.style.zIndex = "1";

        text.parentElement.appendChild(duplicate);
        duplicateRef.current = duplicate;
      }

      // Kill previous animations
      gsap.killTweensOf([text, duplicate]);

      // Set initial positions
      gsap.set(text, { y: 0 });
      gsap.set(duplicate, { y: textHeight - 6 });

      // Animate original text up
      gsap.to(text, {
        y: -textHeight,
        duration: 0.5,
        ease: "power3.inOut",
      });

      // Animate duplicate text from bottom
      gsap.to(duplicate, {
        y: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    };

    const handleMouseLeave = () => {
      const textHeight = text.offsetHeight;

      if (!duplicate) return;

      // Kill previous animations
      gsap.killTweensOf([text, duplicate]);

      // Animate original text back to center
      gsap.to(text, {
        y: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });

      // Animate duplicate text down
      gsap.to(duplicate, {
        y: textHeight,
        duration: 0.5,
        ease: "power3.inOut",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      if (duplicate && duplicate.parentElement) {
        duplicate.remove();
      }
    };
  }, [textColor]);

  const buttonStyle = {
    display: "inline-block",
    width,
    height,
    padding: `${py} ${px}`,
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: rounded,
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    textDecoration: "none",
  };

  const textWrapperStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden", // ★ FIX 1
  };

  const textStyle = {
    position: "relative",
    zIndex: 1,
  };

  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        target={target}
        rel={rel}
        style={buttonStyle}
        className={className}
      >
        <div style={textWrapperStyle}>
          <span ref={textRef} style={textStyle}>
            {children}
          </span>
        </div>
      </a>
    );
  }

  return (
    <button ref={buttonRef} style={buttonStyle} className={className}>
      <div style={textWrapperStyle}>
        <span ref={textRef} style={textStyle} className="overflow-hidden">
          {children}
        </span>
      </div>
    </button>
  );
};
