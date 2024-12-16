import { about } from "@/lib/about";
import AboutCard from "./aboutCard";
import Image from "next/image";

const About = () => {
  return (
    <div className='px-5 sm:px-14 lg:px-20 xl:px-44 py-10 w-full relative drop-shadow-xl'>
      <Image
        src='/main logo/03_vector-bg-1.png'
        alt='back'
        fill
        className='object-contain h-full -z-30 w-1/2 absolute bottom-0 '
      />
      <div>
        <h1 className='text-3xl pb-6 before:absolute before:bg-accent before:w-1/2 inline-block before:h-[3px] before:top-[60%] before:rounded-full relative'>
          About
        </h1>
        <div className='flex-col flex sm:flex-row w-full gap-10 justify-between items-center'>
          <p className='w-full text-xl
          lg:w-1/2 lg:text-2xl leading-[2.5rem] inline-block'>
            We are an international award-winning IT company with 6 offices
            across India, and offers web design, web development and digital
            marketing services.
          </p>
          <p className='w-full text-base lg:w-1/2 inline-block leading-8 lg:text-lg'>
            Acodez is rated as one of the top web agencies in India by various
            industry magazines and review sites. We have a right blend of
            award-winning designers, expert web developers and Google certified
            digital marketers which make us a unique one-stop solution for
            hundreds of our clients, spread across 80+ countries.
          </p>
        </div>
      </div>
      <div className='hidden xl:flex w-full justify-between items-start mt-8 overflow-scroll'>
        <div>
          <div className='inline-block'>
            <AboutCard data={about[0]} index={1} />
          </div>
          <div className='inline-block'>
            <AboutCard data={about[1]} index={2} />
          </div>
        </div>
        <div className='pt-36 '>
          <div className='inline-block'>
            <AboutCard data={about[2]} index={3} />
          </div>
          <div className='inline-block'>
            <AboutCard data={about[3]} index={4} />
          </div>
        </div>

        <div>
          <div className='inline-block'>
            <AboutCard data={about[4]} index={5} />
          </div>
          <div className='inline-block'>
            <AboutCard data={about[5]} index={6} />
          </div>
        </div>
        <div className='pt-36 '>
          <div className='inline-block'>
            <AboutCard data={about[6]} index={7} />
          </div>
        </div>
      </div>
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 w-full gap-3 xl:hidden'>
        <div className='inline-block w-full'>
          <AboutCard data={about[0]} index={1} />
        </div>
        <div className='inline-block'>
          <AboutCard data={about[1]} index={2} />
        </div>
        <div className='inline-block'>
          <AboutCard data={about[2]} index={3} />
        </div>
        <div className='inline-block'>
          <AboutCard data={about[3]} index={4} />
        </div>
        <div className='inline-block'>
          <AboutCard data={about[4]} index={5} />
        </div>
        <div className='inline-block'>
          <AboutCard data={about[5]} index={6} />
        </div>
        <div className='inline-block'>
          <AboutCard data={about[6]} index={7} />
        </div>
      </div>
    </div>
  );
};

export default About;
