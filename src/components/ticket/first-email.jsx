import React from "react";
import Status from "../common/status";
import Attachment from "./attachment";

const FirstEmail = () => {
  const attatchments = [
    {
      name: "Document",
      size: "2.4 MB",
    },
    {
      name: "JPJ Photo",
      size: "2.2 MB",
    },
  ];

  return (
    <div className="mt-10 ">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-medium">Mistake in photo size</h2>
        <Status status={"pending"} />
      </div>
      <div className="mt-5 border-b-[1px] border-[#D7D7D7] pb-5 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-[32px] h-[32px] bg-[#EFFFF8] text-[#1CD29B] font-semibold rounded-full ">
              M
            </div>
            <h3 className="text-3 ">Mohamed Khaled</h3>
          </div>
          <h6 className="text-2 text-[#9D9D9D]">1 day ago</h6>
        </div>
        <div className="mt-5 flex items-center gap-4">
          {attatchments.map(({ name, size }) => (
            <Attachment name={name} size={size} />
          ))}
        </div>
      </div>
      <div className="py-5 border-b-[1px] border-[#D7D7D7] ">
        <h3 className="text-5 font-medium mb-4">Description</h3>
        <p className="text-3 leading-[20px] font-light">Lorem ipsum dolor sit amet. Quo quis voluptas ut perspiciatis odit est molestiae quia aut veniam dolores ad galisum nemo qui voluptatem sequi. Sed accusantium sint sed necessitatibus voluptatem ab earum suscipit eos quae libero.</p>
      </div>
    </div>
  );
};

export default FirstEmail;
