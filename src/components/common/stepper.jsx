import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between px-6 pt-8">
    {steps.map((step, index) => (
      <div key={index} className={`flex items-center ${steps.length-1 == index ? "w-fit" : "w-full"}`}>
          <div
            className={`relative h-[20px] w-[20px] flex items-center justify-center rounded-full border-4 
              ${
                currentStep >= index + 1
                  ? "border-primary bg-white"
                  : "border-[#D7D7D7] bg-[#D7D7D7]"
              } 
            `}
          >
         <p
            className={`text-5 leading-[17.41px] font-medium mt-24 ${
              currentStep >= index + 1 ? "text-black" : "text-gray-400"
            }`}
          >
            {step}
          </p>
          </div>
          {(
            <div
              className={`grow h-[1px]  bg-[#D7D7D7] ${
                currentStep >= index + 2 ? "bg-primary" : ""
              } ${steps.length - 1 === index ? "hidden" : ""}`}
            ></div>
          )}
         
        </div>
      ))}
    </div>
  );
};

export default Stepper;
