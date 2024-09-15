import React from "react";
import { PasswordInputField } from "../../../components/auth/input-fields";
import { Button } from "../../../components/common/button";
import { Link } from "react-router-dom";
import AppLayout from "../../../components/common/app-layout";

const ChangePassword = () => {
  return (

   <AppLayout
        headingTitle={"Change Password"}
        headingBg={"bg-white"}
     >
       <form className="mt-10">
          <PasswordInputField  required={false} label={"Current Password"} placeholder={"Enter Your Current Password"} />
          <PasswordInputField labelClassName="mt-4" required={false} label={"New Password"} placeholder={"Enter Your New Password "} />
          <PasswordInputField labelClassName="mt-4" required={false} label={"Confirm New Password"} placeholder={"Re-type Your New Password"} />
          <Button  label={"Save Changes"} attr={{ className: "text-white mt-10 mb-4" }} />
          <Button label={"Cancel"} attr={{ className: "text-primary bg-transparent border-[1px] border-primary" }} />
          
          <Link className="text-3 font-medium block mx-auto w-fit underline mt-10" to="/auth/forgot-password">Forgot Password?</Link>
        </form>
     </AppLayout>
  );
};

export default ChangePassword;
