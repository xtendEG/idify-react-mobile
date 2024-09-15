import React from "react";
import InputField, {
  CustomCheckbox,
  PasswordInputField,
} from "../../components/auth/input-fields";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/button";
import Divider from "../../components/auth/divider";
import { SocialIcons } from "../../components/auth/providers";
import AppLayout from "../../components/common/app-layout";
const Login = () => {
  return (
    <AppLayout headingTitle={"Sign In"} headingBg={"bg-white"}>
      <form className="mt-5">
        <InputField required={true} label="Email" placeholder="Enter Your Email Address" />
        <PasswordInputField
          required={true}
          label="Password"
          placeholder="Enter Your Password"
        />
        <div className="flex justify-between items-center">
          <CustomCheckbox
            label={<span className="text-3 leading-[20px] ">Remember Me</span>}
            id="checkbox"
          />

          <Link
            to={"/auth/forgot-password"}
            className="text-3 leading-[20px] font-semibold underline mt-2"
          >
            Forgot Password?
          </Link>
        </div>
        <Button attr={{ className: "mt-8 mb-5 text-white" }} label="Sign Up" />
        <Divider text="Or" />
        <SocialIcons method="Sign Up" />

        <p className="text-center text-3 font-semibold mt-4">
          Don’t have an account?{" "}
          <Link to={"/auth/signup"} className="underline font-semibold">
            Sign Up
          </Link>
        </p>
      </form>
    </AppLayout>
  );
};

export default Login;
