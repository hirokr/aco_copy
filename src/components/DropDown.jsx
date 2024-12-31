"use client";

import { navLinks } from "@/lib/navData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DropDown = ({ showMenu, setShowMenu }) => {
  const [value, setValue] = useState(0);
  return (
    <div
      className={`px-5 sm:px-14 lg:px-20 xl:px-44 absolute bg-white top-[7.1rem]
    w-full  left-0 text-compo-content py-8 justify-between items-start flex duration-500 transition-all ${
      showMenu ? "h-[100vh] translate-y-0" : " h-0 -translate-y-[120vh]"
    }`}
    >
      <div
        className={`basis-1/4  p-0 ${
          showMenu ? "border-r-[1px] delay-700 " : "border-r-0"
        }`}
      >
        {navLinks.map((items, index) => {
          return (
            <div
              key={index}
              className='py-4 text-2xl font-thin transition-all duration-500 hover:text-accent'
              onMouseOver={() => {
                setValue(index);
              }}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <Link href={items.link}>{items.title}</Link>
            </div>
          );
        })}
      </div>
      <div className='basis-3/4 h-full pl-5 flex justify-between items-start font-thin'>
        <div className='h-[80vh] basis-[40%]'>
          {navLinks[value].works.map((links, index) => {
            return (
              <div
                key={index} //noen
                className='py-2 transition-all duration-300 hover:text-accent xl:text-xl '
              >
                <Link href={links.link}>{links.title}</Link>
              </div>
            );
          })}
        </div>
        <div className='basis-[60%] leading-10 text-lg tracking-wider xl:text-2xl'>
          <span className='relative w-20 h-10 z-10'>
            <Image
              src='/logos/09_quotes-icon.png'
              fill
              alt='image'
              className='object-center'
            />
          </span>
          {navLinks[value].desc}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
