"use client";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-auto bg-white/85 flex flex-col">
        <div className="text-[22vw] font-[font] leading-[24vw] font-bold text-center h-auto">
          <h1>MR ANSH</h1>
        </div>
        <div className="flex flex-row justify-between px-[2rem] text-lg font-[font]">
          <span>
            <p>© 2025</p>
          </span>
          <span className="flex gap-x-16 pr-10">
            <p>All rights reserved</p>
            <p>cawithcode3218@gmail.com</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
