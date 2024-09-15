// Rotate.jsx
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
    { image: normal, actionName: "Normal" },
    { image: rotateHorizontal, actionName: "Left" },
    { image: rotateVertical, actionName: "Right" },
    { image: rotateHorizontalClockwise, actionName: "Horizontal" },
    { image: rotateVerticalClockwise, actionName: "Vertical" },
  ];
  const [imageRotate, setImageRotate] = useState(imageRotates[0]);

  return (
    <div className="font-mona flex flex-col h-screen bg-secondary">
      <Heading height={"h-[16vh]"} />
      <div className="flex-grow flex h-[60vh] justify-center items-end bg-white">
        <img src={person} alt="" className=" w-[90%] max-h-full" />
      </div>
      <div className="grid bg-secondary py-4 px-2 grow h-[24vh]">
      <div className="overflow-x-auto  overflow-y-hidden h-fit">
          <div className="flex items-center gap-7 w-fit mx-auto py-2">
    
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
        <Footer action="Rotate" />
      </div>
    </div>
  );
};

export default Rotate;
