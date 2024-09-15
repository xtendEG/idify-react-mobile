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
const Signup = () => {
  return (
    <AppLayout headingTitle={"Sign Up"} headingBg={"bg-white"}>
      <form className="mt-5">
        <InputField required={true} label="Full Name" placeholder="Enter Your Full Name" />
        <InputField required={true} label="Email" placeholder="Enter Your Email Address" />
        <InputField
          required={true}
          label="Phone Number"
          placeholder="Enter Your Phone Number"
        />
        <PasswordInputField
        required={true}
          label="Password"
          placeholder="Enter Your Password"
          subtitle="At least 8 characters"
        />
        <CustomCheckbox
          label={
            <span className="text-3 leading-[20px] -mt-[4px]">
              I accept and agree to comply with Idify’s{" "}
              <Link to={"/"} className="underline font-semibold">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link to={"/"} className="underline font-semibold">
                Privacy policy
              </Link>
            </span>
          }
          id="checkbox"
        />
        <Button attr={{ className: "mt-8 mb-5 text-white" }} label="Sign Up" />
        <Divider text="Or" />
        <SocialIcons method="Sign Up" />

        <p className="text-center text-3 font-semibold mt-4">
          Already have an account?{" "}
          <Link to={"/auth/login"} className="underline font-semibold">
            Sign In
          </Link>
        </p>
      </form>
    </AppLayout>
  );
};

export default Signup;
