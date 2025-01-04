"use client";

import Link from "next/link";
import { useState } from "react";
import { MdHome } from "react-icons/md";

const Navbar = ({isAtTop, showMenu,home }) => {
  const [textCol, setTextCol] = useState(false)

  return (
    <nav className=' hidden lg:flex flex-wrap-reverse  justify-between items-center lg:gap-4 xl:gap-10 relative '>
      <ul className='flex  justify-center items-center gap-7 xl:gap-8'>
        <li className='group'>
          <Link href='/' className={`navLink ${home ? "text-compo-desc" : " "}`}>
            <MdHome />
          </Link>
        </li>
        <li className='group'>
          <Link href='/' className={`navLink ${home ? "text-compo-desc" : " "}`}>
            Work
          </Link>
        </li>
        <li className='group'>
          <Link href='/' className={`navLink ${home ? "text-compo-desc" : " "}`}>
            Services
          </Link>
        </li>
        <li className='group'>
          <Link href='/' className={`navLink ${home ? "text-compo-desc" : " "}`}>
            Products
          </Link>
        </li>
        <li className='group'>
          <Link href='/' className={`navLink ${home ? "text-compo-desc" : " "}`}>
            Awards
          </Link>
        </li>
        <li className='group'>
          <Link href='/' className={`navLink ${home ? "text-compo-desc" : " "}`}>
            Blog
          </Link>
        </li>
        <li className='group'>
          <Link href='/contact' className={`navLink ${home ? "text-compo-desc" : " "}`}>
            Contact
          </Link>
        </li>
      </ul>
      <button className={`btn`}>Quick Enquiry</button>
    </nav>
  );
};

export default Navbar;
