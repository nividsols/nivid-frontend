import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-screen justify-between items-center fixed top-0 bg-gradient-to-r from-[#60BBEE] via-[#0775B4] to-[#0A72AD] bg-opacity-90 p-4 z-50 lg:px-64">
      <div className="text-white text-3xl font-bold ml-4">
        <h1>Nivid</h1>
      </div>

      <ul className="hidden md:flex justify-around items-center space-x-32 text-white text-lg mr-4">
        <li>
          <a href="#home" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            About Us
          </a>
        </li>
        <li>
          <a href="#articles" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            Articles
          </a>
        </li>
        <li>
          <a href="#portfolio" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="text-[#C4C4C4] hover:text-white cursor-pointer">
            Contact
          </a>
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
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <a href="#about">About Us</a>
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <a href="#articles">Articles</a>
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
