import React from 'react';
import Google from '../assets/footer/google.svg';
import LinkedIn from '../assets/footer/LinkedIn.svg';
import Insta from '../assets/footer/Insta.svg';
import twitter from '../assets/footer/twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 py-20 w-full">
      <div className="max-w-screen-xl mx-auto md:flex-row gap-16 flex justify-between flex-col">
        <div>
          <h1 className="text-xl font-semibold">
            Nivid Innovation Solution Limited
          </h1>
          <p className="text-gray-600 mt-2">
            is a general contractor company based in Jakarta. More than 25 years
            of experience in building and carving out Indonesia's development.
          </p>
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
            <a href="#" className="text-blue-500">
            <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
        <div className="flex gap-8 w-1/2">
          <div>
            <h2 className="font-semibold">Company</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600">
                  About
                </a>
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
