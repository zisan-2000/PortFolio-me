import React, { useState } from "react";
import { projectData } from "../components/DummyData/DummyData";
import ProjectCard from "../components/Projects/ProjectCard";

const ProjectPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="themeChange min-h-screen ">
      <section className=" hero font">
        <h1 className="textColor mb-8 text-center text-5xl font-bold">
          Projects
        </h1>
        <div className="space-y-12">
          <ProjectCard project={projectData[currentIndex]} />
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button onClick={handlePrev} className="button">
            Prev
          </button>
          <button onClick={handleNext} className="button">
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
