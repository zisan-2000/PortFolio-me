import React from "react";
import ServiceList from "./ServiceList";

const ServicesSection = () => {
  return (
    <div className="themeChange min-h-screen px-4 py-24 ">
      <h2 className="textColor mb-8 text-center text-4xl font-bold">
        Services
      </h2>
      <ServiceList />
    </div>
  );
};

export default ServicesSection;
