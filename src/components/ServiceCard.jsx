

const ServiceCard = ({ img, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-3">
        <img src={img} alt={title} className="rounded-lg w-full h-auto" />
      </div>
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">{title}</h1>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
