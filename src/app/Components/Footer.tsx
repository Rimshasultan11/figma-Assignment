import React from 'react';
import Image from 'next/image';
import Logo from '/public/Logo.png';

const Footer = () => {
  return (
    <div>
      <div className='w-full bg-[#043873] px-6 sm:px-8 lg:px-[220px] py-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-8 lg:gap-20 justify-between items-center'>
          <div className='w-full sm:w-auto text-center md:text-left  mt-8'>
            <Image src={Logo} alt='logo' className='w-[191px] h-[34px] ' />
            <p className='text-[14px] sm:text-[14px] text-[#F7F7EE] leading-6 mt-2 '>
              whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>
          <div className='w-full sm:w-auto text-center md:text-left'>
            <div className='text-[#FFFFFF] font-semibold'>Product</div>
            <ul className='text-[#F7F7EE] mt-4'>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>
          <div className='w-full sm:w-auto text-center md:text-left'>
            <div className='text-[#FFFFFF] font-semibold'>Resources</div>
            <ul className='text-[#F7F7EE] mt-4'>
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>
          <div className='w-full sm:w-auto text-center md:text-left'>
            <div className='text-[#FFFFFF] font-semibold'>Company</div>
            <ul className='text-[#F7F7EE] mt-4'>
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
