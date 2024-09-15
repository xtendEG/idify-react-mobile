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
    { image: normal, size: "Normal" },
    { image: free, size: "Free" },
    { image: size1, size: "4x3" },
    { image: size2, size: "4x6" },
    { image: size3, size: "3x6" },
    { image: size4, size: "4x4" },
  ];
  const [imageSize, setImageSize] = useState(imageSizes[0]);

  return (
    <div className="font-mona flex flex-col h-screen bg-secondary">
      <Heading  height={"h-[16vh]"}/>
      <div className="flex-grow flex h-[60vh] justify-center items-end bg-white">
        <img src={person} alt="" className=" w-[90%] max-h-full" />
      </div>
      <div className="grid bg-secondary py-4 px-2 grow h-[24vh]">
        <div className="overflow-x-auto  overflow-y-hidden h-fit">
          <div className="flex items-center gap-7 w-fit mx-auto py-2">
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
        <Footer action="Crop" />
      </div>
    </div>
  );
};

export default Crop;
