import React, { useState } from "react";
import Heading from "../../../components/camera/heading";
import rotateHorizontal from "../../../assets/images/camera/rotate-to-horizontal-line.svg";
import rotateHorizontalClockwise from "../../../assets/images/camera/horizontal-rotate-clockwise.svg";
import rotateVertical from "../../../assets/images/camera/rotate-to-vertical-line.svg";
import rotateVerticalClockwise from "../../../assets/images/camera/horizontal-rotate-clockwise_2.svg";
import person from "../../../assets/images/camera/person.png";
import normal from "../../../assets/images/camera/normal.svg";
import ActionBox from "../../../components/camera/action-box";
import Footer from "../../../components/camera/footer";
const Rotate = () => {
  const imageRotates = [
    {
      image: normal,
      actionName: "Normal",
    },
    {
      image: rotateHorizontal,
      actionName: "Left",
    },
    {
      image: rotateVertical,
      actionName: "Right",
    },
    {
      image: rotateHorizontalClockwise,
      actionName: "Horizontal",
    },
    {
      image: rotateVerticalClockwise,
      actionName: "Vertical",
    },
 
  ];
  const [imageRotate, setImageRotate] = useState(imageRotates[0]);
  return (
    <div className="font-mona flex flex-col justify-between h-screen pb-10 bg-[#151412]">
      <Heading />
      <div className="grow flex justify-center bg-white">
        <img src={person} alt="" className="h-[483px]" />
      </div>
      <div className="bg-[#151412] pt-10 px-2">
       <div className="flex justify-center">
       <div className="flex items-center  mx-auto gap-[28px] overflow-scroll">
          {imageRotates.map((action) => (
            <ActionBox
              key={action.actionName}
              action={{
                fn: () => setImageRotate(action),
                icon: action.image,
                title: action.actionName,
                active: action.actionName === imageRotate.actionName,
              }}
            />
          ))}
        </div>
       </div>
        <Footer action={"Rotate"} />
      </div>
    </div>
  );
};

export default Rotate;
