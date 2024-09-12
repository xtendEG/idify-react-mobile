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
        {
          image: brightness,
          actionName: "Brightness",
        },
        {
          image: contrast,
          actionName: "Contrast",
        },
        {
          image: triangle,
          actionName: "Clarity",
        },
        {
          image: saturation,
          actionName: "Saturation",
        },
        {
          image: curve,
          actionName: "Hue",
        },
    ]
    const [adjustOption, setAdjustOption] = useState(adjustOptions[0]);

  return (
    <div className="font-mona flex flex-col justify-between h-screen pb-10 bg-[#151412]">
      <Heading  />
      <div className="grow flex justify-center bg-white items-end">
        <img src={person} alt="" className="h-[485px]" />
      </div>
      <div className="bg-[#151412] pt-10 px-2">
        <Slider/>
       <div className="flex justify-center">

        <div className="flex items-center  gap-[28px] overflow-auto">
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
        <Footer action={"Adjust"} />
      </div>
    </div>
  );
};

export default Adjust;
