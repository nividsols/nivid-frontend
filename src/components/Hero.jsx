import React from 'react';
import SVG from '../assets/img.png'

const Hero = () => {
	return (
		<div className='flex justify-between items-center my-20'>
			<div className='w-1/2'>
				<h1 className='text-6xl leading-[5rem] font-medium text-white my-7'>
					We Provide Innovative Solutions For complex engineering problems with high quality and low cost to
					customers
				</h1>
				<p className='text-[#C4C4C4] text-lg font-medium leading-7'>

					Cost Optimization & Quality Improvement through Digital Transformation/ One Stop shop for all your
					digital needs
				</p>
				<button className='py-5 px-10 text-white bg-gradient-to-r from-[#399FD8] via-[#0775B4] to-[#003756] mt-14'>Discover More</button>
			</div>
			<div className='ml-0'>
				<img src={SVG} alt="react" className='opacity-90 rounded-2xl mx-28'/>
			</div>
		</div>
	);
};

export default Hero;