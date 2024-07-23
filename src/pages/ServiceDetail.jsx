import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ServiceDetail = () => {
  const location = useLocation();
  const { service } = location.state;
  const [subServices, setSubServices] = useState([]);
  const [hoverColor, setHoverColor] = useState("");

  const colors = ["#FAFFAF", "#FFB4C2", "#E6B9A6", "#E90074", "#4A249D"];

  useEffect(() => {
    const getSubServices = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/apis/services/sub-services/${service.id}`
        );
        setSubServices(response.data);
      } catch (error) {
        console.error("Error fetching sub-services data:", error);
      }
    };
    getSubServices();
  }, [service.id]);

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setHoverColor(randomColor);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 2xl:px-[20%] py-8 lg:py-16 w-full flex justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          {service.name}
        </h1>
        <img
          src={service.image_url}
          alt={service.name}
          className="w-full h-auto object-cover rounded-lg mb-6 shadow-md"
        />
        <p className="text-gray-600 text-lg mb-8">{service.details}</p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Our Detais in {service.name}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {subServices.map((subService, index) => (
            <div
              key={subService.id}
              className="mb-auto border-b-2 rounded-lg card"
              style={{
                backgroundColor: activeIndex === index ? hoverColor : "white",
                transition: "background-color",
              }}
            >
              <button
                className={`w-full h-full text-left text-xl font-medium p-4 ${
                  activeIndex === index ? "rounded-t-lg" : "rounded-lg"
                } flex justify-between items-center`}
                onClick={() => toggleAccordion(index)}
                style={{
                  backgroundColor: activeIndex === index ? hoverColor : "white",
                  transition: "background-color 1s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = hoverColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    activeIndex === index ? hoverColor : "white")
                }
              >
                <div className="flex items-center gap-4">
                  <img
                    src={subService.image_url}
                    alt={subService.title}
                    className="h-12 w-12 rounded-full p-1 rotateImage"
                  />
                  <h1 className="text-gray-800">{subService.title}</h1>
                </div>
                <span className="text-gray-500">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 rounded-b-lg">
                  <pre className="whitespace-pre-wrap text-gray-700">
                    {subService.details}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
