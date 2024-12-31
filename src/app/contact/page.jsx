import AwardAndCertication from "@/components/aboutCompo/AwardAndCertication";
import ClientGrossGlobal from "@/components/aboutCompo/ClientGrossGlobal";
import Credintials from "@/components/aboutCompo/credintials";
import WhatsNew from "@/components/whatsNew";
import Image from "next/image";
import Link from "next/link";

const Contacct = () => {
  return (
    <main className='flex-col flex justify-between items-center '>
      <section className='flex justify-center items-center px-5 sm:px-14 lg:px-20 xl:px-44  '>
        <div className='z-30 justify-center flex flex-col items-start w-1/2 absolute right-5 top-[30%]'>
          <h1 className='text-3xl pb-6 before:absolute before:bg-accent before:w-1/2 inline-block before:h-[3px] before:top-[60%] before:rounded-full relative'>
            Get In Touch
          </h1>
          <div>
            <Link href="">

            </Link>
          </div>
        </div>
        <div className=' mb-10 h-[100vh]'>
          <div className='h-full w-full top-0 left-0  opacity-70 absolute'>
            <Image
              src='/gifs/contact-banner.webp'
              fill
              alt='contact Banner'
              className='object-fit'
            />
          </div>
        </div>
      </section>
      <WhatsNew/>
    </main>
  );
};

export default Contacct;
