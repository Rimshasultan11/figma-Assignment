import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className='bg-[#043873]  gap-8 w-full h-auto py-20 px-10 lg:py-[140px] lg:px-[200px] flex flex-col lg:flex-row items-center justify-between'>
        {/* Left Section */}
        <div className='text-[#FFFFFF] flex flex-col items-start lg:w-[656px] mb-8 lg:mb-0 '>
          <h2 className='font-bold text-[36px] sm:text-[28px] lg:text-[38px] text-center lg:text-left'>
            Get More Done with Whitepace
          </h2>
          <p className='text-[16px] sm:text-[14px]  font-normal mt-4 text-center lg:text-left'>
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
          </p>
          <div className='flex justify-center lg:justify-start mt-6'>
            <button className='bg-[#4F9CF9] text-[#FFFFFF] py-3 px-6 rounded-lg'>
              Try Whitepace free →
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className='bg-[#C4DEFD] w-full lg:w-[824px] h-[300px] lg:h-[549px]'></div>
      </div>
    </div>
  );
};

export default Hero;
