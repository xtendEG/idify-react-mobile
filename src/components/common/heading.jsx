import React from "react";
import arrow from "../../assets/arrow.svg";
const Heading = ({ heading, returnFn }) => {
  return (
    <div className="relative flex justify-center">
      <button onClick={returnFn}>
        <img
          src={arrow}
          alt="arrow"
          className="absolute left-0 top-1/2 -translate-y-1/2"
        />
      </button>
      <h1 className="text-[20px] font-semibold leading-[19.34px]">{heading}</h1>
    </div>
  );
};

export default Heading;
