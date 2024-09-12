import React, { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="px-10 mb-10">
      <div className="flex justify-between items-center">
        <span className="text-white">{value}</span>
        <span className="text-3 font-medium leading-[13.54px] text-white">
          Amount
        </span>
      </div>
      <div className=" ">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-1 bg-white rounded-lg appearance-none cursor-pointer"
          style={{
            accentColor: "#32d09d", // Thumb color
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
