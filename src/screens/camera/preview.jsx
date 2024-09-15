import React from "react";
import { Button } from "../../components/common/button";
import { useNavigate } from "react-router-dom";
import person from "../../assets/images/camera/person.png";
import CameraArrow from "../../components/camera/camera-arrow";

const Preview = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen bg-secondary">
      <div className="px-3 pt-12 py-10 h-[14vh]">
        <CameraArrow />
      </div>
      <div className="flex-grow flex h-[60vh] justify-center items-end bg-white">
        <img src={person} alt="" className=" w-[90%] max-h-full" />
      </div>
      <div className="px-3 pt-8 space-y-5 h-[26vh]">
        <Button
          label="Remove Background"
          attr={{ className: "w-full text-white" }}
        />
        <Button
          label="Edit"
          attr={{
            className: "w-full bg-transparent text-primary border border-primary",
            onClick: () => navigate("/camera/edit"),
          }}
        />
      </div>
    </div>
  );
};

export default Preview;