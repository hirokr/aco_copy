"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Test = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleLinkClick = () => {
    setOpenItem(null); // Close all accordion items
  };

  const toggleAccordion = (item) => {
    setOpenItem(openItem === item ? null : item); // Toggle the clicked item
  };

  return (
    <Accordion>
      <AccordionItem
        value='item-1'
        isOpen={openItem === "item-1"}
        onToggle={() => toggleAccordion("item-1")}
      >
        <AccordionTrigger>Accordion 1</AccordionTrigger>
        <AccordionContent>
          <p>This is the first accordion content.</p>
          <a href='#!' onClick={handleLinkClick}>
            Close Accordion
          </a>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value='item-2'
        isOpen={openItem === "item-2"}
        onToggle={() => toggleAccordion("item-2")}
      >
        <AccordionTrigger>Accordion 2</AccordionTrigger>
        <AccordionContent>
          <p>This is the second accordion content.</p>
          <a href='#!' onClick={handleLinkClick}>
            Close Accordion
          </a>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Test;
