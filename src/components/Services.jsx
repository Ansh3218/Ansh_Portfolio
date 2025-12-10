"use client";
import React from "react";
import ShinyText from "./ShinyText";
import { TbApi, TbBrandAdobePremier, TbBrandFigma, TbBrandGithubCopilot, TbBrandReactNative, TbDeviceDesktopCode, TbDeviceMobileCode } from "react-icons/tb";
import { AnimatedButton } from "./Buttons";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="h-auto text-gray-700">
      {/* Main Content */}
      <div className="px-20 py-24 grid grid-cols-2 items-start max-lg:grid-cols-2 gap-16 items-center max-w-[1600px] mx-auto">
        {/* Left Content */}
        <div className="space-y-12">
          {/* Heading */}
          <h1 className="text-8xl font-[Poppins]">Services</h1>

          {/* Description */}
          <p className="text-xl leading-relaxed max-w-xl">
            Helping businesses grow with modern web & app solutions that are
            fast, scalable, and beautifully designed
          </p>

          {/* Service Tags */}
          <div className="service border-t-2 border-[#484848] my-5 grid grid-cols-2 gap-x-5 gap-y-10 pt-14 font-medium">
            <li className="bg-black text-[15px] py-3 rounded-lg flex items-center justify-center text-nowrap">
              <ShinyText text="Custom MERN Web Applications" speed={3} />
            </li>

            <li className="bg-black text-[15px] py-3 rounded-lg flex items-center justify-center text-nowrap">
              <ShinyText
                text="High-Performance Responsive Websites"
                speed={3}
              />
            </li>

            <li className="bg-black text-[15px] py-3 rounded-lg flex items-center justify-center text-nowrap">
              <ShinyText
                text="Cross-Platform Mobile Apps (React Native)"
                speed={3}
              />
            </li>

            <li className="bg-black text-[15px] py-3 rounded-lg flex items-center justify-center text-nowrap">
              <ShinyText
                text="Modern UI Engineering & Interactions"
                speed={3}
              />
            </li>

            <li className="bg-black text-[15px] py-3 rounded-lg flex items-center justify-center text-nowrap">
              <ShinyText
                text="Figma Wireframes & Product Prototypes"
                speed={3}
              />
            </li>

            <li className="bg-black text-[15px] py-3 rounded-lg flex items-center justify-center text-nowrap">
              <ShinyText text="Smart API Integration & App Logic" speed={3} />
            </li>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-8">
            <Link
              href="https://wa.me/918218429896?text=Hi%20Aniket%20bhai%2C%20I%20want%20a%20website"
              className=""
            >
              <AnimatedButton
                rounded="30px"
                px="2rem"
                className="text-[15px]"
                py="0.8rem"
              >
                Book a Free Call
              </AnimatedButton>
            </Link>
            <Link href={"/projects"}>
              <AnimatedButton
                rounded="30px"
                px="2rem"
                className="text-[15px]"
                py="0.8rem"
              >
                See Projects
              </AnimatedButton>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative pt-6">
          <div className="aspect-[4/3] bg-gray-800 rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&h=900&fit=crop"
              alt="Product packaging design"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const ServiceDetails = () => {
  const service = [
    {
      title: "MERN Full-Stack Development",
      icon: <TbBrandGithubCopilot />,
      Desc: "Building secure, scalable, and high-performance web applications using MongoDB, Express, React, and Node.js—crafted for speed, reliability, and business growth.",
    },

    {
      title: "Responsive Website Development",
      icon: <TbDeviceDesktopCode />,
      Desc: "Creating seamless, mobile-friendly websites that load fast, look modern, and deliver a smooth user experience across all screen sizes and devices.",
    },

    {
      title: "React Native App Development",
      icon: <TbBrandReactNative />,
      Desc: "Developing cross-platform mobile apps for Android and iOS with clean UI, optimized performance, and powerful functionality tailored to your audience.",
    },

    {
      title: "UI Engineering & Modern Frontend",
      icon: <TbDeviceMobileCode />,
      Desc: "Building interactive, visually appealing interfaces with modern front-end technologies—ensuring clarity, usability, and delightful user experiences.",
    },

    {
      title: "Figma UI Design & Prototyping",
      icon: <TbBrandFigma />,
      Desc: "Designing clean, intuitive UI layouts, wireframes, and clickable prototypes that help visualize product flow and elevate overall product experience.",
    },

    {
      title: "API Integration & App Logic",
      icon: <TbApi />,
      Desc: "Integrating smart, efficient backend APIs with robust logic—ensuring your web & mobile apps run smoothly, reliably, and securely.",
    },

    // ⭐ FULL WIDTH STATS BOX
    {
      stats: true,
      data: [
        { count: "40+", label: "Projects completed." },
        { count: "98%", label: "Client satisfaction rate." },
        { count: "11+ mo", label: "Experience in development." },
      ],
    },
  ];

  return (
    <>
      <div className="w-full rounded-t-[5rem] bg-black py-[5rem] h-auto px-[5rem] text-white">
        <div className="grid grid-cols-2 justify-items-center gap-5 m-auto">
          {service.map((services, idx) => (
            <div
              key={idx}
              className={`
          rounded-3xl bg-[#0D0D0D] text-2xl text-gray-100 p-5
          ${
            services.stats
              ? "col-span-2 w-full h-[15rem]"
              : "w-[45vw] h-[11rem]"
          }
        `}
            >
              {/* 👉 STATS BOX (5th item) */}
              {services.stats ? (
                <div className="w-full h-full flex items-center justify-evenly text-center font-[font]">
                  {services.data.map((item, i) => (
                    <div
                      key={i}
                      className="flex border-r-2 px-5 flex-col gap-1"
                    >
                      <h1 className="text-5xl font-bold">{item.count}</h1>
                      <p className="text-gray-400 text-[15px]">{item.label}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {/* 👉 Normal Service Cards */}
                  <div className="flex items-center gap-x-2 border-b-2 border-gray-500 my-3 pb-2">
                    <h1 className="text-2xl">{services.title}</h1>
                    <h1>{services.icon}</h1>
                  </div>

                  <p className="text-gray-300 text-[14px] font-[font]">
                    {services.Desc}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
