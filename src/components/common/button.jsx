import React from "react";

export const Button = ({ label,bg, attr }) => {
  return (
    <button {...attr} className={`w-full h-[50px] ${bg||"bg-primary"}  ${attr?.className}   rounded-full font-mona font-medium text-[16px] leading-[16.8px] tracking-[-0.28px]`}>
      {label}
    </button>
  );
};
