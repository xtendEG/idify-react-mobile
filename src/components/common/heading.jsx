import React from "react";
import arrow from "../../assets/images/common/arrow.svg";
import { useNavigate } from "react-router-dom";
const Heading = ({ heading, returnFn, bg }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`sticky top-0 -left-4 -right-4 pt-12 px-4  z-50 pb-2 font-mona ${
        bg || "bg-transparent"
      }`}
    >
      <div className="relative flex justify-center ">
        <button onClick={returnFn || (() => navigate(-1))}>
          <img
            src={arrow}
            alt="arrow"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          />
        </button>
        <h1 className="text-6 font-semibold leading-[19.34px]">{heading}</h1>
      </div>
    </div>
  );
};

export default Heading;
