import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";

const Navbar = ({serviceData,caseStudyData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCaseStudyCardClick = (caseStudyId) => {
    navigate(`/case-study-detail/${caseStudyId.id}`,{ state: {name:caseStudyId.name} });
  };
  const handleCardClick = (service) => {
    navigate(`/service-detail/${encodeURIComponent(service.name)}`, {
      state: { service },
    });
  };

  return (
    <nav className="flex w-[100%] justify-between items-center fixed top-0 bg-[#0775B4] bg-opacity-90 p-4 z-50 md:px-16 2xl:px-64">
      <div className="text-white text-3xl font-bold">
        <HashLink smooth to="/#home">
          NIVID
        </HashLink>
      </div>

      <ul className="hidden md:flex justify-around items-center space-x-8 md:space-x-16 lg:space-x-32 text-white text-lg">
        <li>
          <HashLink
            smooth
            to="/#home"
            className="text-[#C4C4C4] hover:text-white cursor-pointer"
          >
            Home
          </HashLink>
        </li>
        <li className="relative group">
          <HashLink
            smooth
            to="/#services"
            className="text-[#C4C4C4] hover:text-white cursor-pointer flex items-center"
          >
            <span className="services-link">Services</span>
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </HashLink>
          <ul className="absolute left-0 pt-2 w-48 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible">
            {serviceData&&serviceData.map((service) => (
              <li
                key={service.id}
                className="hover:bg-gray-200 cursor-pointer p-2"
                onClick={() => handleCardClick(service)}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <HashLink
            smooth
            to="/#about"
            className="text-[#C4C4C4] hover:text-white cursor-pointer"
          >
            About Us
          </HashLink>
        </li>
        <li className="relative group">
          <HashLink
            smooth
            to="/#case-studies"
            className="text-[#C4C4C4] hover:text-white cursor-pointer flex items-center"
          >
            <span className="case-study-link">Case Studies</span>
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </HashLink>
          <ul className="absolute left-0 pt-2 w-48 bg-white text-black shadow-lg rounded-lg opacity-0  group-hover:opacity-100 group-hover:visible  transition-opacity duration-300 invisible">
            {caseStudyData.map((casestudy) => (
              <li
                key={casestudy.id}
                className=" hover:bg-gray-200 cursor-pointer p-2"
                onClick={() => handleCaseStudyCardClick(casestudy)}
              >
                {casestudy.name}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <HashLink
            smooth
            to="/contact-us"
            className="text-[#C4C4C4] hover:text-white cursor-pointer"
          >
            Contact Us
          </HashLink>
        </li>
      </ul>

      <div className="md:hidden text-white">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-[#60BBEE] via-[#0775B4] to-[#0A72AD] flex flex-col items-center space-y-4 py-4 text-white">
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/#services">
              Services
            </HashLink>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/#about">
              About Us
            </HashLink>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/#articles">
              Articles
            </HashLink>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/#portfolio">
              Portfolio
            </HashLink>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/contact-us">
              Contact Us
            </HashLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
