import React, { useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Typed from "typed.js";
import Button from "./../Button/Button";
import ProfileImage from "./ProfileImage";

const HeroSection = ({ profileData }) => {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: [profileData.name],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [profileData.name]);

  return (
    <section className="hero themeChange grid grid-cols-1 items-center gap-8 md:grid-cols-12">
      <div className="order-1 flex justify-center md:order-2 md:col-span-5 md:justify-end">
        <ProfileImage image={profileData.image} />
      </div>

      <div className="textColor order-2 flex-1 space-y-6 md:order-1 md:col-span-7">
        <p className="font-mono text-3xl font-light">{profileData.title}</p>
        <h1 className="text-5xl font-bold md:text-7xl">
          Hello I'm{" "}
          <span className="text-green-500" ref={typedElementRef}></span>
        </h1>
        <p className="text-justify text-lg font-light md:text-xl">
          {profileData.description}
        </p>
        <div className="flex items-center space-x-20 md:space-x-80">
          <Button className="uppercase" text="Download CV" />

          <div className="social-icons mt-4 flex space-x-4 ">
            <a
              href="https://www.facebook.com/profile.php?id=100076300015265"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} className="textColor" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-zulfiker-hossain-zisan-ba7089187/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="textColor" />
            </a>
            <a
              href="https://github.com/zisan-2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="textColor" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
