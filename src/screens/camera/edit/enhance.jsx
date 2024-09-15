import React from "react";
import person from "../../../assets/images/camera/person.png";
import Heading from "../../../components/camera/heading";
import Footer from "../../../components/camera/footer";
import Slider from "../../../components/common/slider";
import smArrow from "../../../assets/images/camera/small-arrow.svg";

const Enhance = () => {
  return (
    <div className="font-mona flex flex-col h-screen bg-secondary">
      <Heading height={"h-[14vh]"}/>
      <div className="relative flex-grow flex h-[60vh] justify-center items-end bg-white">
        <img src={person} alt="" className=" w-[90%] max-h-full" />
        <div className="absolute top-0 bottom-0 w-[1px] bg-[#D7D7D7] left-1/2 -translate-x-1/2" />
        <div className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-white absolute top-[90%] left-1/2 -translate-x-1/2">
          <img src={smArrow} alt="" />
          <img src={smArrow} className="rotate-180" alt="" />
        </div>
        <span className="absolute top-4 flex items-center justify-center rounded-full text-white w-[66px] bg-[#151412B2] left-6">Before</span>
        <span className="absolute top-4 flex items-center justify-center rounded-full text-white w-[66px] bg-[#151412B2] right-6">After</span>
      </div>
      <div className="grid bg-secondary px-2 py-10 h-[26vh]">
        <div className="mb-2">
        <Slider />
        </div>
        <Footer action="Adjust" />
      </div>
    </div>
  );
};

export default Enhance;