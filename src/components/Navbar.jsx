"use client";

import Link from "next/link";
import { useState } from "react";
import { MdHome } from "react-icons/md";

const Navbar = ({isAtTop, showMenu }) => {
  const [textCol, setTextCol] = useState(false)

  return (
    <nav className=' hidden lg:flex flex-wrap-reverse  justify-between items-center lg:gap-4 xl:gap-10 relative '>
      <ul className='flex  justify-center items-center gap-7 xl:gap-8'>
        <li className='group'>
          <Link href='/' className='navLink'>
            <MdHome />
          </Link>
        </li>
        <li className='group'>
          <Link href='/' className='navLink'>
            Work
          </Link>
        </li>
        <li className='group'>
          <Link href='/' className='navLink'>
            Services
          </Link>
        </li>
        <li className='group'>
          <Link href='/' className='navLink'>
            Products
          </Link>
        </li>
        <li className='group'>
          <Link href='/' className='navLink'>
            Awards
          </Link>
        </li>
        <li className='group'>
          <Link href='/' className='navLink'>
            Blog
          </Link>
        </li>
        <li className='group'>
          <Link href='/contact' className='navLink'>
            Contact
          </Link>
        </li>
      </ul>
      <button className={`btn 
        ${isAtTop && !showMenu ?"text-primary":"text-accent"}`}>Quick Enquiry</button>
    </nav>
  );
};

export default Navbar;
