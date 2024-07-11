import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex w-full justify-between bg-gradient-to-l from-[#60BBEE] via-[#0775B4] to-[#0A72AD] shadow-xl  items-center fixed top-0  bg-opacity-90 p-4 z-50 lg:px-64">
      <div className="text-white text-3xl font-bold ml-4">
        <Link to="/">Nivid</Link>
      </div>

      <ul className="hidden md:flex justify-around items-center space-x-32 text-white text-lg mr-4">
        <li>
          <HashLink
            smooth
            to="/#home"
            className="text-[#C4C4C4] hover:text-white cursor-pointer"
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#services"
            className="text-[#C4C4C4] hover:text-white cursor-pointer"
          >
            Services
          </HashLink>
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
        <li>
          <HashLink
            smooth
            to="/#articles"
            className="text-[#C4C4C4] hover:text-white cursor-pointer"
          >
            Articles
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#portfolio"
            className="text-[#C4C4C4] hover:text-white cursor-pointer"
          >
            Portfolio
          </HashLink>
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

      <div className="md:hidden text-white mr-4">
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
            <HashLink smooth to="/#home">Home</HashLink>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/#services">Services</HashLink>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/#about">About Us</HashLink>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/#articles">Articles</HashLink>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/#portfolio">Portfolio</HashLink>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            <HashLink smooth to="/contact-us">Contact Us</HashLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
