import React, { useState, useRef, useEffect } from "react";
import SmallArrow from "./small-arrow";
const AccordionItem = ({ titleSection, content, isOpen, onToggle,contentLink }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  return (
    <div className="mb-4 duration-300 transition-all p-5 w-full rounded-[16px] shadow-custom">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${titleSection}`}
      >
        <div className="flex-1 pr-4">{titleSection}</div>
        <SmallArrow
          className={`transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`accordion-content-${titleSection}`}
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "mt-4" : "mt-0"
        }`}
        style={{ maxHeight: isOpen ? `${contentHeight}px` : "0px" }}
        aria-hidden={!isOpen}
      >
        <div className="w-full h-[1px] bg-[#D7D7D7] mb-4"></div>
        {content}

        {contentLink}
      </div>
    </div>
  );
};

export const Accordion = ({ children }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
          return React.cloneElement(child, {
            isOpen: openAccordionIndex === index,
            onToggle: () => handleAccordionToggle(index),
            key: index,
          });
        }
        return child;
      })}
    </div>
  );
};

export default AccordionItem;
