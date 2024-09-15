import React, { useState } from "react";
import photo from "../../assets/images/camera/photo.svg";
import flip from "../../assets/images/camera/flip.svg";
import size1 from "../../assets/images/camera/4x3.svg";
import size2 from "../../assets/images/camera/4x6.svg";
import size3 from "../../assets/images/camera/3x6.svg";
import size4 from "../../assets/images/camera/4x4.svg";
import fullSize from "../../assets/images/camera/crop-free.svg";
import customSize from "../../assets/images/camera/custom-crop.svg";
import ellipse from "../../assets/images/camera/ellipse.svg";
import { useNavigate } from "react-router-dom";
import ActionBox from "../../components/camera/action-box";
const Camera = () => {
  const imageSizes = [
    {
      image: fullSize,
      size: "Full",
    },
    {
      image: size1,
      size: "4x3",
    },
    {
      image: size2,
      size: "4x6",
    },
    {
      image: size3,
      size: "3x6",
    },
    {
      image: size4,
      size: "4x4",
    },
    {
      image: customSize,
      size: "Custom",
    },
  ];
  const navigate = useNavigate();
  const [imageSize, setImageSize] = useState(imageSizes[0]);
  return (
    <div className=" bg-[#353535] h-screen flex flex-col justify-between">
      <div className="px-2 pt-12 pb-4 flex items-center justify-between bg-secondary">
        <div className="relative w-[56px] h-[56px] bg-primary rounded-[8px] flex items-center justify-center ">
          <img src={photo} alt="" />
          <input type="file" className="absolute inset-0 opacity-0" />
        </div>
        <button>
          <img src={flip} alt="" />
        </button>
      </div>
      <div className="grow relative flex items-center justify-center">
        <img src={ellipse} alt="" />
        <Angle className="absolute bottom-0 right-0 rotate-180" />
        <Angle className="absolute top-0 left-0 " />
        <Angle className="absolute bottom-0 left-0 rotate-[270deg] " />
        <Angle className="absolute top-0 right-0 rotate-[90deg]" />
      </div>
      <div className="bg-secondary py-10 px-2">
        <div className="flex items-center gap-[28px] overflow-auto">
          {imageSizes.map((size) => (
            <ActionBox
            key={size.size}
              action={{
                fn: () => setImageSize(size),
                icon: size.image,
                title: size.size,
                active: size.image === imageSize.image,
              }}
            />
          ))}
        </div>
        <button
          onClick={() => navigate("/camera/preview")}
          className="relative mt-10 mb-2 mx-auto flex items-center justify-center"
        >
          <div className="bg-white w-[67.5px] h-[67.5px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-[80.7px] h-[80.7px] border-[3px] border-white rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default Camera;

const Angle = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      className={className}
    >
      <path
        d="M1.00977 26.3694V1.1527H26.2445"
        stroke="white"
        strokeOpacity="0.5"
      />
    </svg>
  );
};
