import React from "react";
import { useLocation } from "react-router-dom";

const ServiceDetail = () => {
  const location = useLocation();
  const { service } = location.state;

  return (
    <section className="bg-white px-6 md:px-12 lg:px-24 2xl:px-[20%] py-8 lg:py-16 w-full flex justify-center my-4 lg:my-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">{service.name}</h1>
        <img src={service.image_url} alt={service.name} className="w-full h-auto object-cover rounded-lg mb-6" />
        <p className="text-gray-600 text-lg mb-4">{service.description}</p>
        <div className="text-gray-600">
          <h2 className="text-2xl font-semibold mb-4">Details:</h2>
          <pre className="whitespace-pre-wrap">{service.details}</pre>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
