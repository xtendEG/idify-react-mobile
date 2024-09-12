import React, { useEffect, useRef, useState } from "react";
import SmallArrow from "./small-arrow";

const Dropdown = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(label);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex items-center  justify-between w-full rounded-[21px]  px-3 py-1 bg-primary text-[12px] leading-[14.4px] tracking-[-0.24px] font-medium text-white focus:outline-none"
        onClick={toggleDropdown}
        type="button"
      >
        {selectedOption}
        <SmallArrow fill={"#fff"} className={isOpen ? "rotate-180" : ""} />
      </button>

      {isOpen && (
        <div ref={dropdownRef} className="absolute left-0 mt-2  w-full rounded-[12px] shadow-custom-2 bg-white  focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-[12px] hover:bg-gray-100 "
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
