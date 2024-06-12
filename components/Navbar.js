import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#000614] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          Kolkata Storyteller
        </div>
        <div className="space-x-4 md:flex md:flex-row md:justify-end">
          <Link href="/" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">About</Link>
          <Link href="/features" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">Features</Link>
          <Link href="/login" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
