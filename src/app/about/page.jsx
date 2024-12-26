import AwardAndCertication from "@/components/aboutCompo/AwardAndCertication";
import ClientGrossGlobal from "@/components/aboutCompo/ClientGrossGlobal";
import Credintials from "@/components/aboutCompo/credintials";
import Image from "next/image";

const About = () => {
  return (
    <main className='flex-col flex justify-between items-center '>
      <section className='flex justify-center items-center px-5 sm:px-14 lg:px-20 xl:px-44  '>
        <div className='z-30 justify-center flex flex-col items-start w-1/2 absolute right-5 top-[30%]'>
          <h1 className='text-3xl pb-6 before:absolute before:bg-accent before:w-1/2 inline-block before:h-[3px] before:top-[60%] before:rounded-full relative'>
            Who we are?
          </h1>
          <p
            className="'w-full text-base leading-6
          lg:text-xl xl:leading-[2.5rem] inline-block"
          >
            Acodez is a multi-international award-winning web development
            company in India specialising across various arenas of the IT and
            digital marketing industry. Based in India, with offices in Delhi
            NCR, Mumbai, Bangalore and Calicut, we cater to the requirements of
            our clients in 80+ countries.
          </p>
        </div>
        <div className=' mb-10 h-[100vh]'>
          <div className='h-full w-full top-0 left-0  opacity-70 absolute'>
            <Image
              src='/gifs/about-banner.webp'
              fill
              alt='about Banner'
              className='object-fit'
            />
          </div>
        </div>
      </section>
      <Credintials/>
      <AwardAndCertication/>
      <ClientGrossGlobal/>
    </main>
  );
};

export default About;
