import Social from "@/components/aboutCompo/Social";
import ContactCard from "@/components/Contact";
import WhatsNew from "@/components/whatsNew";
import Image from "next/image";
import Link from "next/link";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdMail } from "react-icons/md";



const Contacct = () => {
  return (
    <main className='flex-col flex justify-between items-center '>
      <section className='flex justify-center items-center px-5 sm:px-14 lg:px-20 xl:px-44  '>
        <div className='z-30 justify-center flex flex-col items-start lg:w-1/2 absolute md:right-2 md:top-[30%] top-[80%]'>
          <h1 className='text-3xl pb-6 before:absolute before:bg-accent before:w-1/2 inline-block before:h-[3px] before:top-[60%] before:rounded-full relative'>
            Get In Touch
          </h1>
          <ul className=' w-full p-1 text-lg lg:text-xl font-mono'>
            <li>
              <Link
                href=''
                className='flex justify-start items-center text-blue-600 transition-all duration-500 hover:text-compo/80'
              >
                <span className='flex justify-start items-center gap-2 min-w-36'>
                  <LiaFlagUsaSolid className='h-10 w-10' />
                  India
                </span>
                : +91 95 44 66 88 44
              </Link>
            </li>

            <li>
              <Link
                href=''
                className='flex justify-start items-center text-blue-600 transition-all duration-500 hover:text-compo/80'
              >
                <span className='flex justify-start items-center gap-2 min-w-36'>
                  <LiaFlagUsaSolid className='h-10 w-10' />
                  US
                </span>
                : +1 408 426 8844
              </Link>
            </li>

            <li>
              <Link
                href=''
                className='flex justify-start items-center text-blue-600 transition-all duration-500 hover:text-compo/80'
              >
                <span className='flex justify-start items-center gap-2 min-w-36'>
                  <LiaFlagUsaSolid className='h-10 w-10' />
                  UK
                </span>
                : +44 745 127 4244
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='flex justify-start items-center text-blue-600 transition-all duration-500 hover:text-compo/80'
              >
                <span className='flex justify-start items-center gap-2 min-w-36'>
                  <MdMail className='h-9 w-9 text-compo' />
                  Email
                </span>
                : info@acodez.in
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='flex justify-start items-center text-blue-600 transition-all duration-500 hover:text-compo/80'
              >
                <span className='flex justify-start items-center gap-2 min-w-36'>
                  <MdMail className='h-9 w-9 text-compo' />
                  Career
                </span>
                : careers@acodez.in
              </Link>
            </li>
          </ul>
        </div>
        <div className=' mb-10 h-[100vh]'>
          <div className='h-full w-full top-0 left-0 opacity-70 absolute'>
            <Image
              src='/gifs/contact-banner.webp'
              fill
              alt='contact Banner'
              className='object-fit'
            />
          </div>
        </div>
      </section>
      <div className='px-5 sm:px-14 lg:px-20 xl:px-44 w-full bg-white'>
        <ContactCard />
        <div className='w-full h-64'></div>
        <Social />
        <WhatsNew />
      </div>
    </main>
  );
};

export default Contacct;
