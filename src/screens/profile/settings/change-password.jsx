import React from "react";
import Heading from "../../../components/common/heading";
import { PasswordInputField } from "../../../components/auth/input-fields";
import { Button } from "../../../components/common/button";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div className="font-mona py-10 px-4">
      <Heading heading="Change Password" />
      <form className="mt-10">
        <PasswordInputField  required={false} label={"Current Password"} placeholder={"Enter Your Current Password"} />
        <PasswordInputField labelClassName="mt-4" required={false} label={"New Passwordd"} placeholder={"Enter Your New Password "} />
        <PasswordInputField labelClassName="mt-4" required={false} label={"Confirm New Password"} placeholder={"Re-type Your New Password"} />
        <Button  label={"Save Changes"} attr={{ className: "text-white mt-10 mb-4" }} />
        <Button label={"Cancel"} attr={{ className: "text-primary bg-transparent border-[1px] border-primary" }} />
        
        <Link className="text-3 font-medium block mx-auto w-fit underline mt-10" to="/auth/forgot-password">Forgot Password?</Link>
      </form>
    </div>
  );
};

export default ChangePassword;
