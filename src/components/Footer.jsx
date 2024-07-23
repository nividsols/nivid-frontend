import React from "react";
import Google from "../assets/footer/google.svg";
import LinkedIn from "../assets/footer/LinkedIn.svg";
import Insta from "../assets/footer/Insta.svg";
import twitter from "../assets/footer/twitter.svg";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 py-20 w-full">
      <div className="max-w-screen-xl mx-auto md:flex-row gap-16 flex justify-between flex-col">
        <div>
          <h1 className="text-xl font-semibold">Nivid Innovative Solutions</h1>
          <div className="text-gray-600 mt-2">
            is a Engineering Solutions & Service company.
            <br />
            <p className="my-1 text-justify">
              We Provide cost effective solutions & services in IoT & Digital
              Engineering, Data Analysis & Visualisation, Manufacturing & Design
              Support and 3D Metrology & Reverse Engineering to global
              industrial OEM's & manufactures.
            </p>
        
              Our domain expertise are Aviation, Automobile, Supply Chain, Medi
              Tech & Edu Tech.
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-500">
              <img src={Google} alt="" />
            </a>
            <a href="#" className="text-blue-500">
              <img src={twitter} alt="" />
            </a>
            <a href="#" className="text-blue-500">
              <img src={Insta} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/company/nivid-innovative-solutions-ltd/"
              className="text-blue-500"
            >
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
        <div className="flex gap-8 w-1/2">
          <div>
            <h2 className="font-semibold">Company</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <HashLink
                  smooth
                  to="/#about"
                  className="text-gray-600 cursor-pointer"
                >
                  About Us
                </HashLink>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Term
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">More</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
