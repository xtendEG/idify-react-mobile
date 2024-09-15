import React, { useEffect, useRef, useState } from "react";
import SmallArrow from "./small-arrow";

const Dropdown = ({
  label,
  options,
  btnClassName,
  menuClassName,
  btnContent,
  containerClassName,
  arrowFill = "#fff",
  showArrow = true,
  onChange,
  icon,
  liClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label || options[0]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
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

  const renderButton = () => {
    if (btnContent) {
      return (
        <div onClick={toggleDropdown} className={btnClassName}>
          <div className="inline-flex items-center justify-between w-full rounded-[21px] px-3 bg-primary text-2 leading-[14.4px] tracking-[-0.24px] font-medium text-white focus:outline-none">
            <span className="border-e-[1px] border-white px-3 py-1">
              {selectedOption}
            </span>
            <SmallArrow fill="white" className={isOpen ? "rotate-180" : ""} />
          </div>
        </div>
      );
    }
    if (icon){
      return (
        <div onClick={toggleDropdown} className={btnClassName}>
          {icon}
        </div>
      );
    }
    return (
      <button className={btnClassName} onClick={toggleDropdown} type="button">
        {selectedOption || label}
        {showArrow && (
          <SmallArrow
            fill={arrowFill}
            className={`ml-2 ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>
    );
  };

  return (
    <div className={`relative inline-block text-left ${containerClassName}`}>
      {renderButton()}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute right-0 z-40 mt-2 ${menuClassName} rounded-[12px] shadow-custom-2 bg-white focus:outline-none`}
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
                className={`${liClassName} block ps-4 pe-6 py-2 text-2 hover:bg-gray-100 whitespace-nowrap last:border-none border-b-[1px] border-[#97979733] cursor-pointer`}
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