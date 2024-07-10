import React from 'react';
import SVG from '../assets/img.png';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center my-10 lg:my-20 px-6 md:px-12 lg:px-24 2xl:px-[10%]" id='home'>
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl 2xl:text-6xl leading-snug lg:leading-normal 2xl:leading-loose font-medium text-white my-5 lg:my-7">
          We Provide Innovative Solutions For complex engineering problems with high quality and low cost to customers
        </h1>
        <p className="text-[#C4C4C4] text-base lg:text-lg 2xl:text-xl font-medium leading-6 lg:leading-7 2xl:leading-8">
          Cost Optimization & Quality Improvement through Digital Transformation / One Stop shop for all your digital needs
        </p>
        <button className="py-3 lg:py-5 2xl:py-6 px-6 lg:px-10 2xl:px-12 text-white bg-gradient-to-r from-[#399FD8] via-[#0775B4] to-[#003756] mt-8 lg:mt-14 2xl:mt-16 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          Discover More
        </button>
      </div>
      <div className="w-full lg:w-auto mt-8 lg:mt-0">
        <img src={SVG} alt="react" className="opacity-90 rounded-2xl mx-auto lg:mx-28 2xl:mx-36" />
      </div>
    </section>
  );
};

export default Hero;
