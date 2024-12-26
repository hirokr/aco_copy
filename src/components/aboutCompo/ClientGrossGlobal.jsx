"use client";

import Image from "next/image";

const ClientGrossGlobal = () => {
  return (
    <div className='px-5 sm:px-14 lg:px-20 xl:px-44 bg-[#fafafa]  '>
      <div className='flex justify-center items-center flex-col py-10  '>
        <h1 className='text-4xl mb-5 font-thin py-5'>Clients Across Globe</h1>
        <p className='text-center text-md leading-7 xl:text-lg'>
          Starting from 2011, we have served more than 700 clients across 70
          countries. We have provided custom-made business solutions to a
          variety of clients (starting from the remotest village in Somalia to
          the most sophisticated Silicon Valley in the US, including the highest
          peak of Leh in the Himalayas to the Caribbean islands, we have left
          our footprints across the globe) from different industry verticals.
        </p>
      </div>
      <div className='relative'>
        <div></div>
        <div></div>
      </div>
      <div className='flex justify-between items-center pb-40'>
        <div className='flex flex-col md:flex-row w-full justify-center md:justify-start items-center gap-10'>
          <h1 className=' border-b-2 md:border-r-2 md:pr-5 text-xl lg:text-2xl'>
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
    </div>
  );
};

export default ClientGrossGlobal;
