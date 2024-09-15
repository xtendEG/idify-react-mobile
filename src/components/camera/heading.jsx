import React from "react";
import CameraArrow from "./camera-arrow";
import back from "../../assets/images/camera/back.svg";
import next from "../../assets/images/camera/next.svg";
import { Link } from "react-router-dom";
import Dropdown from "../../components/common/dropdown";
import SmallArrow from "../common/small-arrow";
const Heading = ({ height }) => {
  const options = [
    "Choose Template",
    "National ID Card",
    "Residence Permit",
    "Passport",
    "Visa",
    "Driving License",
    "Family ID Card",
    "Health Card",
  ];
  return (
    <div
      className={`${height} px-3 pt-12 pb-6 bg-secondary flex justify-between items-center`}
    >
      <CameraArrow />
      <div className="flex items-center gap-4 ">
        <img src={back} alt="" />
        <img src={next} alt="" />
      </div>
      <Link to="/checkout" className="font-mona font-medium text-3 leading-[16.8px] tracking-[-0.28px] text-white bg-primary active:bg-secondary transition-all duration-150 rounded-full px-6 py-2 ">
          Checkout
        </Link>
      {/* <Dropdown
        label=""
        options={options}
        btnContent={
          <div className="inline-flex items-center justify-between w-full rounded-[21px] px-3 bg-primary text-2 leading-[14.4px] tracking-[-0.24px] font-medium text-white focus:outline-none">
            <span className="border-e-[1px] border-white px-3 py-1">
              Custom
            </span>
            <SmallArrow fill="white" />
          </div>
        }
        menuClassName="w-full top-[calc(100%+6px)] rounded-none border-none"
        onChange={(selectedOption) => console.log(selectedOption)}
        liClassName={"border-b-transparent"}
      /> */}
    </div>
  );
};

export default Heading;
