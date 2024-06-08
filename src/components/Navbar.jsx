import React from 'react';

const Navbar = () => {
	return (
		<div>
			<nav className="">
				<ul className='flex items-center justify-between py-10 text-white text-lg font-medium'>
					<li className='font-bold text-2xl'>
						<a href="/">Nivid</a>
					</li>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/#">Services</a>
					</li>
					<li>
						<a href="/about">About Us</a>
					</li>
					<li>
						<a href="/#">Case studies</a>
					</li>
					<li>
						<a href="/#">Portfolio</a>
					</li>
					<li>
						<a href="/contact">Contact Us</a>
					</li>

				</ul>
			</nav>

		</div>
	);
};

export default Navbar;