import React from "react";
import Google from "../assets/footer/google.svg";
import LinkedIn from "../assets/footer/LinkedIn.svg";
import Insta from "../assets/footer/Insta.svg";
import twitter from "../assets/footer/twitter.svg";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Footer = ({serviceData,caseStudyData}) => {
  const navigate = useNavigate()
  const handleCardClick = (service) => {
    navigate(`/service-detail/${encodeURIComponent(service.name)}`, {
      state: { service },
    });
  };
  const handleCaseStudyCardClick = (caseStudyId) => {
    navigate(`/case-study-detail/${caseStudyId.id}`,{ state: {name:caseStudyId.name} });
  };
  return (
    <footer className="bg-gray-100 p-8 py-20 w-full">
      <div className="max-w-screen-xl mx-auto md:flex-row gap-16 flex justify-between flex-col">
        <div className="w-full md:w-2/5">
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
        <div className="flex flex-col md:flex md:flex-row gap-8 md:w-3/5">
          <div>
            <h2 className="font-semibold">Services</h2>
            <ul className="mt-4 space-y-2">
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
          </div>
          <div>
            <h2 className="font-semibold">Case Studies</h2>
            <ul className="mt-4 space-y-2">
            {caseStudyData&&caseStudyData.map((casestudy) => (
              <li
                key={casestudy.id}
                className=" hover:bg-gray-200 cursor-pointer p-2"
                onClick={() => handleCaseStudyCardClick(casestudy)}
              >
                {casestudy.name}
              </li>
            ))}
          </ul>
          </div>

          <div>
            <h2 className="font-semibold">Contact</h2>
            <ul className="mt-6 space-y-2">
              <li>
                <HashLink
                  smooth
                  to="/#about"
                  className="text-gray-600 cursor-pointer"
                >
                  About Us
                </HashLink>
              </li>
            </ul>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/contact-us" className="text-gray-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Locations</h2>
            Ima
            <ul className="mt-6 space-y-2">
              <li>
                <p className="text-gray-600">
                  Address <br />
                  Address <br />
                  Address <br />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="md:ml-4  mt-12 text-gray-500"> © Copyright/Registered 2022-2023 Nivid Innovative Solutions</p>
      {/* <p className="md:ml-4 mt-2 text-gray-500 cursor-pointer"> Privacy Policy</p> */}
    </footer>
  );
};

export default Footer;
