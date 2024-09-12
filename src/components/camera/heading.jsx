import React from 'react'
import CameraArrow from './camera-arrow'
import back from "../../assets/images/camera/back.svg";
import next from "../../assets/images/camera/next.svg";
const Heading = ({pb}) => {
  return (
    <div className={`px-3 pt-12 ${pb||"pb-12"} bg-[#151412] flex justify-between items-center`}>
        <CameraArrow />
        <div className="flex items-center gap-4 ">
          <img src={back} alt="" />
          <img src={next} alt="" />
        </div>
        <button className="font-mona font-medium text-3 leading-[16.8px] tracking-[-0.28px] text-white bg-primary rounded-full px-6 py-2 ">
          Checkout
        </button>
      </div>
  )
}

export default Heading