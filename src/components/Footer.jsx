"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white/85 flex flex-col">
      {/* BIG NAME */}
      <div className="text-nowrap text-[22vw] leading-[24vw] font-bold font-[font] text-center max-md:text-[22vw] max-md:leading-[28vw] max-sm:text-[22vw] max-sm:leading-[22vw]">
        MR ANSH
      </div>

      {/* FOOTER TEXT ROW */}
      <div className="flex justify-between items-center px-[2rem] py-6 text-lg font-[font] max-lg:px-[1.5rem] max-md:px-[1rem] max-sm:flex-row max-sm:gap-3 max-sm:text-base max-sm:py-5">
        {/* LEFT SIDE */}
        <span>
          <p>© 2025</p>
        </span>

        {/* RIGHT SIDE */}
        <div className="flex gap-x-16 pr-10 max-lg:gap-x-10 max-lg:pr-5 max-md:gap-x-6 max-md:pr-3 max-sm:flex-row max-sm:text-[12px] max-sm:gap-x-5 max-sm:text-center max-sm:pr-0">
          <p className="text-nowrap">All rights reserved</p>
          <p className="break-all text-nowrap">cawithcode3218@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
