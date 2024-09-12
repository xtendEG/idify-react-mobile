import React from "react";
import Heading from "../../../../components/common/heading";
import Dropdown from "../../../../components/common/dropdown";
import upload from "../../../../assets/images/settings/upload.svg";
import { Button } from "../../../../components/common/button";
import { useNavigate } from "react-router-dom";
const CreateTicket = () => {
  const ticketTypes = ["Refund", "Report"];
  const navigate = useNavigate();
  return (
    <div className="font-mona py-10 px-4 pb-4 ">
      <Heading heading="Support Tickets" />
      <div className="mt-5">
        <h2 className="text-[18px] font-medium mb-4">
          Create Ticket for your problem
        </h2>
        <form>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex justify-between">
              <label className=" text-[16px] font-medium lead">Title</label>
              <Dropdown label={"Ticket Type"} options={ticketTypes} />
            </div>
            <input
              type="text"
              placeholder={"Enter Your Ticket Title"}
              className="border-[1px] border-[#D7D7D7] placeholder:text-[#D7D7D7] placeholder:text-[16px] rounded-[10px] w-full h-[54px] px-5 focus-visible:outline-[#0073E7]"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label className=" text-[16px] font-medium lead">Description</label>

            <textarea
              rows={5}
              placeholder={"Enter your problem description "}
              className="border-[1px] border-[#D7D7D7] placeholder:text-[#D7D7D7] placeholder:text-[16px] rounded-[10px] w-full py-5 px-5 focus-visible:outline-[#0073E7]"
            />
          </div>
          <div className="flex flex-col  mt-5">
            <label className=" text-[16px] font-medium">Attachments</label>
            <p className="text-[14px] text-[#0073E7] mb-2">JPJ - PNG - PDF</p>
            <div className="relative">
              <input
                type="file"
                className="absolute inset-0 opacity-0 z-10 cursor-pointer"
              />
              <div
                placeholder={"Enter your problem description "}
                className=" border-[1px] border-dashed border-[#0073E7] rounded-[10px] flex items-center justify-center gap-2 w-full h-[60px]"
              >
                <img src={upload} alt="" />
                <span className="text-[#0073E7] text-[12px]">
                  Drop your attachments
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button
              label={"Save"}
              attr={{
                className: " text-white mt-8 mb-5",
                onClick: () => navigate("/profile/settings/support"),
              }}
            />
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
