import React, { useState } from "react";
import person from "../../../assets/images/camera/person.png";
import Heading from "../../../components/camera/heading";
import brightness from "../../../assets/images/camera/brightness.svg";
import contrast from "../../../assets/images/camera/contrast.svg";
import triangle from "../../../assets/images/camera/triangle.svg";
import curve from "../../../assets/images/camera/curve.svg";
import saturation from "../../../assets/images/camera/saturation.svg";
import ActionBox from "../../../components/camera/action-box";
import Footer from "../../../components/camera/footer";
import Slider from "../../../components/common/slider";

const Adjust = () => {
    const adjustOptions = [
        { image: brightness, actionName: "Brightness" },
        { image: contrast, actionName: "Contrast" },
        { image: triangle, actionName: "Clarity" },
        { image: saturation, actionName: "Saturation" },
        { image: curve, actionName: "Hue" },
    ];
    const [adjustOption, setAdjustOption] = useState(adjustOptions[0]);
    
  return (
    <div className="font-mona flex flex-col h-[100vh] bg-secondary">
      <Heading height={"h-[12vh]"}/>
      <div className="flex-grow flex h-[54vh] justify-center items-end bg-white">
        <img src={person} alt="" className=" w-[90%] max-h-full" />
      </div>
      <div className="grid bg-secondary py-4 px-2 grow h-[34vh]">
        <Slider />
        <div className="overflow-x-auto  overflow-y-hidden">
          <div className="flex items-center gap-7 w-fit mx-auto ">
            {adjustOptions.map((action) => (
              <ActionBox
                key={action.actionName}
                action={{
                  fn: () => setAdjustOption(action),
                  icon: action.image,
                  title: action.actionName,
                  active: action.actionName === adjustOption.actionName,
                }}
              />
            ))}
          </div>
        </div>
        <Footer action="Adjust" />
      </div>
    </div>
  );
};

export default Adjust;