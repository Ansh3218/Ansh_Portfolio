"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white/85 py-16">
      <div className="w-full px-14 mx-auto font-[manrope medium]">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-[#2C385E] text-lg mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl max-lg:text-7xl mb-6">
            Get in touch
          </h1>
          <p className="text-[#2C385E] text-xl w-[25%] max-md:w-full leading-relaxed">
            Get in touch to learn more about our automation platform and how we
            can help you achieve your business goals.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="w-full grid grid-cols-2 justify-between gap-28 mb-10">
          {/* LEFT SIDE CONTENT (Email, Phone, Address + Social) */}
          <div className="space-y-12">
            {/* Email Section (with hover underline animation) */}
            <div>
              <p className="text-[#2C385E] text-sm mb-3">Get in touch</p>

              <Link
                href="mailto:hello@framer.com"
                className="group flex items-center justify-between"
              >
                <div className="relative w-full">
                  <span className="text-xl transition-colors group-hover:text-gray-800">
                    hello@framer.com
                  </span>

                  {/* Underline animation */}
                  <span className="absolute left-0 -bottom-1 w-full h-[1px]"></span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>
              </Link>
            </div>

            {/* Phone */}
            <div>
              <p className="text-[#2C385E] text-sm mb-3">Phone</p>

              <div className="relative w-full group">
                <p className="text-xl">+00 000 00 00</p>

                {/* normal line */}
                <span className="absolute left-0 -bottom-1 w-full h-[1px] "></span>

                {/* animated line */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>

            {/* Address */}
            <div>
              <p className="text-[#2C385E] text-sm mb-3">Address</p>

              <div className="relative w-full group leading-relaxed">
                <p className="text-xl">
                  20510 General St. Unit 23 <br /> San Francisco
                </p>

                {/* normal line */}
                <span className="absolute left-0 -bottom-1 w-full h-[1px] "></span>

                {/* animated */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </div>
          <div className="">
            {/* SOCIAL MEDIA — moved here */}
            <div className="space-y-5 pt-10 w-full">
              {/* Twitter */}
              <a className="flex items-center justify-between py-2 group cursor-pointer w-[90%]">
                <div className="relative w-full">
                  <span className="text-xl transition-colors group-hover:text-gray-800">
                    Twitter
                  </span>
                  {/* base line */}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full "></span>
                  {/* animated line */}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 ml-4 transition" />
              </a>

              {/* Dribbble */}
              <a className="flex items-center justify-between py-2 group cursor-pointer w-[90%]">
                <div className="relative w-full">
                  <span className="text-xl group-hover:text-gray-800 transition-colors">
                    Dribbble
                  </span>
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full "></span>
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 ml-4 transition" />
              </a>

              {/* Instagram */}
              <a className="flex items-center justify-between py-2 group cursor-pointer w-[90%]">
                <div className="relative w-full">
                  <span className="text-xl group-hover:text-gray-800 transition-colors">
                    Instagram
                  </span>
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full "></span>
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 ml-4 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
