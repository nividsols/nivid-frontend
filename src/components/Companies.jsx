import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/apis/companies/`
        );
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {/* Repeat the companies array twice to ensure seamless scrolling */}
          {companies.concat(companies).map((company, index) => (
            <img
              key={index}
              src={company.image_url}
              className="h-12 w-32 md:h-20 md:w-40"
              alt={`Company ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
