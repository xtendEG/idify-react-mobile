import React from "react";
import arrow from "../../assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";
const Heading = ({ heading, returnFn }) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex justify-center w-full">
      <button onClick={returnFn || (() => navigate(-1))}>
        <img
          src={arrow}
          alt="arrow"
          className="absolute left-0 top-1/2 -translate-y-1/2"
        />
      </button>
      <h1 className="text-6 font-semibold leading-[19.34px]">{heading}</h1>
    </div>
  );
};

export default Heading;
