import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/apis/companies/');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="flex flex-wrap justify-around items-center gap-8 px-6 lg:px-24 2xl:px-[20%]">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.image_url}
            className="w-32 h-auto md:w-40"
            alt={`Company ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
