import React from 'react';

const Banner = () => {
  return (
    <div className='w-full bg-[#043873] py-20 px-6 sm:px-10 md:px-16'>
      <div className='w-full max-w-[1280px] m-auto text-[#FFFFFF] text-center font-bold'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight'>
          Your work, everywhere you are
        </h1>
        <p className='leading-[30px] mt-6 text-[16px] sm:text-[18px] font-normal px-4 sm:px-8'>
          Access your notes from your computer, phone or tablet by synchronising with various services, including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
        </p>
        <div className='mt-10'>
          <button className='text-[#FFFFFF] bg-[#4F9CF9] py-3 px-8 sm:py-4 sm:px-10 rounded-lg'>
            Try Taskey →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
