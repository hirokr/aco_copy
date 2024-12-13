"use client";

const LetsTalk = () => {
  return (
    <div className='bg-black  w-full flex flex-col justify-center items-center gap-10 px-5 sm:px-14 lg:px-20 xl:px-44 text-center py-10'>
      <h1 className="text-2xl text-white">Let&apos;s talk about what we can build together</h1>
      <p className="text-lg">
        Whatever may be your requirement - be it a simple website design, a
        complex data driven web application development, an ecommerce website, a
        native or cross platform mobile app development, a logo and brand
        identity design, a video production or a full fledged digital marketing
        campaign - we have a solution for you.
      </p>
      <button className='py-3 px-5 border-2 border-accent rounded-full text-white transition-all duration-500 hover:bg-accent hover:text-black'>Contact us now for a free quote!</button>
    </div>
  );
};

export default LetsTalk;
