"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '/public/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className="w-full h-[92px] flex justify-between items-center py-4 px-4 sm:px-8 lg:px-16 bg-[#043873] gap-4"
      >
        {/* Logo Section */}
        <div>
          <Image
            src={Logo}
            alt="logo"
            className="w-[120px] h-auto md:w-[150px] lg:w-[191px]"
          />
        </div>

        {/* Navigation Section */}
        <div className="hidden lg:flex w-auto gap-8 justify-between items-center">
          <ul className="flex gap-6 text-white font-medium text-sm md:text-base lg:text-lg">
            <li className="cursor-pointer hover:underline">Products</li>
            <li className="cursor-pointer hover:underline">Solutions</li>
            <li className="cursor-pointer hover:underline">Resources</li>
            <li className="cursor-pointer hover:underline">Pricing</li>
          </ul>
          <button className="py-2 px-4 bg-[#FFE492] rounded-lg text-sm md:text-base">
            Login
          </button>
        </div>

        {/* Mobile Menu Button (for small screens) */}
        <div className="lg:hidden">
          <button
            className="text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#043873] text-white py-4 px-4">
          <ul className="flex flex-col gap-4 font-medium text-sm">
            <li className="cursor-pointer hover:underline">Products</li>
            <li className="cursor-pointer hover:underline">Solutions</li>
            <li className="cursor-pointer hover:underline">Resources</li>
            <li className="cursor-pointer hover:underline">Pricing</li>
          </ul>
          <button className="mt-4 py-2 px-4 bg-[#FFE492] rounded-lg text-sm w-full">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
