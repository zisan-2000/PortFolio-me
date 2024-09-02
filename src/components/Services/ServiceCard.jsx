import React from "react";

const ServiceCard = ({ number, title, icon, description }) => {
  return (
    <div className="card textColor">
      <div className="service-header">
        <span className="number">0{number}</span>
        <div className="icon">{icon}</div>
      </div>
      <h3 className="title">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};

export default ServiceCard;
