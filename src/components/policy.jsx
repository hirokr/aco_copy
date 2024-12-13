const Policy = () => {
  return (
    <div className='bg-white/30 text-compo-content flex flex-col lg:flex-row justify-center items-end lg:justify-end lg:items-center h-32 w-full px-5 sm:px-14 lg:px-20 xl:px-44 text-md lg:text-base'>
      <p>©2024 All rights reserved to Acodez</p>
      <div className='mx-5 h-6 w-[1px] rounded-full bg-compo-content hidden lg:block'></div>
      <div className="flex">
      <p className='transition-all duration-500 hover:text-accent'>
        Terms & Conditions
      </p>
      <div className='mx-5 h-6 w-[1px] rounded-full bg-compo-content'></div>
      <p className='transition-all duration-500 hover:text-accent'>
        Privacy Policy
      </p>
      </div>
    </div>
  );
};

export default Policy;
