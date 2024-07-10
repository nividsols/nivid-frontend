import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import IOT from "../assets/IOT_image.png";
import Data from "../assets/data.png";
import Manufacture from "../assets/manufacture.png";

const Services = () => {
  const serviceData = [
    {
      img: IOT,
      title: "IIoT & Digital Engineering",
      description: "Our offerings under the umbrella of IIoT & Digital Engineering are as below",
      services: `Manufacturing Operations Management
- Digital twin
- Digital thread
- Process / Machine Integration
- Process Automation
- AI/ML based Non-Conformance Management
- Automated Visual Inspection
- Inspector / Operator Training Management
- Asset Management`,
    },
    {
      img: Data,
      title: "Data Analytics",
      description: `Using PowerBI, Python, Tableau & IBM Cognos (SSBI) We provide below Data Analysis & Visualisation modules to manufacturing Facilities`,
      services: `Yield & Throughput Dashboard
- SPC Dashboard
- RFT (Part & Feature) Dashboard
- Calibration (Machine/Inspection Equipment/Tools & Fixture) Monitoring
- HS&E Dashboard
- Training Management Dashboard
- Machine Health Check Dashboard
- Predictive & Preventive Analysis
- KPV & KPI Dashboard
- PO Status Dashboard
- Supplier Quality Dashboard
- Other custom dashboards to suit your business`,
    },
    {
      img: Manufacture,
      title: "Manufacturing Solutions",
      description: "Our Manufacturing & design support offerings are -",
      services: `APQP, PPAP & FAIr
- Quality Support
- Non-Conformance Management
- Change Control Management
- Supply Chain Management
- Inspection Support
- Process optimisation
- Zero defects
- Manufacturing Instructions`,
    },
  ];

  const navigate = useNavigate();

  const handleCardClick = (service) => {
    navigate(`service-detail/${service.title}`, { state: { service } });
  };

  return (
    <section className="bg-[#F6F6F6] px-6 md:px-12 lg:px-24 2xl:px-[13%] py-12" id="services">
      <div className="flex flex-col lg:flex-row justify-between items-center py-20">
        <h1 className="text-5xl w-full lg:w-80 leading-relaxed font-semibold mb-8 lg:mb-0">
          Our Excellent Services
        </h1>
        <p className="text-[#C4C4C4] text-lg font-medium text-center lg:text-left">
          We provide end-to-end Conventional/Digital solutions & services for manufacturing facilities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            img={service.img}
            title={service.title}
            description={service.description}
            onClick={() => handleCardClick(service)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
