import React from "react";
import { profileData } from "../components/DummyData/DummyData";
import HeroSection from "./../components/HomeComponents/HeroSection";
import Stats from "./../components/HomeComponents/Stats";

const Home = () => {
  return (
    <div className="themeChange ">
      <HeroSection profileData={profileData} />
      <Stats />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
