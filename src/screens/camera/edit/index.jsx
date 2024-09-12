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
    {
      image: stick,
      actionName: "Enhance",
      to: "/camera/edit/enhance",
    },
    {
      image: cropRotate,
      actionName: "Rotate",
      to: "/camera/edit/rotate",
    },
    {
      image: crop,
      actionName: "Crop",
      to: "/camera/edit/crop",
    },
    {
      image: adjust,
      actionName: "Adjust",
      to: "/camera/edit/adjust",
    },
    {
      image: resize,
      actionName: "Resize",
    },
    {
      image: remove,
      actionName: "Remove Background",
    },
  ];
  const navigate = useNavigate();
  const [samePageEdit, setSamePageEdit] = useState({
    open: false,
    actionName: "",
  });
  const content = {
    title: " National ID Service",
    subtitle:
      "Before continuing your process, you may need to be aware of some requirements.",
    desc: `•Size: The photo should be 4 cm x 6 cm

•Color and Background: The photo should be in color, with a white or off-white background. The background should be plain and without any patterns or shadows.

•Head Position: The head should be directly facing the camera, with the face fully visible. The head should not be tilted or turned in any direction. Both ears should be visible.
•Expression and Eyes: The expression should be neutral, with the mouth closed. The eyes should be open and clearly visible, with no reflections or red-eye effect caused by the camera flash.
•Attire: The photo should be taken with the person wearing normal, everyday attire. Hats, headscarves, or other head coverings are not allowed, except for religious purposes. However, the face should be fully visible from the bottom of the chin to the hairline.
•Glasses: If the person wears glasses, the eyes should be clearly visible without any reflections. Sunglasses or tinted glasses are not allowed.
•Photo Quality: The photo should be of high quality, with good resolution and sharpness. It should not be blurry, grainy, or pixelated.`,
  };
  // const [confirmDialog, setConfirmDialog] = useState(true);
  return (
    <div className="font-mona flex flex-col justify-between h-screen pb-10 bg-[#151412]">
      {/* <ConfirmDialog
        isDialogOpen={confirmDialog}
        setIsDialogOpen={setConfirmDialog}
        content={content}
      /> */}
      <Heading pb={samePageEdit.open ? "pb-5" : "pb-20"} />
      <div className="grow flex justify-center bg-white items-end">
        <img src={person} alt="" className="h-[485px]" />
      </div>

      <div
        className={`bg-[#151412]  px-4 ${
          samePageEdit.open ? " pt-7 pb-7" : " pt-12 pb-10"
        } `}
      >
        {samePageEdit.open && samePageEdit.actionName === "Resize" && (
          <Resize />
        )}
        <div className="flex items-start gap-[24px] overflow-auto ">
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
        {samePageEdit.open && <Footer action={samePageEdit.actionName} />}
      </div>
    </div>
  );
};

export default Edit;

const Resize = () => {
  return (
    <div className="flex mb-5 justify-between px-8 gap-4">
      <div className="flex gap-3 items-center ">
        <h6 className="text-white text-3">Width</h6>
        <input
          type="text"
          className={`border-[1px] bg-transparent text-white border-[#D7D7D7] rounded-full max-w-[70px] py-2 w text-center focus-visible:outline-none  `}
          value={"4 cm"}
        />
      </div>
      <div className="flex gap-3 items-center ">
        <h6 className="text-white text-3">Height</h6>
        <input
          type="text"
          className={`border-[1px] bg-transparent text-white border-[#D7D7D7] rounded-full py-2 w max-w-[70px] text-center focus-visible:outline-none  `}
          value={"10 cm"}
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
        <div className="">
          <h3 className="text-4 leading-[15.47px] font-semibold ">
            {title}
          </h3>

          {subtitle && (
            <h5 className="text-3  leading-[13.54px] max-w-[298px] my-4">
              {subtitle}{" "}
            </h5>
          )}
          <StructuredTextDisplay className="leading-[22px] text-2 font-light" text={desc} />
        </div>
      }
      footer={
        <>
          <button
            onClick={() => setIsDialogOpen(false)}
            className="bg-primary text-3 font-medium leading-[16.8px] tracking-[-0.28px] px-7 py-2 rounded-full text-white mx-auto mt-3"
          >
           Continue
          </button>
        </>
      }
    />
  );
};
