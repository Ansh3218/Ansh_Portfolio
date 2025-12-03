"use client";
import React, { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import LogoTranstion from "./SvgLogo/PageTransitionLogo";

const PageTransition = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const logoOverlayRef = useRef(null);
  const logoRef = useRef(null);
  const blockRef = useRef([]);
  const isTransitioning = useRef(false);

  // -------------------------
  // ✅ STEP 1: DEFINE FUNCTIONS FIRST
  // -------------------------

  const coverPage = (url) => {
    const tl = gsap.timeline({
      onComplete: () => router.push(url),
    });

    tl.to(blockRef.current, {
      scaleX: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
      transformOrigin: "left",
    })
      .set(logoOverlayRef.current, { opacity: 1 }, "-=0.2")
      .set(
        logoRef.current.querySelector("path"),
        {
          strokeDashoffset: logoRef.current
            .querySelector("path")
            .getTotalLength(),
          fill: "transparent",
        },
        "-=0.25"
      )
      .to(
        logoRef.current.querySelector("path"),
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(
        logoRef.current.querySelector("path"),
        {
          fill: "#e3e3d8",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(logoOverlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      });
  };

  const revealPage = () => {
    gsap.set(blockRef.current, {
      scaleX: 1,
      transformOrigin: "right",
    });

    gsap.to(blockRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
  };

  // -------------------------
  // ✅ STEP 2: NOW useEffect CAN CALL THEM
  // -------------------------

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;

      overlayRef.current.innerHTML = "";
      blockRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "block";
        overlayRef.current.appendChild(block);
        blockRef.current.push(block);
      }
    };

    // FIRST INIT
    createBlocks();

    gsap.set(blockRef.current, { scaleX: 0, transformOrigin: "left" });

    if (logoRef.current) {
      const path = logoRef.current.querySelector("path");
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: "transparent",
        });
      }
    }

    // ⭐ INITIAL REVEAL
    revealPage();

    const handleRouteChange = (url) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    };

    // Intercept all anchor links
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      const handler = (e) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const url = new URL(href).pathname;

        if (url !== pathname) {
          handleRouteChange(url);
        }
      };

      link.addEventListener("click", handler);
      link._handler = handler;
    });

    // CLEANUP
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", link._handler);
      });
    };
  }, [router, pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-screen h-screen flex pointer-events-none z-30"
      ></div>

      <div
        ref={logoOverlayRef}
        className="fixed top-0 left-0 w-screen h-screen z-[31] flex justify-center items-center bg-[#fff] pointer-events-none opacity-0"
      >
        <div className="logo-container w-[200px] h-[200px] flex justify-center items-center p-[20px]">
          <LogoTranstion ref={logoRef} />
        </div>
      </div>

      {children}
    </>
  );
};

export default PageTransition;
