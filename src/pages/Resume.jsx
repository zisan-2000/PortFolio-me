// src/pages/Resume.jsx

import React, { useState } from "react";
import {
  aboutMeData,
  educationData,
  experienceData,
  skillsData,
} from "../components/DummyData/DummyData";
import AboutMe from "../components/Resume/AboutMe";
import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";

function Resume() {
  const [activeTab, setActiveTab] = useState("Experience");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Experience":
        return (
          <>
            <h2 className="font mb-4 text-3xl font-bold">My Experience</h2>
            <Experience data={experienceData} />
          </>
        );
      case "Education":
        return (
          <>
            <h2 className="font mb-4 text-3xl font-bold">My Education</h2>
            <Education data={educationData} />
          </>
        );
      case "Skills":
        return (
          <>
            <h2 className="font mb-4 text-3xl font-bold">My Skills</h2>
            <Skills data={skillsData} />
          </>
        );
      case "AboutMe":
        return (
          <>
            <h2 className="font mb-4 text-3xl font-bold">About Me</h2>
            <AboutMe data={aboutMeData} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="themeChange  px-4 py-24">
      <div className=" hero textColor">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h1 className="text-5xl">Why Hire Me? </h1>
            <button
              className={`w-full p-4 text-left ${
                activeTab === "Experience" ? "button" : ""
              }`}
              onClick={() => setActiveTab("Experience")}
            >
              Experience
            </button>
            <button
              className={`w-full p-4 text-left  ${
                activeTab === "Education" ? "button" : ""
              }`}
              onClick={() => setActiveTab("Education")}
            >
              Education
            </button>
            <button
              className={`w-full p-4 text-left ${
                activeTab === "Skills" ? "button" : ""
              }`}
              onClick={() => setActiveTab("Skills")}
            >
              Skills
            </button>
            <button
              className={`w-full p-4 text-left ${
                activeTab === "AboutMe" ? "button" : ""
              }`}
              onClick={() => setActiveTab("AboutMe")}
            >
              About Me
            </button>
          </div>
          <div className="col-span-3 ">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
