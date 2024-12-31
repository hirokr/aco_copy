import Image from "next/image";
import React from "react";

const WhatsNew = () => {
  return (
    <div className='flex justify-between items-center pb-40'>
      <div className='flex flex-col md:flex-row w-full justify-center md:justify-start items-center gap-10'>
        <h1 className=' border-b-2 md:border-b-0 md:border-r-2 md:pr-5 text-xl lg:text-2xl'>
          What&apos;s New
        </h1>
        <p className='text-md lg:text-lg'>We are doing a very good job</p>
      </div>
      <div className='h-96 w-96 absolute right-0 hidden md:block'>
        <Image
          src='/gifs/mike.png'
          alt='mike'
          className='object-contain'
          fill
        />
      </div>
    </div>
  );
};

export default WhatsNew;
