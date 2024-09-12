import React, { useState } from "react";
import Heading from "../../../components/camera/heading";
import person from "../../../assets/images/camera/person.png";
import size1 from "../../../assets/images/camera/4x3.svg";
import size2 from "../../../assets/images/camera/4x6.svg";
import size3 from "../../../assets/images/camera/3x6.svg";
import size4 from "../../../assets/images/camera/4x4.svg";
import free from "../../../assets/images/camera/crop-free.svg";
import normal from "../../../assets/images/camera/normal.svg";
import ActionBox from "../../../components/camera/action-box";
import Footer from "../../../components/camera/footer";
const Crop = () => {
  const imageSizes = [
    {
      image: normal,
      size: "Normal",
    },
    {
      image: free,
      size: "Free",
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
  ];
  const [imageSize, setImageSize] = useState(imageSizes[0]);
  return (
    <div className="font-mona flex flex-col justify-between h-screen  bg-[#151412]">
      <Heading />
      <div className="grow flex justify-center bg-white">
        <img src={person} alt="" className="h-[483px]" />
      </div>
      <div className="bg-[#151412] py-10 px-2">
       <div className="flex justify-center">

        <div className="flex items-center mx-auto gap-[28px] overflow-auto ">
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
        </div>
        <Footer action={"Crop"} />
      </div>
    </div>
  );
};

export default Crop;
