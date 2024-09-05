import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectImageGallery from "./ProjectImageGallery";

const ProjectCard = ({ project }) => {
  return (
    <div className="cards flex justify-center justify-between gap-28">
      <div className="card font flex-col items-start overflow-hidden rounded-lg shadow-lg md:flex-row md:justify-between">
        <div className=" mt-4 md:mt-0 md:pl-8">
          <h2 className=" textColor  size-20 animate-bounce text-5xl font-bold">
            {project.projectNumber}
          </h2>
          <h3 className="text-2xl font-semibold text-teal-500 dark:text-teal-200">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
          <p className="text-green-500">{project.technologies.join(", ")}</p>
          <div className="mt-4 flex space-x-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="text-2xl text-gray-800 transition hover:text-blue-500 dark:text-white" />
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-800 transition hover:text-blue-500 dark:text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 ">
        <ProjectImageGallery images={project.images} />
      </div>
    </div>
  );
};

export default ProjectCard;
