"use client";

import TextReveal from "@/animations/TextAnimations/TextRevel";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { routeTheme, scrollTheme, logoTheme } = useTheme();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="relative">
      <div
        className={`fixed right-[-33rem] top-[50%] z-20 
        w-[70rem] h-[10vh] rotate-90 flex items-center 
        transition-all duration-700 ease-out
        ${scrollTheme || routeTheme}`}
      >
        <div className="relative flex w-full h-full items-center justify-between px-20">
          {/* LOGO */}
          <Link href="/" className="absolute left-44">
            <img
              src="/images/logo.png"
              alt="logo"
              className={`w-28 transition-all duration-700 ease-out ${logoTheme}`}
            />
          </Link>

          {/* NAV LINKS */}
          <div className="absolute right-[18vw] flex gap-3 uppercase text-[15px]">
            {navLinks.map((item, index) => (
              <Link key={index} href={item.href}>
                <TextReveal
                  hoverEffect
                  duration={0.5}
                  textLineHeight={0.7}
                  textHeight="0.8rem"
                >
                  {item.label}
                </TextReveal>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
