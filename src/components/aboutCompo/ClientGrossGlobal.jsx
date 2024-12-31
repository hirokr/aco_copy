"use client";

import Image from "next/image";
import WhatsNew from "../whatsNew";

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
      <WhatsNew/>
    </div>
  );
};

export default ClientGrossGlobal;
