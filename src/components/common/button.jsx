import React from "react";

export const Button = ({ label,bg, attr }) => {
  return (
    <button {...attr} className={`w-full h-[50px] ${bg||"bg-primary active:bg-secondary transition-all duration-150"}  ${attr?.className}   rounded-full font-mona font-medium text-4 leading-[16.8px] tracking-[-0.28px]`}>
      {label}
    </button>
  );
};
