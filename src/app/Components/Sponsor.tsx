import React from 'react';
import Image from 'next/image';
import Apple from '/public/Apple.png';
import Micro from '/public/Micro.png';
import Slack from '/public/Slack.png';
import Google from '/public/Google.png';

const Sponsor = () => {
  return (
    <div className='w-full bg-[#F4F4F4] py-16 sm:py-12 px-6 md:px-10'>
      <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-center'>
        Our Sponsors
      </h1>
      <div className='flex flex-wrap justify-center items-center gap-16 mt-20'>
        <div className='w-24 sm:w-32 md:w-10'>
          <Image src={Apple} alt='Apple' layout="responsive" />
        </div>
        <div className='w-24 sm:w-32 md:w-40'>
          <Image src={Micro} alt='Microsoft' layout="responsive" />
        </div>
        <div className='w-24 sm:w-32 md:w-40'>
          <Image src={Slack} alt='Slack' layout="responsive" />
        </div>
        <div className='w-24 sm:w-32 md:w-40'>
          <Image src={Google} alt='Google' layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
