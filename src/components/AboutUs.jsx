import React from "react";
import AboutusImg from "../assets/aboutus.png";

const AboutUs = () => {
  return (
    <section
      className="bg-white py-12 px-6 md:px-12 lg:px-24 w-full my-24"
      id="about"
    >
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 2xl:px-[10%]">
        <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <h1 className="text-black text-3xl lg:text-6xl font-semibold mb-6 leading-[3rem] lg:leading-[5rem]">
            Our Story
            <br />
            Who We Are
          </h1>
          <p className="text-[#C4C4C4] text-base lg:text-2xl leading-8 lg:leading-10 mb-6 max-w-[36rem]">
            NIVID Innovative Solutions is an Engineering Solutions & Service
            company. We provide cost-effective solutions & services in IoT &
            Digital Engineering, Data Analysis & Visualization, Manufacturing &
            Design Support, and 3D Metrology & Reverse Engineering to global
            industrial OEMs & manufacturers. Our domain expertise spans
            Aviation, Automobile, Supply Chain, Medi Tech & Edu Tech.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={AboutusImg}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
