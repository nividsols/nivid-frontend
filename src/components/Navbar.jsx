import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [serviceData, setServiceData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/apis/services/")
      .then((response) => {
        setServiceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
      });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCardClick = (service) => {
    navigate(`/service-detail/${encodeURIComponent(service.name)}`, { state: { service } });
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex w-[100%] justify-between items-center fixed top-0 bg-[#0775B4] bg-opacity-90 p-4 z-50 md:px-16 2xl:px-64">
      <div className="text-white text-3xl font-bold">
        <Link to="/">Nivid</Link>
      </div>

      <ul className="hidden md:flex justify-around items-center space-x-8 md:space-x-16 lg:space-x-32 text-white text-lg">
        <li>
          <HashLink smooth to="/#home" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            Home
          </HashLink>
        </li>
        <li className="relative">
          <div
            onClick={toggleDropdown}
            className="text-[#C4C4C4] hover:text-white cursor-pointer flex items-center"
          >
            Services
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-[#0775B4] text-white rounded-lg shadow-lg">
              {serviceData.map((service) => (
                <li
                  key={service.id}
                  className="hover:bg-white hover:text-black p-2 cursor-pointer"
                  onClick={() => handleCardClick(service)}
                >
                  {service.name}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <HashLink smooth to="/#about" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            About Us
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#articles" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            Articles
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#portfolio" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            Portfolio
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/contact-us" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            Contact Us
          </HashLink>
        </li>
      </ul>

      <div className="md:hidden text-white">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-[#60BBEE] via-[#0775B4] to-[#0A72AD] flex flex-col items-center space-y-4 py-4 text-white">
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <HashLink smooth to="/#home">Home</HashLink>
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <HashLink smooth to="/#services">Services</HashLink>
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <HashLink smooth to="/#about">About Us</HashLink>
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <HashLink smooth to="/#articles">Articles</HashLink>
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <HashLink smooth to="/#portfolio">Portfolio</HashLink>
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <HashLink smooth to="/contact-us">Contact Us</HashLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
