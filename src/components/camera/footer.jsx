import React from "react";
import cancel from "../../assets/images/camera/cancel.svg";
import confirm from "../../assets/images/camera/confirm.svg";
const Footer = ({ action, cancelFn, confirmFn }) => {
  return (
    <div className="flex items-center justify-between px-2 mt-5 border-t-[1px] border-[#393939] pt-4">
        <button onClick={cancelFn}>
        <img src={cancel} alt="" />
        </button>
      <h4 className="text-white text-5 font-medium">{action}</h4>
      <button onClick={confirmFn}>
        <img src={confirm} alt="" />
      </button>
    </div>
  );
};

export default Footer;
