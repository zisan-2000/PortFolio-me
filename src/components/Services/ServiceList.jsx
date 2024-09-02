import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Frontend Development with React JS, Next JS & Tailwind",
    icon: <BsArrowDownRight size={24} />,
    description:
      "Building responsive and interactive UIs with React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "API Development with Django",
    icon: <BsArrowDownRight size={24} />, // Custom Django Icon used here
    description: "Creating scalable and secure RESTful APIs using Django.",
  },
  {
    id: 3,
    title: "API Development with Spring Boot",
    icon: <BsArrowDownRight size={24} />,
    description: "Building enterprise-level backend services with Spring Boot.",
  },
  {
    id: 4,
    title: "UI/UX design",
    icon: <BsArrowDownRight size={24} />,
    description: "UI/UX design using Figma",
  },
];

const ServiceList = () => {
  return (
    <section className="services">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          number={index + 1}
          title={service.title}
          icon={service.icon}
          description={service.description}
        />
      ))}
    </section>
  );
};

export default ServiceList;
