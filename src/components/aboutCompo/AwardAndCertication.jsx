"use client";
import Image from "next/image";
import { useState } from "react";

const awards = [
  {
    title: "WebAward",
    image: "/gifs/award-wma.webp",
    add1: "By, WMA Inc., USA",
    add2: "Mother Dental",
    add3: "Best Of Industry, 2012",
  },

  {
    title: "WebAward",
    image: "/gifs/award-wma.webp",
    add1: "By, WMA Inc., USA",
    add2: "Mother Dental",
    add3: "Best Of Industry, 2012",
  },

  {
    title: "WebAward",
    image: "/gifs/award-wma.webp",
    add1: "By, WMA Inc., USA",
    add2: "Mother Dental",
    add3: "Best Of Industry, 2012",
  },

  {
    title: "WebAward",
    image: "/gifs/award-wma.webp",
    add1: "By, WMA Inc., USA",
    add2: "Mother Dental",
    add3: "Best Of Industry, 2012",
  },

  {
    title: "WebAward",
    image: "/gifs/award-wma.webp",
    add1: "By, WMA Inc., USA",
    add2: "Mother Dental",
    add3: "Best Of Industry, 2012",
  },

  {
    title: "WebAward",
    image: "/gifs/award-wma.webp",
    add1: "By, WMA Inc., USA",
    add2: "Mother Dental",
    add3: "Best Of Industry, 2012",
  },

  {
    title: "WebAward",
    image: "/gifs/award-wma.webp",
    add1: "By, WMA Inc., USA",
    add2: "Mother Dental",
    add3: "Best Of Industry, 2012",
  },

  {
    title: "WebAward",
    image: "/gifs/award-wma.webp",
    add1: "By, WMA Inc., USA",
    add2: "Mother Dental",
    add3: "Best Of Industry, 2012",
  },
];

const partners = [
  {
    title: "Being",
    image: "/partners/bing-ads-1.webp",
    desc: "We are also listed as a Bing Ads Accredited Profesional Company, which is certified by Microsoft",
  },
  {
    title: "Google",
    image: "/partners/google-partner-1.webp",
    desc: "Being certified and listed by Google as an Official Partner demonstrates our proficiency in Google Products.",
  },
  {
    title: "Being",
    image: "/partners/bing-ads-1.webp",
    desc: "We are also listed as a Bing Ads Accredited Profesional Company, which is certified by Microsoft",
  },
  {
    title: "Google",
    image: "/partners/google-partner-1.webp",
    desc: "Being certified and listed by Google as an Official Partner demonstrates our proficiency in Google Products.",
  },
];

const accolades = [
  {
    title: "PC Magazine",
    image: "/partners/pcmag.webp",
    desc: "Acodez has been featured in PC Magazine",
  },
  {
    title: "PC Magazine",
    image: "/partners/accolades-5.webp",
    desc: "Acodez has been featured in PC Magazine",
  },
  {
    title: "PC Magazine",
    image: "/partners/accolades-5.webp",
    desc: "Acodez has been featured in PC Magazine",
  },
  {
    title: "PC Magazine",
    image: "/partners/accolades-5.webp",
    desc: "Acodez has been featured in PC Magazine",
  },
  {
    title: "PC Magazine",
    image: "/partners/accolades-5.webp",
    desc: "Acodez has been featured in PC Magazine",
  },
  {
    title: "PC Magazine",
    image: "/partners/accolades-5.webp",
    desc: "Acodez has been featured in PC Magazine",
  },
  {
    title: "PC Magazine",
    image: "/partners/accolades-5.webp",
    desc: "Acodez has been featured in PC Magazine",
  },
  {
    title: "PC Magazine",
    image: "/partners/accolades-5.webp",
    desc: "Acodez has been featured in PC Magazine",
  },
  {
    title: "PC Magazine",
    image: "/partners/accolades-5.webp",
    desc: "Acodez has been featured in PC Magazine",
  },
  {
    title: "PC Magazine",
    image: "/partners/accolades-5.webp",
    desc: "Acodez has been featured in PC Magazine",
  },
];

const AwardAndCertication = () => {
  const [contents, setContents] = useState(awards);
  const [active, setActive] = useState("award");
  return (
    <div className='py-10 px-5 sm:px-14 lg:px-20 xl:px-44 w-full'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className=' text-3xl lg:text-4xl mb-5 font-thin py-5 '>
          Awards & Certifications
        </h1>
        <p className='text-center text-md leading-7 xl:text-lg w-full'>
          Proudly presenting the list of the international awards that we have
          been honored with for our works: More than 16 international awards in
          recognition for our various works across different industry sectors
          and for various clients, keeping up our enthusiasm at top, helping us
          achieve milestones.
        </p>
      </div>
      <div className='my-10 flex flex-col items-center justify-center '>
        <div className='flex justify-start items-start gap-2 lg:gap-14'>
          <button
            className={`text-lg lg:text-2xl font-thin pb-6 before:absolute before:bg-accent  inline-block before:h-[3px] before:top-[60%] before:rounded-full relative ${
              active == "award" ? "before:w-10" : ""
            }`}
            onClick={() => {
              setActive("award");
              setContents(awards);
            }}
          >
            Awards We&apos;ve won
          </button>
          <button
            className={`text-lg lg:text-2xl font-thin pb-6 before:absolute before:bg-accent before: inline-block before:h-[3px] before:top-[60%] before:rounded-full relative ${
              active == "certi" ? "before:w-10" : ""
            }`}
            onClick={() => {
              setActive("certi");
              setContents(partners);
            }}
          >
            Certifications & Partnerships
          </button>
          <button
            className={`text-lg lg:text-2xl font-thin pb-6 before:absolute before:bg-accent before: inline-block before:h-[3px] before:top-[60%] before:rounded-full relative ${
              active == "acool" ? "before:w-10" : ""
            }`}
            onClick={() => {
              setActive("acool");
              setContents(accolades);
            }}
          >
            Accolades
          </button>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4  '>
          {contents.map((items, index) => {
            return (
              <div
                key={index}
                className={`min-h-52 flex justify-center items-center flex-col bg-white m-4 py-10 px-14 sm:px-4 gap-5 transition-all duration-500  ${
                  active == "acool" ? "drop-shadow-xl" : "hover:drop-shadow-2xl"
                } `}
              >
                <h1 className='text-accent mb-10 text-xl'>{items.title}</h1>
                <div className={`w-full xl:w-1/2 h-20 relative `}>
                  <Image
                    src={items.image}
                    alt={items.title}
                    fill
                    className={`${
                      active == "acool" ? "object-contain" : "object-fit"
                    }`}
                  />
                </div>
                <div className='flex justify-center items-center '>
                  {items.add1 ? (
                    <div className='leading-7'>
                      <p className='text-md lg:text-lg font-semibold'>
                        {items.add1}
                      </p>
                      <p className='text-base lg:text-md'>{items.add2}</p>
                      <p className='text-base lg:text-md'>{items.add3}</p>{" "}
                    </div>
                  ) : (
                    <p className='text-center'>{items.desc} </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AwardAndCertication;
