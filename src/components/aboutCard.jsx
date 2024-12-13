"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const AboutCard = ({ data, index }) => {
  const { img, title, extra, doings, description } = data;
  const { fg, bg } = img;
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { threshold: 0.1 });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={hasAnimated ? { opacity: 1 } : undefined}
      transition={{ duration: 1, ease: "easeIn" }}
      className={` group  w-full xl:w-[18rem] p-6 h-[25rem] max-h-[23rem] overflow-h transition-all hover:bg-accent hover:text-white relative shadow-lg bg-white xl:m-[.5rem]`}
    >
      <div className='w-10 h-10 relative'>
        <Image
          src={fg}
          height={10}
          width={10}
          className='w-10 h-10 absolute top-0 group-hover:hidden '
          alt='image'
        />

        <Image
          src={bg}
          alt='image'
          height={10}
          width={10}
          className='w-10 h-10 absolute top-0 hidden group-hover:block transition-all  '
        />
      </div>
      <h1 className='py-5 text-xl text-gray-900 group-hover:text-white'>
        {title}
      </h1>
      <p className='h-40 group-hover:hidden '>{description}</p>
      <div className='hidden group-hover:block'>
        <ul className=' pl-1 text-sm '>
          {doings.map((item, index) => (
            <li className='pl-1 py-1' key={index}>
              {">"} {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 ml-3">
          {extra && (
            <Link
              href={extra}
              className='py-2 px-4 rounded-full border-2 hover:bg-white hover:text-accent hover:transition-all hover:duration-500'
            >
              <button>view</button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;
