import React from "react";
import { servicesData } from "../../components/DummyData/DummyData"; // Adjust the path accordingly
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <section className="services">
      {servicesData.map((service, index) => (
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
