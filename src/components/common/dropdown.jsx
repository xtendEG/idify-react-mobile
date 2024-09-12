import React, { useEffect, useRef, useState } from "react";
import SmallArrow from "./small-arrow";

const Dropdown = ({
  label,
  options,
  btnClassName,
  menuClassName,
  btnContent,
  containerClassName,
  arrowFill,
}) => {
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={`relative inline-block text-left ${containerClassName}`}>
      <button className={btnClassName} onClick={toggleDropdown} type="button">
        {label && selectedOption}
        {label ? (
          <SmallArrow fill={arrowFill||"#fff"} className={isOpen ? "rotate-180" : ""} />
        ) : (
          btnContent
        )}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute right-0 z-40 mt-2 ${menuClassName} rounded-[12px] shadow-custom-2 bg-white  focus:outline-none `}
        >
          <ul
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <li
                key={index}
                href="#"
                className="block ps-4 pe-6 py-2 text-2 hover:bg-gray-100 whitespace-nowrap last:border-none border-b-[1px] border-[#97979733]"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

