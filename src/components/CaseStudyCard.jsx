import { separateDateComponents } from "../utils/separateDateComponent";
import { truncateText } from "../utils/truncateText";

const CaseStudyCard = ({ img, title, date, description, onClick }) => {
  const { day, month, year } = separateDateComponents(date);

  return (
    <div
      className="relative bg-white shadow-md rounded-lg overflow-hidden cursor-pointer w-[20rem] flex-shrink-0 group"
      onClick={onClick}
    >
      <img src={img} alt={title} className="w-full h-48 object-fill" />
      <div className="p-4">
        <div className="flex mb-4">
          <div className="flex flex-col text-xl font-extrabold mr-4">
            <span className="block">{day}</span>
            <span className="block">{month}</span>
            <span className="block text-sm">{year}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 flex items-center">{title}</h3>
        </div>
        <p className="text-gray-600">{truncateText(description, 20)}</p>
        <a href="#" className="text-blue-500 underline mt-4 block">
          Read More
        </a>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="text-white font-bold py-2 px-4 bg-[#3fdbf6] rounded mb-40">
          View More
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;

