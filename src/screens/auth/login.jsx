import React from "react";
import InputField, {
  CustomCheckbox,
  PasswordInputField,
} from "../../components/auth/input-fields";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/common/button";
import Divider from "../../components/auth/divider";
import { SocialIcons } from "../../components/auth/providers";
import Heading from "../../components/common/heading";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="font-mona py-10 px-4">
      <Heading heading="Sign In" returnFn={() => navigate(-1)}/>
      <form className="mt-5">
        <InputField label="Email" placeholder="Enter Your Email Address" />
        <PasswordInputField
          label="Password"
          placeholder="Enter Your Password"
        />
        <div className="flex justify-between items-center">
          <CustomCheckbox
            label={
              <span className="text-[14px] leading-[20px] ">Remember Me</span>
            }
            id="checkbox"
          />

          <Link
            to={"/auth/forgot-password"}
            className="text-[14px] leading-[20px] font-semibold underline mt-2"
          >
            Forgot Password?
          </Link>
        </div>
        <Button label="Sign Up" />
        <Divider text="Or" />
        <SocialIcons method="Sign Up" />

        <p className="text-center text-[14px] font-semibold mt-4">
          Don’t have an account?{" "}
          <Link to={"/auth/signup"} className="underline font-semibold">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
