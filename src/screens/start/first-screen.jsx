import React from "react";
import logo from "../../assets/images/logo.png";

const FirstScreen = () => {
  return (
    <div className=" h-screen  bg-secondary relative">
      <div
        style={{
          clipPath: "polygon(0px 0px, 100% 0px, 100% 57.9%, 0px 57.9%)",
        }}
        className="flex justify-center items-center h-screen  w-full relative z-50"
      >
        <div className="flex justify-center items-center gap-2">
          <img
            src={logo}
            className="max-w-[98px] animate-popup relative z-50"
            alt="Logo"
          />
          <h1 className="animate-show-text text-white font-monomaniac text-[50px] leading-[72.4px] w-0 overflow-hidden">
            Idify
          </h1>
        </div>
      </div>
        <svg
          className="w-[309px] h-[120px] animate-shrink absolute left-1/2 -translate-x-1/2 top-[52%] -translate-y-1/2"
          width="309"
          height="120"
          viewBox="0 0 309 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="154.5" cy="52.5" rx="154.5" ry="52.5" fill="black" />
        </svg>
    </div>
  );
};

export default FirstScreen;
