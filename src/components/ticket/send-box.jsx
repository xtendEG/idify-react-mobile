import React from "react";
import send from "../../assets/images/settings/send.svg";
import attachment from "../../assets/images/settings/attatchment.svg";
const SendBox = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 px-2 bg-custom-gradient flex gap-4 items-center py-8">
      <div className="grow relative">
        <input
          type="text"
          placeholder={"Reply with a message"}
          className="border-[1px] w-full  border-[#D7D7D7] placeholder:text-[#D7D7D7] placeholder:text-4 rounded-full  h-[53px] px-6 focus-visible:outline-[#0073E7]"
        />
        {/*  should add input file here */}
        <img
          src={attachment}
          className="absolute top-1/2 -translate-y-1/2 right-6"
          alt=""
        />
      </div>

      <button className="flex items-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-mona">
        <span className="text-3 font-medium leading-[16.8px] tracking-[-0.28px]">
          Send
        </span>
        <img src={send} alt="" />
      </button>
    </div>
  );
};

export default SendBox;
