import { navLinks } from "@/lib/navData";
import Link from "next/link";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='relative bg-gray-200/10  py-4 px-5 sm:px-14 lg:px-20 xl:px-44 font-open grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-0'>
      <section className='hidden md:flex flex-col gap-3 justify-start items-start'>
        <h1 className='text-compo text-md mb-4 font-semibold'>Navigation</h1>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index} className='group py-1 text-sm'>
                <Link className=' navLink text-compo' href={link.link}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className='hidden md:flex flex-col gap-3 justify-start items-start'>
        <h1 className='text-compo text-md mb-4 font-semibold'>Services</h1>
        <ul>
          {navLinks[2].works.map((link, index) => {
            return (
              <li key={index} className='group py-1 text-sm'>
                <Link className=' navLink text-compo' href={link.link}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className='flex flex-col gap-3 justify-between pb-5 items-start'>
        <h1 className='text-compo text-md font-semibold'>Contact Us</h1>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-start items-center gap-3 group'>
            <MdOutlineEmail className=' border-2 border-accent rounded-full w-8 h-8 p-1 text-accent group-hover:text-primary group-hover:bg-accent transition-all duration-300 ' />
            <Link
              href='mailto:info@xyz.in'
              className='text-lg group-hover:text-accent transition-all duration-300'
            >
              info@xyz.in
            </Link>
          </div>
          <div className='flex justify-start items-center gap-3 group'>
            <FaSkype className=' border-2 border-accent rounded-full w-8 h-8 p-1 text-accent group-hover:text-primary group-hover:bg-accent transition-all duration-300 ' />
            <Link
              href='skype.com'
              className='text-lg group-hover:text-accent transition-all duration-300'
            >
              Acodez
            </Link>
          </div>
          <div className='flex justify-start items-center gap-3 group'>
            <MdOutlineCall className=' border-2 border-accent rounded-full w-8 h-8 p-1 text-accent group-hover:text-primary group-hover:bg-accent transition-all duration-300 ' />
            <Link
              href='mailto:info@xyz.in'
              className='text-lg group-hover:text-accent transition-all duration-300'
            >
              (+000) 000 000 00
            </Link>
          </div>
        </div>
        <div>
          <h1 className='text-compo text-md mb-4 font-semibold'>Find Us On</h1>
          <div className=' flex justify-start items-center gap-3'>
            <Link href='https://www.facebook.com'>
              <FaFacebook className='h-8 w-8 bg-blue-800 hover:-translate-y-2 transition-all duration-300  hover:bg-gray-400 p-2 text-primary rounded-full ' />
            </Link>

            <Link href='https://www.facebook.com'>
              <FaGoogle className='h-8 w-8 bg-red-700 hover:-translate-y-2 transition-all duration-300  hover:bg-gray-400 p-2 text-primary rounded-full ' />
            </Link>
            <Link href='https://www.facebook.com'>
              <FaTwitter className='h-8 w-8 bg-blue-500 hover:-translate-y-2 transition-all duration-300  hover:bg-gray-400 p-2 text-primary rounded-full ' />
            </Link>
            <Link href='https://www.facebook.com'>
              <FaLinkedin className='h-8 w-8 bg-blue-900 hover:-translate-y-2 transition-all duration-300  hover:bg-gray-400 p-2 text-primary rounded-full ' />
            </Link>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-3 justify-between  items-start'>
        <h1 className='text-compo text-md font-semibold'>Newsletter</h1>
        <div className='flex flex-col gap-2 w-full max-w-[20rem]'>
          <form
            action='#'
            className='flex w-full justify-start items-center h-10'
          >
            <input
              placeholder='Enter Your Email'
              required
              className='pl-2 h-full text-[12px] transition-all duration-300 w-full border-2 outline-none focus:outline-none'
            />
            <button
              type='submit'
              className='bg-accent h-full text-md px-2 relative text-primary inline-block hover:scale-110 transition-all duration-300 drop-shadow-sm'
            >
              Subscribe
            </button>
          </form>
          <p className='text-[11px]'>
            Enter your email ID above to subscribe to our newsletter.
          </p>
        </div>
        <div className=' w-full hidden sm:block'>
          <div className='w-full bg-primary h-16 justify-center items-center flex hover:bg-accent transition-all duration-300 hover:text-white'>
            <h1 className='text-lg xl:text-xl text-center font-semibold p-2'>
              16 International Awards
            </h1>
          </div>
          <div
            className='grid grid-cols-2 w-full gap-2 h-20
          '
          >
            <div className='relative'>
              <Image
                src='/partners/07_google-partner.png'
                alt='google'
                fill
                className='object-contain'
              />
            </div>
            <div className='relative '>
              <Image
                src='/partners/08_bing-ads.png'
                alt='google'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
