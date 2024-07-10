import React from 'react';
import img_1 from '../assets/img_1.png';
import img_2 from '../assets/img_2.png';
import img_3 from '../assets/img_3.png';
import img_4 from '../assets/img_4.png';
import img_5 from '../assets/img_5.png';

const Companies = () => {
  return (
    <div className="py-16 bg-white">
      <div className="flex flex-wrap justify-around items-center gap-8 px-6 lg:px-24 2xl:px-[20%]">
        <img src={img_1} className="w-32 h-auto md:w-40" alt="Company 1" />
        <img src={img_2} className="w-32 h-auto md:w-40" alt="Company 2" />
        <img src={img_3} className="w-32 h-auto md:w-40" alt="Company 3" />
        <img src={img_4} className="w-32 h-auto md:w-40" alt="Company 4" />
        <img src={img_5} className="w-32 h-auto md:w-40" alt="Company 5" />
      </div>
    </div>
  );
};

export default Companies;
