import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CaseStudyDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudyDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/apis/case-studies/details/${id}`);
        setService(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching case study details:", error);
        setLoading(false); 
      }
    };

    fetchCaseStudyDetails();
  }, [id]);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (!service) {
    return <div>Error loading case study details.</div>;
  }

  window.scrollTo(0, 0)
  return (
    <section className="bg-white px-6 md:px-12 lg:px-24 2xl:px-[20%] py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">{service.name}</h1>
        <img src={service.image_url} alt={service.name} className="w-full h-[20rem] md:h-[30rem] rounded-lg mb-6" />
        <p className="text-gray-600 text-lg mb-4">{service.description}</p>
        <div className="text-gray-600">
          <h2 className="text-2xl font-semibold mb-4">Case Studies:</h2>
          <pre className="whitespace-pre-wrap">{service.details}</pre>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetails;
