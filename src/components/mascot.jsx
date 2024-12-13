"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const Mascot = () => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { threshold: 0.1 });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <section className='relative flex flex-col justify-between items-center lg:flex-row h-full w-full px-5 sm:px-14  lg:px-20 xl:px-44 py-20'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={hasAnimated ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 1, ease: "easeIn" }}
        className='w-full lg:w-[60%] h-[50vh] relative'
      >
        <Image
          src='/gifs/cycle.gif'
          alt='Mascot'
          fill
          className='object-contain'
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={hasAnimated ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 1, ease: "easeIn" }}
        className=' w-[20rem] lg:w-[30rem] justify-center items-center  flex h-52'
      >
        <div className='mascotContainer'>
          <div className=' card '>
            <h1 className='text-6xl lg:text-8xl tracking-wide text-accent'>
              ACODIE
            </h1>
            <h2
              className='text-2xl lg:text-3xl
            tracking-[6px]
            lg:tracking-[16px] font-semibold text-accent'
            >
              OUR MASCOT
            </h2>
          </div>
          <div className=' card rotateY'>
            <p className='text-center'>
              We love illustrations and Acodie, our mascot, is a cool showpiece
              of our creativity. The theme of this website is based on Acodie,
              wherein you could find Acodie in every page of this site - in
              various styles and emotions!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Mascot;
