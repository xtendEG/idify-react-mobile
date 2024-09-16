import React, { useState } from "react";
import adjust from "../../../assets/images/camera/adjust.svg";
import cropRotate from "../../../assets/images/camera/crop-rotate.svg";
import resize from "../../../assets/images/camera/resize.svg";
import stick from "../../../assets/images/camera/stick.svg";
import crop from "../../../assets/images/camera/crop.svg";
import remove from "../../../assets/images/camera/remove.svg";
import person from "../../../assets/images/camera/person.png";
import { useNavigate } from "react-router-dom";
import Heading from "../../../components/camera/heading";
import ActionBox from "../../../components/camera/action-box";
import Footer from "../../../components/camera/footer";
import Dialog from "../../../components/common/dialog";
import StructuredTextDisplay from "../../../components/common/formmat-text";

const Edit = () => {
  const editOptions = [
    { image: stick, actionName: "Enhance", to: "/camera/edit/enhance" },
    { image: cropRotate, actionName: "Rotate", to: "/camera/edit/rotate" },
    { image: crop, actionName: "Crop", to: "/camera/edit/crop" },
    { image: adjust, actionName: "Adjust", to: "/camera/edit/adjust" },
    { image: resize, actionName: "Resize" },
    { image: remove, actionName: "Remove Background" },
  ];
  const navigate = useNavigate();
  const [samePageEdit, setSamePageEdit] = useState({
    open: false,
    actionName: "",
  });
  const content = {
    title: "National ID Service",
    subtitle:
      "Before continuing your process, you may need to be aware of some requirements.",
    desc: `Size: The photo should be 4 cm x 6 cm

Color and Background: The photo should be in color, with a white or off-white background. The background should be plain and without any patterns or shadows.

Head Position: The head should be directly facing the camera, with the face fully visible. The head should not be tilted or turned in any direction. Both ears should be visible.
Expression and Eyes: The expression should be neutral, with the mouth closed. The eyes should be open and clearly visible, with no reflections or red-eye effect caused by the camera flash.
Attire: The photo should be taken with the person wearing normal, everyday attire. Hats, headscarves, or other head coverings are not allowed, except for religious purposes. However, the face should be fully visible from the bottom of the chin to the hairline.
Glasses: If the person wears glasses, the eyes should be clearly visible without any reflections. Sunglasses or tinted glasses are not allowed.
Photo Quality: The photo should be of high quality, with good resolution and sharpness. It should not be blurry, grainy, or pixelated.`,
  };

  return (
    <div className="font-mona flex flex-col h-screen bg-secondary">
      <Heading height={"h-[14vh]"} pb={samePageEdit.open ? "pb-5" : "pb-16"} />
      <div
        className={`flex-grow flex ${
          samePageEdit.open && samePageEdit.actionName === "Resize"
            ? "h-[45vh]"
            : samePageEdit.open &&
              samePageEdit.actionName === "Remove Background"
            ? "h-[58vh]"
            : "h-[60vh]"
        } justify-center items-end bg-white `}
      >
        <img src={person} alt="" className=" w-[90%] max-h-full" />
      </div>

      <div
        className={`grid bg-secondary pb-4 px-2 grow ${
          samePageEdit.open && samePageEdit.actionName === "Resize"
            ? "h-[34vh] pt-2"
            : samePageEdit.open &&
              samePageEdit.actionName === "Remove Background"
            ? "h-[26vh] pt-2 "
            : "h-[24vh] pt-10"
        } `}
      >
        {samePageEdit.open && samePageEdit.actionName === "Resize" && (
          <Resize />
        )}
       <div className="overflow-x-auto">
       <div className="flex items-start gap-6 w-fit mx-auto py-1 h-fit">
          {editOptions.map((option) => (
            <ActionBox
              key={option.actionName}
              action={{
                fn: () =>
                  option.to
                    ? navigate(option.to)
                    : setSamePageEdit({
                        open: true,
                        actionName: option.actionName,
                      }),
                icon: option.image,
                title: option.actionName,
                active: option.actionName === samePageEdit.actionName,
              }}
            />
          ))}
        </div>
       </div>
        {samePageEdit.open && <Footer action={samePageEdit.actionName} />}
      </div>
    </div>
  );
};

export default Edit;

const Resize = () => {
  return (
    <div className="flex mb-5 justify-between px-4 gap-4">
      <div className="flex gap-3 items-center">
        <h6 className="text-white text-sm">Width</h6>
        <input
          type="text"
          className="border border-[#D7D7D7] bg-transparent text-white rounded-full w-20 py-2 text-center focus:outline-none"
          value="4 cm"
          readOnly
        />
      </div>
      <div className="flex gap-3 items-center">
        <h6 className="text-white text-sm">Height</h6>
        <input
          type="text"
          className="border border-[#D7D7D7] bg-transparent text-white rounded-full w-20 py-2 text-center focus:outline-none"
          value="10 cm"
          readOnly
        />
      </div>
    </div>
  );
};

const ConfirmDialog = ({
  isDialogOpen,
  setIsDialogOpen,
  content: { title, subtitle, desc },
}) => {
  return (
    <Dialog
      isOpen={isDialogOpen}
      setIsOpen={setIsDialogOpen}
      content={
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          {subtitle && (
            <h5 className="text-sm mb-4 max-w-[298px]">{subtitle}</h5>
          )}
          <StructuredTextDisplay className="text-sm leading-6" text={desc} />
        </div>
      }
      footer={
        <button
          onClick={() => setIsDialogOpen(false)}
          className="bg-primary active:bg-secondary transition-all duration-150 text-white text-sm font-medium px-7 py-2 rounded-full mx-auto mt-3"
        >
          Continue
        </button>
      }
    />
  );
};
