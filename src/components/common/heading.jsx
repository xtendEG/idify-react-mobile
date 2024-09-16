import React from "react";
import arrow from "../../assets/images/common/arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import settings from "../../assets/images/profile/settings.svg";

const Heading = ({ heading, returnFn, bg }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`sticky top-0 -left-4 -right-4 pt-12 px-4  z-50 pb-2 font-mona ${
        bg || "bg-transparent"
      }`}
    >
      <div className={`relative flex ${heading=="Home"?"justify-between":"justify-center"} items-center `}>
      <button onClick={returnFn || (() => navigate(-1))}>
          <img
            src={arrow}
            alt="arrow"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          />
        </button>
        <h1 className="text-6 font-semibold leading-[19.34px]">{heading}</h1>
        {heading=="Home"&& <Link to="/profile/settings" className="flex items-center justify-center w-[32px] h-[32px] shadow-custom bg-white rounded-full ">
          <img src={settings} alt="" />
        </Link>}
      </div>
    </div>
  );
};

export default Heading;
