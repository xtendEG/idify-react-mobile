import React from "react";
import Heading from "../../components/common/heading";
import person from "../../assets/images/profile/history/person-2.png";
import Dropdown from "../../components/common/dropdown";
import { Button } from "../../components/common/button";

const CreateAlbum = () => {
  return (
    <div className="relative font-mona py-10 px-4 ">
      <Heading heading={"Generate Album"} />
     <div className="mt-10">
        <div className="flex gap-4">
          <div className="rounded-[10px] overflow-hidden border-[1px] border-[#D7D7D7] w-[78px] h-[78px] pt-2 px-1">
            <img
              src={person}
              alt=""
              className=" scale-[1.2]  h-[98.28px] object-cover object-top"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2>National ID</h2>
            <h6 className="text-3 leading-[16.41px] tracking-[-0.28px]">
              <span className="font-medium">Size: </span>4 cm x 6 cm
            </h6>
          </div>
        </div>
        <form className="mt-10 flex flex-col gap-3">
          <div>
            <h4 className="text-4 font-medium mb-2">Paper Size</h4>
            <Dropdown
              containerClassName={"w-full"}
              label={"Size"}
              options={["A4", "A5", "A6", "A7", "A8"]}
              btnClassName={
                "w-full flex items-center justify-between rounded-[10px] p-3 bg-white text-4  font-medium border-[1px] border-[1px] border-[#D7D7D7] "
              }
              menuClassName={"top-[calc(100%+6px)] w-full"}
            />
          </div>
          <div>
            <h4 className="text-4 font-medium mb-2">Layout</h4>
            <Dropdown
              containerClassName={"w-full"}
              label={"Size"}
              options={["Protriat", "Landscape", "Square"]}
              btnClassName={
                "w-full flex items-center justify-between rounded-[10px] p-3 bg-white text-4  font-medium border-[1px] border-[1px] border-[#D7D7D7] "
              }
              menuClassName={"top-[calc(100%+6px)] w-full"}
            />
          </div>
          <div>
            <h4 className="text-4 font-medium mb-2">Image Copies</h4>
            <input
              type="text"
              className={`border-[1px] border-[#D7D7D7] rounded-[10px] max-w-[149px] h-[60px] px-6 focus-visible:outline-[#0073E7] `}
              value={1}
            />{" "}
          </div>
          <Button
          label={"Generate"}
          attr={{ className: "text-white mt-10 mb-4" }}
        />
        </form>
   
      </div> 
    </div>
  );
};

export default CreateAlbum;
