import React from 'react';
import img_1 from '../assets/img_1.png';
import img_2 from '../assets/img_2.png';
import img_3 from '../assets/img_3.png';
import img_4 from '../assets/img_4.png';
import img_5 from '../assets/img_5.png';
const Companies = () => {
	return (
		<div className='flex items-center justify-between my-20 px-28'>
			<img src={img_1} className='w-40 h-fit'/>
			<img src={img_2} className='w-40 h-fit'/>
			<img src={img_3} className='w-40 h-fit'/>
			<img src={img_4} className='w-40 h-fit'/>
			<img src={img_5} className='w-40 h-fit'/>

		</div>
	);
};

export default Companies;