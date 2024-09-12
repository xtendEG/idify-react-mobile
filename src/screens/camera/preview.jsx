import React from "react";
import { Button } from "../../components/common/button";
import { useNavigate } from "react-router-dom";
import person from "../../assets/images/camera/person.png";
import CameraArrow from "../../components/camera/camera-arrow";
const Preview = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between h-screen ">
      <div className="px-3 pt-12 py-10 bg-[#151412]">
        <CameraArrow  />
      </div>
      <div className="grow">
        <img src={person} alt="" />
      </div>
      <div className="bg-[#151412] pt-14 pb-20 px-3">
        <Button
          label="Remove Background"
          attr={{ className: "w-full text-white" }}
        />
        <Button
          label="Edit"
          attr={{
            className:
              "w-full bg-transparent text-primary border-[1px] border-primary mt-5",
            onClick: () => navigate("/camera/edit"),
          }}
        />
      </div>
    </div>
  );
};

export default Preview;


