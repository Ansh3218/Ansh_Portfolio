"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const lastSectionRef = useRef("/");
  const transitionTimeoutRef = useRef(null);
  const pathname = usePathname(); // Get current route

  // SECTION THEMES
  const navThemes = {
    "/": "bg-[#979797] text-black",
    "/about": "bg-[#212121] text-white",
    "/projects": "bg-white text-black",
    "/contact": "bg-[#212121] text-[#E6E6E6]",
  };

  const logoThemes = {
    "/": "invert-0",
    "/about": "invert",
    "/projects": "invert-0",
    "/contact": "invert",
  };

  // UPDATE THEME ON ROUTE CHANGE
  useEffect(() => {
    if (pathname && navThemes[pathname]) {
      setActiveSection(pathname);
      lastSectionRef.current = pathname;
      // Reset scroll to top on route change
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // SCROLL DETECTOR
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // INTERSECTION OBSERVER - DEBOUNCED & STABLE
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Clear existing timeout
        if (transitionTimeoutRef.current) {
          clearTimeout(transitionTimeoutRef.current);
        }

        // Find the most visible section
        let maxVisibility = 0;
        let mostVisibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
            maxVisibility = entry.intersectionRatio;
            mostVisibleSection = entry.target.getAttribute("data-section");
          }
        });

        // Only update if we have a clear winner and it's different
        if (
          mostVisibleSection &&
          mostVisibleSection !== lastSectionRef.current
        ) {
          // Debounce the update
          transitionTimeoutRef.current = setTimeout(() => {
            lastSectionRef.current = mostVisibleSection;
            setActiveSection(mostVisibleSection);
          }, 100); // 100ms debounce
        }
      },
      {
        threshold: [0.3, 0.5, 0.7], // Reduced thresholds for stability
        rootMargin: "-15% 0px -15% 0px", // Increased margin for better detection
      }
    );

    // Observe all sections
    sections.forEach((section) => observer.observe(section));

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const value = {
    isScrolled,
    activeSection,
    routeTheme: navThemes[activeSection] || "",
    scrollTheme: isScrolled
      ? `${navThemes[activeSection]} shadow-lg transition-all duration-300`
      : "",
    logoTheme: logoThemes[activeSection] || "",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
