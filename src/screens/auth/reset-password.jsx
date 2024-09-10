import React from "react";
import { PasswordInputField } from "../../components/auth/input-fields";
import { Button } from "../../components/common/button";
import Heading from "../../components/common/heading";
import Subheading from "../../components/common/subheading";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="font-mona py-10 px-4">
      <Heading heading="Forget Password"returnFn={() => navigate("/auth/login")} />
      <Subheading
        heading="Password recovery"
        subHeading="Please enter your email to recover your password"
      />
      <form className="mt-5">
        <PasswordInputField
          label="Password"
          placeholder="Enter Your Password"
          subtitle="At least 8 characters"
        />{" "}
        <Button label="Save" />
      </form>
    </div>
  );
};

export default ResetPassword;
