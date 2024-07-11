import React from "react";

const ServiceCard = ({ img, title, description, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 cursor-pointer transition-transform duration-300"
      onClick={onClick}
    >
      <div className="p-3">
        <img src={img} alt={title} className=" object-cover rounded-lg w-auto h-[15rem] md:h-[20rem] lg:h-[30rem]" />
      </div>
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">{title}</h1>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
