import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import navlogo from '@/public/image/logofinal.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white p-4 text-center md:flex md:justify-between md:items-center md:px-6 md:py-4 flex-col" style={{ height: '530px' }}>
      {/* Logo section with inverted colors */}
      <div className="mb-4 md:mb-0 filter invert mt-10">
        <Image src={navlogo} alt="Nav Logo" width={300} height={150} />
      </div>

      {/* Social media icons */}
      <div className="flex justify-center space-x-6 md:space-x-12">
        <a href="#" className="text-white hover:text-gray-300">
          <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm md:text-base mb-10">&copy; 2024 Kolkata Storyteller. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
