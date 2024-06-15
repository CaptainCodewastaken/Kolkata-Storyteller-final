import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import navlogo from '@/public/image/logofinal.jpg';
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Image src={navlogo} alt="Nav Logo" width={150} height={75} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-black focus:outline-none">
            <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} className="text-black text-xl" />
          </button>
        </div>
        <div className="hidden md:flex md:flex-row md:justify-end items-center">
          <Link href="/" className="text-black hover:text-[#F05245] py-2 px-2 font-akzidenz text-lg font-bold flex items-center">
            <span>HOME</span>
            <span className="text-[#F05245] ml-6">•</span>
          </Link>
          <Link href="/about" className="text-black hover:text-[#F05245] py-2 px-4 font-akzidenz text-lg font-bold flex items-center">
            <span>ABOUT</span>
            <span className="text-[#F05245] ml-6">•</span>
          </Link>
          <ScrollLink
            to="storyheading"
            smooth={true}
            duration={500}
            className="text-black hover:text-[#F05245] py-2 px-4 font-akzidenz text-lg font-bold flex items-center cursor-pointer"
          >
            <span>STORIES</span>
            <span className="text-[#F05245] ml-6">•</span>
          </ScrollLink>
        </div>
      </div>

      {/* Sidebar for smaller screens (phone and smaller tablets) */}
      <div className={`md:hidden ${showSidebar ? 'block' : 'hidden'}`}>
        <div className="container mx-auto">
          <div className="mt-4">
            <Link href="/" className="text-black block py-2 px-4 font-akzidenz text-lg font-bold flex items-center">
              <span>Home</span>
              <span className="text-[#F05245] mx-2">•</span>
            </Link>
            <Link href="/about" className="text-black block py-2 px-4 font-akzidenz text-lg font-bold flex items-center">
              <span>About</span>
              <span className="text-[#F05245] mx-2">•</span>
            </Link>
            <ScrollLink
              to="storyheading"
              smooth={true}
              duration={500}
              className="text-black block py-2 px-4 font-akzidenz text-lg font-bold flex items-center cursor-pointer"
            >
              <span>Stories</span>
              <span className="text-[#F05245] mx-2">•</span>
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
