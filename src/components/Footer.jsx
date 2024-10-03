// import React from "react";
// import Google from "../assets/footer/google.svg";
// import LinkedIn from "../assets/footer/LinkedIn.svg";
// import Insta from "../assets/footer/Insta.svg";
// import twitter from "../assets/footer/twitter.svg";
// import { HashLink } from "react-router-hash-link";
// import { useNavigate } from "react-router-dom";

// const Footer = ({serviceData,caseStudyData}) => {
//   const navigate = useNavigate()
//   const handleCardClick = (service) => {
//     navigate(`/service-detail/${encodeURIComponent(service.name)}`, {
//       state: { service },
//     });
//   };
//   const handleCaseStudyCardClick = (caseStudyId) => {
//     navigate(`/case-study-detail/${caseStudyId.id}`,{ state: {name:caseStudyId.name} });
//   };
//   return (
//     <footer className="bg-black p-8 pt-20 pb-10 w-full text-white">
//       <div className="max-w-screen-xl mx-auto md:flex-row gap-16 flex justify-between flex-col">
//         <div className="w-full md:w-2/5">
//           <h1 className="text-2xl font-semibold">NIVID Innovative Solutions Ltd</h1>
//           <div className="text-gray-600 mt-2">
//           </div>
//           <div className="flex space-x-8 mt-8">
//             <a href="#" className="text-blue-500">
//               <img src={Google} alt="" />
//             </a>
//             <a href="#" className="text-blue-500">
//               <img src={twitter} alt="" />
//             </a>
//             <a href="#" className="text-blue-500">
//               <img src={Insta} alt="" />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/nivid-innovative-solutions-ltd/"
//               className="text-blue-500"
//             >
//               <img src={LinkedIn} alt="" />
//             </a>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex md:flex-row gap-8 md:w-3/5">
//           <div>
//             <h2 className="font-bold ">Services</h2>
//             <ul className="mt-4 space-y-2 text-gray-400">
//               {serviceData&&serviceData.map((service) => (
//                 <li
//                   key={service.id}
//                   className="hover:text-[#0775B4] hover:underline cursor-pointer p-2"
//                   onClick={() => handleCardClick(service)}
//                 >
//                   {service.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h2 className="font-semibold">Case Studies</h2>
//             <ul className="mt-4 space-y-2 text-gray-400">
//             {caseStudyData&&caseStudyData.map((casestudy) => (
//               <li
//                 key={casestudy.id}
//                 className=" hover:text-[#0775B4] hover:underline cursor-pointer p-2"
//                 onClick={() => handleCaseStudyCardClick(casestudy)}
//               >
//                 {casestudy.name}
//               </li>
//             ))}
//           </ul>
//           </div>

//           <div>
//             <h2 className="font-bold">Contact</h2>
//             <ul className="mt-6 space-y-2 text-gray-400">
//               <li>
//                 <HashLink
//                   smooth
//                   to="/#about"
//                   className="hover:text-[#0775B4] cursor-pointer"
//                 >
//                   About Us
//                 </HashLink>
//               </li>
//             </ul>
//             <ul className="mt-4 space-y-2 text-gray-400">
//               <li className="hover:text-[#0775B4]">
//                 <a href="/contact-us">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="font-bold">Locations</h2>
//             <ul className="mt-6 space-y-2">
//               <li>
//                 <p className=" text-gray-400">
//                   Address <br />
//                   Address <br />
//                   Address <br />
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <p className="md:ml-4  mt-12 text-gray-500"> © Copyright 2022-2023 NIVID Innovative Solutions Ltd</p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Google from "../assets/footer/google.svg";
import LinkedIn from "../assets/footer/LinkedIn.svg";
import Insta from "../assets/footer/Insta.svg";
import twitter from "../assets/footer/twitter.svg";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Footer = ({ serviceData, caseStudyData }) => {
  const navigate = useNavigate();
  const handleCardClick = (service) => {
    navigate(`/service-detail/${encodeURIComponent(service.name)}`, {
      state: { service },
    });
  };
  const handleCaseStudyCardClick = (caseStudyId) => {
    navigate(`/case-study-detail/${caseStudyId.id}`, {
      state: { name: caseStudyId.name },
    });
  };
  return (
    <footer className="bg-black p-8 pt-20 pb-10 w-full text-white">
      <div className="max-w-screen-xl mx-auto md:flex-row gap-16 flex justify-between flex-col">
        <div className="flex flex-col md:flex md:flex-row gap-8 md:w-full md:justify-around">
          <div>
            <h2 className="font-bold ">Services</h2>
            <ul className="mt-4 space-y-2 text-gray-400">
              {serviceData &&
                serviceData.map((service) => (
                  <li
                    key={service.id}
                    className="hover:text-[#0775B4] hover:underline cursor-pointer p-2"
                    onClick={() => handleCardClick(service)}
                  >
                    {service.name}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Case Studies</h2>
            <ul className="mt-4 space-y-2 text-gray-400">
              {caseStudyData &&
                caseStudyData.map((casestudy) => (
                  <li
                    key={casestudy.id}
                    className=" hover:text-[#0775B4] hover:underline cursor-pointer p-2"
                    onClick={() => handleCaseStudyCardClick(casestudy)}
                  >
                    {casestudy.name}
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Contact</h2>
            <ul className="mt-6 space-y-2 text-gray-400">
              <li>
                <HashLink
                  smooth
                  to="/#about"
                  className="hover:text-[#0775B4] cursor-pointer"
                >
                  About Us
                </HashLink>
              </li>
            </ul>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li className="hover:text-[#0775B4]">
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Locations</h2>
            <ul className="mt-6 space-y-2">
              <li>
                <p className=" text-gray-400">
                  Address <br />
                  Address <br />
                  Address <br />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex md:flex-row w-full md:justify-between md:px-20">
        <p className="md:ml-4  mt-12 text-gray-500">
          {" "}
          © Copyright 2022-2023 NIVID Innovative Solutions Ltd
        </p>
        <div>
          <div className="text-gray-600 mt-2"></div>
          <div className="flex space-x-8 mt-8">
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
      </div>
    </footer>
  );
};

export default Footer;
