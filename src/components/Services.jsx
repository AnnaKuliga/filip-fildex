import React from "react";
import "./Services.css";
import { servicesData } from "../../src/data/services";
const Services = () => {
  return (
    <div className="Services" id="services">
      <div className="services-header">
        <span>Dowiedz się więcej o firmie </span>
        <span className="stroke-text">FILDEX</span>
      </div>
      <div className="services-categories">
        {servicesData.map((service) => (
          <div className="category">
            {service.icon}
            <span>{service.heading}</span>
            <span>{service.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
