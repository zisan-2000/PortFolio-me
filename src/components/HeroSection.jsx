import React, { useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"; // React Icons Import
import Typed from "typed.js";
import Button from "./Button";
import ProfileImage from "./ProfileImage";

const HeroSection = () => {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: ["Md. Zulfiker Hossain"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero themeChange grid grid-cols-1 items-center gap-8 md:grid-cols-12">
      {/* Profile Image Section for Small Devices */}
      <div className="order-1 flex justify-center md:order-2 md:col-span-5 md:justify-end">
        <ProfileImage />
      </div>

      {/* Text Section */}
      <div className="textColor order-2 flex-1 space-y-6 md:order-1 md:col-span-7">
        <p className="font-mono text-3xl font-light">
          Junior Software Engineer
        </p>
        <h1 className="text-5xl font-bold md:text-7xl">
          Hello I'm{" "}
          <span className="text-green-500" ref={typedElementRef}></span>
        </h1>
        <p className="text-justify text-lg font-light md:text-xl">
          As a Junior Software Engineer at Birds of Eden/Adon Venture General
          Trading LLC, I specialize in building robust and efficient web
          applications using React Js and Tailwind CSS. My work involves
          creating dynamic and responsive user interfaces that are both visually
          appealing and highly functional. In addition to front-end development,
          I am also experienced in backend development using Django Rest
          Framework, where I focus on building scalable and secure APIs. My
          passion for coding drives me to continually improve and expand my
          skill set, ensuring that I deliver high-quality solutions that meet
          the needs of users and clients alike.
        </p>
        <div className="flex items-center space-x-20 md:space-x-80">
          <Button className="uppercase" text="Download CV" />

          <div className="social-icons mt-4 flex space-x-4 ">
            {/* Social media icons */}
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
