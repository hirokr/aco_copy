const ContactCard = () => {
  return (
    <div className='py-2 lg:py-10 my-10 text-compo-contentn w-full bg-white drop-shadow-2xl'>
      <div className='px-3 lg:px-10'>
        <h1 className="font-semibold text-xl lg:text-2xl py-4">We&apos;d love to hear from you!</h1>
        <p className="text-md lg:text-lg">Brief us your requirements below, and let&apos;s connect.</p>
      </div>
      <form action='' className='px-3 mt-5 lg:mt-0 lg:p-10 flex flex-col lg:flex-row justify-start items-start gap-3 '>
        <div className=' basis-1/2 400 w-full'>
          <div className='flex flex-col justify-start items-start w-full mb-2'>
            <label
              htmlFor='name'
              className="pl-1 relative after:top-0 text-md font-semibold after:content-['*'] after:absolute after:text-accent after:-right-3 after:z-10"
            >
              Your name
            </label>
            <input
              type='text'
              placeholder='Enter your name here'
              name='name'
              className='pl-1 w-full py-4 border-b-[1px] text-sm'
              required
            />
          </div>
          <div className='flex flex-col justify-start items-start w-full mb-2'>
            <label
              htmlFor='name'
              className=" pl-1 relative after:top-0 text-md font-semibold after:content-['*'] after:absolute after:text-accent after:-right-3 after:z-10"
            >
              Email
            </label>
            <input
              type='email'
              placeholder='Enter your email here'
              name='name'
              className='pl-1 w-full py-4 border-b-[1px] text-sm '
              required
            />
          </div>
          <div className='flex flex-col justify-start items-start w-full mb-2'>
            <label
              htmlFor='name'
              className="pl-1 relative after:top-0 text-md font-semibold after:content-['*'] after:absolute after:text-accent after:-right-3 after:z-10"
            >
              Contact Number
            </label>
            <input
              type='text'
              placeholder='Enter your number'
              name='name'
              className='pl-1 w-full py-4 border-b-[1px] text-sm'
              required
            />
          </div>
        </div>
        <div className='basis-1/2 flex flex-col justify-start  items-start h-full gap-2 mt-2 xl:mt-0 w-full'>
          <label
            htmlFor='name'
            className=" relative after:top-0 text-md font-semibold after:content-['*'] after:absolute after:text-accent after:-right-3 after:z-10"
          >
            Your Requirments
          </label>
          <textarea
            name='requirments'
            id='requirments'
            placeholder='Breif us your requirments'
            className="w-full h-64 border-[1px] outline-[1px] p-1 text-sm"
          />
          <button type='submit' className="w-full my-1 py-2 bg-red-500 rounded-[2px] text-white font-mono text-md font-thin tracking-widest min-h-14 hover:bg-red-600 transition-all">Send Message</button>
          <p className="text-sm">We Respect your privacy. We promise we won&apos;t spam you :)</p>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
