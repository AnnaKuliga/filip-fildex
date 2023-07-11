import React from "react";
import "./Services.css";
import { servicesData } from "../../src/data/services";
const Services = () => {
  return (
    <div className="Services" id="services">
      <div className="blur services-blur-1"></div>
      <div className="blur services-blur-2"></div>
      <div className="blur services-blur-3"></div>
      <div className="services-header">
        <span>Dowiedz się więcej o firmie </span>
        <span className="stroke-text">FILDEX</span>
      </div>
      <div className="services-categories">
        {servicesData.map((service) => (
          <div className="category">
            <span>{service.icon}</span>
            <span>{service.heading}</span>
            <span>{service.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
