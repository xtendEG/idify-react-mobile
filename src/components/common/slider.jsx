import React, { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="px-10 ">
      <div className="flex justify-between items-center">
        <span className="text-white">{value}</span>
        <span className="text-3 font-medium leading-[13.54px] text-white">
          Amount
        </span>
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">
          <div
            style={{ width: `${value}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#32d09d]"
          ></div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-1 bg-transparent rounded-lg appearance-none cursor-pointer absolute top-[6px] left-0"
          style={{
            WebkitAppearance: "none",
            accentColor: "#32d09d", // Thumb color
          }}
        />
      </div>
    </div>
  );
};

export default Slider;