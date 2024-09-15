import React from "react";
import { PasswordInputField } from "../../components/auth/input-fields";
import { Button } from "../../components/common/button";
import Subheading from "../../components/common/subheading";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/common/app-layout";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <AppLayout
      headingTitle={"Reset Password"}
      headingBg={"bg-white"}
      returnFn={() => navigate("/auth/login")}
    >
      <Subheading
        heading="Password recovery"
        subHeading="Please enter your new password"
      />
      <form className="mt-5">
        <PasswordInputField
        required={true}
          label="Password"
          placeholder="Enter Your Password"
          subtitle="At least 8 characters"
        />{" "}
        <Button attr={{ className: "mt-8 mb-5 text-white" }} label="Save" />
      </form>
    </AppLayout>
  );
};

export default ResetPassword;
