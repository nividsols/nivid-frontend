import { separateDateComponents } from "../utils/separateDateComponent";
import { truncateText } from "../utils/truncateText";

const CaseStudyCard = ({ img, title, date, description, onClick }) => {
  const { day, month, year } = separateDateComponents(date);

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer w-[20rem] flex-shrink-0"
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
      </div>
    </div>
  );
};

export default CaseStudyCard;

