import Image from "next/image";

const ABout = () => {
  return (
    <div className='px-5 sm:px-14 lg:px-20 xl:px-44 w-full bg-red-400 top-0 absolute'>
      <div className='w-full h-screen '>
        <Image
          src='/gifs/about_banner.jpg'
          fill
          alt='about Banner'
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default ABout;
