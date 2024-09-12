import React, { useState } from "react";

const TextInputField = ({ label, placeholder, required,value, labelClassName }) => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <label className={`text-4 font-medium lead ${labelClassName}`}>
        {label}
        {required && <span className="text-[#D83C53]">*</span>}{" "}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={`border-[1px] border-[#D7D7D7] placeholder:text-[#D7D7D7] placeholder:text-4 rounded-full w-full h-[60px] px-6 focus-visible:outline-[#0073E7] `}
      value={value||""}
/>
    </div>
  );
};

export default TextInputField;

export const PasswordInputField = ({
  label,
  placeholder,
  subtitle,
  required,
}) => {
  return (
    <div className="flex flex-col mt-2">
      <label className=" text-4 font-medium lead">
        {label}
        {required && <span className="text-[#D83C53]">*</span>}
      </label>
      <div className="relative mt-2">
        <input
          type="password"
          placeholder={placeholder}
          className="border-[1px] border-[#D7D7D7] placeholder:text-[#D7D7D7] placeholder:text-4 rounded-full w-full h-[60px] px-6 focus-visible:outline-[#0073E7]"
        />
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-6 top-1/2 -translate-y-1/2"
          >
            <path
              d="M23.1853 11.6962C23.1525 11.6222 22.3584 9.86062 20.5931 8.09531C18.2409 5.74312 15.27 4.5 12 4.5C8.72999 4.5 5.75905 5.74312 3.40687 8.09531C1.64155 9.86062 0.843741 11.625 0.814679 11.6962C0.772035 11.7922 0.75 11.896 0.75 12.0009C0.75 12.1059 0.772035 12.2097 0.814679 12.3056C0.847491 12.3797 1.64155 14.1403 3.40687 15.9056C5.75905 18.2569 8.72999 19.5 12 19.5C15.27 19.5 18.2409 18.2569 20.5931 15.9056C22.3584 14.1403 23.1525 12.3797 23.1853 12.3056C23.2279 12.2097 23.25 12.1059 23.25 12.0009C23.25 11.896 23.2279 11.7922 23.1853 11.6962ZM12 18C9.11437 18 6.59343 16.9509 4.50655 14.8828C3.65028 14.0313 2.92179 13.0603 2.34374 12C2.92164 10.9396 3.65014 9.9686 4.50655 9.11719C6.59343 7.04906 9.11437 6 12 6C14.8856 6 17.4066 7.04906 19.4934 9.11719C20.3514 9.9684 21.0815 10.9394 21.6609 12C20.985 13.2619 18.0403 18 12 18ZM12 7.5C11.11 7.5 10.2399 7.76392 9.49993 8.25839C8.7599 8.75285 8.18313 9.45566 7.84253 10.2779C7.50194 11.1002 7.41282 12.005 7.58646 12.8779C7.76009 13.7508 8.18867 14.5526 8.81801 15.182C9.44735 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0242 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4066 15 10.8266 14.8241 10.3333 14.4944C9.83993 14.1648 9.45542 13.6962 9.22835 13.1481C9.00129 12.5999 8.94188 11.9967 9.05764 11.4147C9.17339 10.8328 9.45911 10.2982 9.87867 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.148 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.824 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z"
              fill="black"
            />
            <path
              d="M20 4L4 20"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {subtitle && <span className="text-3 mt-1">{subtitle}</span>}
    </div>
  );
};

export const CustomCheckbox = ({ label, id }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleChange}
        className="hidden peer"
      />
      <label htmlFor={id} className="flex gap-2 cursor-pointer">
        <div className="relative w-[18px] h-[18px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="17" height="17" stroke="black" />
            {isChecked && (
              <path
                d="M4 9L7.5 12.5L14 6"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </div>
        {label}
      </label>
    </div>
  );
};
