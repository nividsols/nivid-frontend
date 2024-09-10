import React from "react";

const ServiceCard = ({ img, title, description, onClick }) => {
  return (
    <div
      className="bg-white col-span-1 h-full shadow-md rounded-lg overflow-hidden hover:scale-105 cursor-pointer transition-transform duration-300"
      onClick={onClick}
    >
      <div className="p-3">
        <img src={img} alt={title} className="object-fit rounded-lg w-full h-64 md:h-80" />
      </div>
      <div className="p-3 text-wrap overflow-auto">
        <h1 className="text-lg  font-semibold mb-4  text-gray-800 text-center">{title}</h1>
        {/* <p className="text-gray-600 leading-relaxed whitespace-pre-line">{description}</p> */}
      </div>
    </div>
  );
};

export default ServiceCard;
