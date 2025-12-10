"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const lastSectionRef = useRef("/");
  const transitionTimeoutRef = useRef(null);
  const observerRef = useRef(null);
  const pathname = usePathname();

  // SECTION THEMES
  const navThemes = {
    "/": "bg-[#979797] text-black",
    "/about": "bg-[#212121] text-white",
    "/projects": "bg-white text-black",
    "/services": "bg-[#212121] text-[#E6E6E6]",
    "/contact": "bg-white text-black",
  };

  const logoThemes = {
    "/": "invert-0",
    "/about": "invert",
    "/projects": "invert-0",
    "/services": "invert",
    "/contact": "invert-0",
  };

  // HELPER: Get theme based on pathname
  const getThemeForPath = (path) => {
    if (path.startsWith("/projects/")) {
      return "/projects";
    }
    return path;
  };

  // UPDATE THEME ON ROUTE CHANGE
  useEffect(() => {
    const themeKey = getThemeForPath(pathname);

    if (navThemes[themeKey]) {
      setActiveSection(themeKey);
      lastSectionRef.current = themeKey;
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

  // INTERSECTION OBSERVER - FIXED FOR ROUTE CHANGES
  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Setup observer with delay for DOM readiness
    const setupObserver = () => {
      const sections = document.querySelectorAll("section[data-section]");

      if (sections.length === 0) {
        console.log("No sections found, retrying...");
        return;
      }

      console.log(`Found ${sections.length} sections`);

      const observer = new IntersectionObserver(
        (entries) => {
          if (transitionTimeoutRef.current) {
            clearTimeout(transitionTimeoutRef.current);
          }

          let maxVisibility = 0;
          let mostVisibleSection = null;

          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              entry.intersectionRatio > maxVisibility
            ) {
              maxVisibility = entry.intersectionRatio;
              mostVisibleSection = entry.target.getAttribute("data-section");
            }
          });

          if (
            mostVisibleSection &&
            mostVisibleSection !== lastSectionRef.current
          ) {
            transitionTimeoutRef.current = setTimeout(() => {
              lastSectionRef.current = mostVisibleSection;
              setActiveSection(mostVisibleSection);
              console.log("Active section changed to:", mostVisibleSection);
            }, 100);
          }
        },
        {
          threshold: [0.3, 0.5, 0.7],
          rootMargin: "-15% 0px -15% 0px",
        }
      );

      sections.forEach((section) => observer.observe(section));
      observerRef.current = observer;
    };

    // Wait for DOM to be ready
    const timeoutId = setTimeout(setupObserver, 150);

    return () => {
      clearTimeout(timeoutId);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [pathname]);

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
