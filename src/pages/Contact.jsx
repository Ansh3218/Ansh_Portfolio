"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollTextReveal from "@/components/ScrollTextReveal";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white/85 py-16 max-lg:py-14 max-md:py-10 max-sm:py-8">
      <div className="w-full px-14 mx-auto font-[manrope medium] max-xl:px-10 max-lg:px-8 max-md:px-6 max-sm:px-4 max-sm:pt-[5rem]">
        {/* Header Section */}
        <div className="mb-16 max-lg:mb-12 max-md:mb-10">
          <ScrollTextReveal triggerPercent={60} stagger={2}>
            <h1 className="text-5xl md:text-6xl max-lg:text-7xl max-md:text-5xl max-sm:text-5xl mb-6 leading-tight">
              Get in touch
            </h1>
          </ScrollTextReveal>

          <ScrollTextReveal triggerPercent={50} stagger={2}>
            <p className="text-[#2C385E] text-lg w-[25%] leading-relaxed max-lg:w-[40%] max-md:w-[60%] max-sm:w-full max-sm:text-base">
              Get in touch to learn more about our automation platform and how
              we can help you achieve your business goals.
            </p>
          </ScrollTextReveal>
        </div>

        {/* GRID SECTION */}
        <div className="w-full items-end grid grid-cols-2 gap-28 mb-10 max-xl:gap-20 max-lg:gap-14 max-md:gap-12 max-md:grid-cols-1">
          {/* LEFT SIDE */}
          <div className="space-y-12 max-md:space-y-10 max-sm:space-y-8">
            {/* Email */}
            <div>
              <p className="text-[#2C385E] text-sm mb-3 max-sm:text-xs">
                Get in touch
              </p>

              <a
                href="mailto:cawithcode3218@gmail.com"
                className="group flex items-center justify-between"
              >
                <div className="relative w-full">
                  <span className="text-xl max-sm:text-lg transition-colors group-hover:text-gray-800">
                    cawithcode3218@gmail.com
                  </span>

                  <span className="absolute left-0 -bottom-1 w-full h-[1px]"></span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-[#2C385E] text-sm mb-3 max-sm:text-xs">
                Phone
              </p>

              <div className="relative w-full group cursor-pointer">
                <p className="text-xl max-sm:text-lg">+91 8218429896</p>
                <span className="absolute left-0 -bottom-1 w-full h-[1px]"></span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>

            {/* Address */}
            <div>
              <p className="text-[#2C385E]  text-sm mb-3 max-sm:text-xs">
                Address
              </p>

              <a
                href="https://www.google.com/maps?q=Govind+Nagar,+Moradabad,+Uttar+Pradesh,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full group leading-relaxed cursor-pointer text-black"
              >
                <p className="text-xl max-sm:text-lg">
                  India, Uttar Pradesh
                  <br />
                  Govind Nagar, Moradabad
                </p>
                <span className="absolute left-0 -bottom-1 w-full h-[1px] pointer-events-none"></span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full pointer-events-none"></span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE SOCIAL LINKS */}
          <div className="space-y-5 pt-10 w-full max-md:pt-0 max-sm:space-y-4">
            {/* Social Links with URLs */}
            {[
              {
                label: "Linkedin",
                url: "https://www.linkedin.com/in/ansh-chauhan-4b2b46271/",
              },
              { label: "Github", url: "https://github.com/Ansh3218" },
              {
                label: "Instagram",
                url: "https://www.instagram.com/abye_anshu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 group cursor-pointer w-[90%] max-md:w-full"
              >
                <div className="relative w-full">
                  <span className="text-xl max-sm:text-lg group-hover:text-gray-800 transition-colors">
                    {item.label}
                  </span>

                  <span className="absolute left-0 -bottom-1 h-[1px] w-full"></span>
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>

                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 ml-4 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
