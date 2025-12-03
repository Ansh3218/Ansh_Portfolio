import React from "react";
import { AnimatedButton } from "./Buttons";

const ProjectsDetails = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="">
            <h2>Ansh</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              numquam quis quisquam excepturi, cumque iure consectetur fuga
              corporis pariatur! Eum.
            </p>
            <AnimatedButton href={""}>PREVIEW</AnimatedButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsDetails;
