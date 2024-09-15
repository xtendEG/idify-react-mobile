import React from "react";
import avatar from "../../assets/images/profile/avatar.png";
import pen from "../../assets/images/profile/edit.svg";
import TextInputField from "../../components/auth/input-fields";
import { Button } from "../../components/common/button";
import AppLayout from "../../components/common/app-layout";
const Edit = () => {
  return (
      <AppLayout 
        headingTitle={"Edit Profile"}
      >
         <div className="absolute top-0 left-0 right-0 h-[177px] bg-[#EFFFF8] z-[-1]" />
      <div className="mt-[52px] relative w-fit mx-auto">
        <img src={avatar} alt="" className="rounded-full " />
        <div className=" absolute bottom-0 right-0">
          <div className="flex items-center justify-center w-[32px] h-[32px] shadow-custom bg-white rounded-full relative">
            <img src={pen} alt="" />
            <input
              type="file"
              className="absolute inset-0 opacity-0"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <form className="mt-10">
        <TextInputField
          required={false}
          label={"Full Name"}
          placeholder={"Enter Your Full Name"}
          value={"Mohamed Khaled"}
        />
        <TextInputField
          required={false}
          labelClassName={"mt-4"}
          label={"Phone Number"}
          placeholder={"Enter Phone Number"}
          value={"+966239765498"}
        />
        <TextInputField
          required={false}
          labelClassName={"mt-4"}
          label={"Email Address"}
          placeholder={"Enter Your Email Address"}
        />
        <Button
          label={"Save Changes"}
          attr={{ className: "text-white mt-10 mb-4" }}
        />
      </form>
      </AppLayout>
  );
};

export default Edit;
