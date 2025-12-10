import React from "react";
import ProjectCards from "./ProjectCards";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import MiniProjectCards from "./ProjectCards";

const RecentWork = () => {
  return (
    <>
      <div className="w-full h-auto min-h-screen">
        <div className="w-full">
          <h1 className="pl-[3rem] pb-[3rem] pt-[10rem] text-3xl font-[font] text-gray-700 flex items-center gap-x-3">
            Recent Works <IoArrowDownCircleOutline />
          </h1>
        </div>
        <div className="">
          <MiniProjectCards />
        </div>
      </div>
    </>
  );
};

export default RecentWork;
