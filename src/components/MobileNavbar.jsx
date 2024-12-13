"use client";

import { navLinks } from "@/lib/navData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

const MobileDropDown = ({showMenu }) => {
  return (
    <div className={`w-full absolute left-0 z-50 bg-white text-compo-content top-[5.56rem] px-5 sm:px-14 py-10 transition-all duration-500 ${showMenu? " translate-y-0":"-translate-y-[120vh]"}`}>
      <Accordion type='single' collapsible className='w-full'>
        {navLinks.map((item, index) => {
          return (
            <AccordionItem key={index} value={`${index}`}>
              <AccordionTrigger>
                {item.title}
                <span>{item.works.length > 2 && <FaChevronDown />}</span>
              </AccordionTrigger>
              {item.works.length > 2 && (
                <AccordionContent className="pl-8">
                  {item.works.map((links, linkIndex) => {
                    return (
                      <div key={linkIndex} className="text-base font-light transition-all duration-300 hover:text-accent before:absolute py-1">
                        <Link href={links.link} className='inline-block'>
                          {links.title}
                        </Link>
                      </div>
                    );
                  })}
                </AccordionContent>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default MobileDropDown;
