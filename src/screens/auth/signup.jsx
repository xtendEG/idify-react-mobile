import React from "react";
import InputField, {
  CustomCheckbox,
  PasswordInputField,
} from "../../components/auth/input-fields";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/button";
import Divider from "../../components/auth/divider";
import { SocialIcons } from "../../components/auth/providers";
import Heading from "../../components/common/heading";
const Signup = () => {
  return (
    <div className="font-mona py-10 px-4">
      <Heading heading="Sign Up"  />
      <form className="mt-5">
        <InputField label="Full Name" placeholder="Enter Your Full Name" />
        <InputField label="Email" placeholder="Enter Your Email Address" />
        <InputField
          label="Phone Number"
          placeholder="Enter Your Phone Number"
        />
        <PasswordInputField
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
    </div>
  );
};

export default Signup;
