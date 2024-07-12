import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/apis/services/")
      .then((response) => {
        setServiceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
      });
  }, []);

  const handleCardClick = (service) => {
    navigate(`service-detail/${service.name}`, { state: { service } });
  };

  return (
    <section
      className="bg-[#F6F6F6] px-6 md:px-12 lg:px-24 2xl:px-[13%] py-12"
      id="services"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center py-20">
        <h1 className="text-5xl w-full lg:w-80 leading-relaxed font-semibold mb-8 lg:mb-0">
          Our Excellent Services
        </h1>
        <p className="text-[#C4C4C4] text-lg font-medium text-center lg:text-left">
          We provide end-to-end Conventional/Digital solutions & services for
          manufacturing facilities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.image_url}
            title={service.name}
            description={service.details}
            onClick={() => handleCardClick(service)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
