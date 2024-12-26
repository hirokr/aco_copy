"use client";

// data
import Image from "next/image";
import Link from "next/link";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import MobileDropDown from "./MobileNavbar";
import DropDown from "./DropDown";

import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const path = usePathname();
  // console.log(path)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsAtTop(currentScrollPos < viewportHeight);

      if (currentScrollPos > lastScrollPos && currentScrollPos > 50) {
        setShowHeader(false);
      } else if (currentScrollPos < lastScrollPos) {
        setShowHeader(true);
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);
      const timeout = setTimeout(() => {
        setShowHeader(() => {
          return isAtTop ? true : false;
        });
      }, 4000);
      setScrollTimeout(timeout);

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollPos, scrollTimeout, isAtTop]);

  return (
    <header
      className={`z-40 sticky top-0 flex w-full justify-between items-center gap-10 py-4 px-5 sm:px-14 lg:px-20 xl:px-44  font-open transition-all duration-500 ${
        showHeader || showMenu ? "translate-y-0" : "-translate-y-full"
      } ${
        !isAtTop || showMenu
          ? "bg-white text-black drop-shadow-lg z-[100]"
          : "text-primary"
      }`}
    >
      <div className='z-50'>
        <Link
          href='/'
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <div
            className={`h-14 w-40 xl:w-48 xl:h-20  relative ${
              isAtTop ? "block" : "hidden"
            }`}
          >
            <Image
              src='/main logo/main_logo.png'
              alt='main lgo'
              fill
              property='primary'
              sizes=' 100%'
              className='object-contain'
            />
          </div>
          <div
            className={`h-14 w-40 xl:w-48 xl:h-20  relative ${
              isAtTop ? "hidden" : "block"
            }`}
          >
            <Image
              src='/main logo/second.png'
              alt='main lgo'
              fill
              property='primary'
              sizes=' 100%'
              className='object-contain'
            />
          </div>
        </Link>
      </div>
      <div className='flex gap-10'>
        <Navbar isAtTop={isAtTop} showMenu={showMenu} />
        <div className='flex justify-center items-center gap-10  right-10 top-0'>
          <button
            className={`btn hidden sm:block lg:hidden ${
              isAtTop && !showMenu ? "text-accent" : "text-accent"
            }`}
          >
            Quick Enquiry
          </button>
          <div className='inline-block text-white'>
            <div
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className='cursor-pointer'
            >
              <IoMenu
                className={`w-10 h-10 transition-all duration-300 hover:text-accent ${
                  !showMenu ? "block" : "hidden"
                } ${isAtTop ? "text-white" : "text-accent"}`}
              />
              <FaTimes
                className={`w-10 h-10 text-compo-content transition-all duration-300  ${
                  showMenu ? "delay-500 block" : "hidden"
                }`}
              />
            </div>
            <div className='hidden lg:block'>
              <DropDown showMenu={showMenu} showHeader={showHeader} />
            </div>
            <div className='block lg:hidden'>
              <MobileDropDown
                showMenu={showMenu}
                showHeader={showHeader}
                setShowMenu={setShowMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
