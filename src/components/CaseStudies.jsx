import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CaseStudyCard from "./CaseStudyCard";
import axios from "axios";

const CaseStudies = () => {
  const [caseStudyData, setCaseStudyData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/apis/case-studies/"
        );
        setCaseStudyData(response.data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = async (caseStudyId) => {
      navigate(`case-study-detail/${caseStudyId}`);
  };

  return (
    <section
      className=" px-6 md:px-12 lg:px-24 2xl:px-[13%] py-10"
      id="case-studies"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center md:pb-12">
        <h1 className=" text-4xl md:text-5xl w-full leading-relaxed font-semibold mb-8 lg:mb-0">
          Our Case Studies
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {caseStudyData.length > 0 &&
          caseStudyData.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              img={caseStudy.image_url}
              title={caseStudy.name}
              date={caseStudy.date}
              description={caseStudy.details}
              onClick={() => handleCardClick(caseStudy.id)}
            />
          ))}
      </div>
    </section>
  );
};

export default CaseStudies;
