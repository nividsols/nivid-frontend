import { separateDateComponents } from "../utils/separateDateComponent";
import { truncateText } from "../utils/truncateText";

const CaseStudyCard = ({ img, title, date, description, onClick }) => {
  const {day,month,year} = separateDateComponents(date);
  
  return (
    <div
      className="bg-white shadow-md drop-shadow-2xl rounded-lg overflow-hidden cursor-pointer w-[20rem]"
      onClick={onClick}
    >
      <img src={img} alt={title} className="w-full h-64 object-fill" />
      <div className="p-6">
        <div className="flex mb-4">
          <div className="flex flex-col text-xl font-extrabold mr-4">
            <span>{day}</span>
            <span>{month}</span>
            {/* <span>{day}</span> */}
          </div>
          <h3 className="text-xl font-bold mb-2 flex items-center ">{title}</h3>
        </div>
        <p className="text-gray-600">{ truncateText(description,20)}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
