import React from 'react';
import Image from 'next/image';
import work from '/public/work.png';

const Content = () => {
  return (
    <div className='w-full bg-[#FFFF]'>
      {/* First Section */}
      <div className='flex max-sm:flex-col lg:flex-row py-12 px-10 gap-8'>
        <div className='w-full lg:w-[672px] mt-20 text-center lg:text-left'>
          <h1 className='text-5xl sm:text-4xl lg:text-7xl font-bold leading-tight'>Project Management</h1>
          <p className='text-[16px] sm:text-[14px] font-normal leading-[30px] mt-5'>
            Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app.
            Take photos with the mobile app and save them to a note.
          </p>
          <div className='mt-10'>
            <button className='text-[#FFFFFF] bg-[#4F9CF9] py-3 px-8 rounded-lg'>
              Get Started →
            </button>
          </div>
        </div>
        <div className='bg-[#C4DEFD] w-full lg:w-[700px] h-[300px] lg:h-[547px]'></div>
      </div>

      {/* Second Section */}
      <div className='w-full flex flex-col sm:flex-col md:flex-row py-12'>
        {/* Image Section */}
        <div className='w-full md:w-[510px] m-auto'>
          <Image src={work} alt='work' layout="responsive" />
        </div>
        {/* Text Section */}
        <div className='w-full md:w-[672px] mt-10 md:mt-24 text-center md:text-left'>
          <h1 className='text-5xl sm:text-4xl font-bold leading-tight'>Work Together</h1>
          <p className='text-[16px] sm:text-[14px] font-normal leading-[30px] mt-5'>
            With Whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>
          <div className='mt-10'>
            <button className='text-[#FFFFFF] bg-[#4F9CF9] py-3 px-8 rounded-lg'>
              Try it now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
