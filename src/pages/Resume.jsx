import React, { useState } from "react";
import { motion } from "framer-motion";
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
            <motion.h2
              className="font mb-4 text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              My Experience
            </motion.h2>
            <Experience data={experienceData} />
          </>
        );
      case "Education":
        return (
          <>
            <motion.h2
              className="font mb-4 text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              My Education
            </motion.h2>
            <Education data={educationData} />
          </>
        );
      case "Skills":
        return (
          <>
            <motion.h2
              className="font mb-4 text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              My Skills
            </motion.h2>
            <Skills data={skillsData} />
          </>
        );
      case "AboutMe":
        return (
          <>
            <motion.h2
              className="font mb-4 text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <AboutMe data={aboutMeData} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="themeChange px-4 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero textColor">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <motion.div
            className="space-y-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-5xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Why Hire Me?
            </motion.h1>
            <motion.button
              className={`w-full p-4 text-left ${
                activeTab === "Experience" ? "button" : ""
              }`}
              onClick={() => setActiveTab("Experience")}
              whileHover={{ scale: 1.05 }}
            >
              Experience
            </motion.button>
            <motion.button
              className={`w-full p-4 text-left ${
                activeTab === "Education" ? "button" : ""
              }`}
              onClick={() => setActiveTab("Education")}
              whileHover={{ scale: 1.05 }}
            >
              Education
            </motion.button>
            <motion.button
              className={`w-full p-4 text-left ${
                activeTab === "Skills" ? "button" : ""
              }`}
              onClick={() => setActiveTab("Skills")}
              whileHover={{ scale: 1.05 }}
            >
              Skills
            </motion.button>
            <motion.button
              className={`w-full p-4 text-left ${
                activeTab === "AboutMe" ? "button" : ""
              }`}
              onClick={() => setActiveTab("AboutMe")}
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.button>
          </motion.div>
          <motion.div
            className="col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {renderTabContent()}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
