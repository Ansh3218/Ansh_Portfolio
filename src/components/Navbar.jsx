"use client";
import { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import TextReveal from "@/animations/TextAnimations/TextRevel";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { routeTheme, scrollTheme, logoTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      {/* Desktop Navbar - Rotated Design (hidden on mobile) */}
      <div
        className={`hidden md:block fixed right-[-33rem] top-[50%] z-20 
        w-[70rem] h-[10vh] rotate-90 
        transition-all duration-700 ease-out
        ${scrollTheme || routeTheme}`}
      >
        <div className="relative flex w-full h-full items-center justify-between px-20">
          {/* LOGO */}
          <Link href="/" className="absolute left-[12rem]">
            <img
              src="/images/logo.png"
              alt="logo"
              className={`w-28 transition-all duration-700 ease-out ${logoTheme}`}
            />
          </Link>

          {/* NAV LINKS */}
          <div className="absolute right-[18rem] flex gap-3 uppercase text-[15px]">
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

      {/* Mobile Navbar (visible below 768px) */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrollTheme || routeTheme
        }`}
      >
        <div className="flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className={`w-20 h-auto transition-all duration-700 ease-out ${logoTheme}`}
            />
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-3xl transition-colors duration-700"
            aria-label="Toggle menu"
          >
            <RiMenuFill className="cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } ${scrollTheme || routeTheme}`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-4xl transition-colors duration-700"
          aria-label="Close menu"
        >
          <RiCloseFill className="hover:text-red-500 cursor-pointer transition-all duration-500" />
        </button>

        {/* Menu Links */}
        <div className="flex flex-col max-sm:pl-[2rem] pl-[5rem] justify-center h-full gap-8 uppercase text-7xl font-medium">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={toggleMenu}
              className={`transition-all duration-300 hover:scale-110 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
