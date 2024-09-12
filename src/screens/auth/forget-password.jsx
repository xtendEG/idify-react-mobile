import React from "react";
import TextInputField from "../../components/auth/input-fields";
import { Button } from "../../components/common/button";
import Heading from "../../components/common/heading";
import Subheading from "../../components/common/subheading";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="font-mona py-10 px-4">
      <Heading heading="Forget Password" returnFn={() => navigate("/auth/login")}/>
      <Subheading
        heading="Password recovery"
        subHeading="Please enter your email to recover your password"
      />
      <form className="mt-5">
        <TextInputField label="Email" placeholder="Enter Your Email Address" />
        {/* Link just for testing */}
        <Link to={"/auth/confirm-reset-code"}>
          <Button attr={{ className: "mt-8 mb-5 text-white" }} label="Recover Password" />
        </Link>
      </form>
    </div>
  );
};

export default ForgetPassword;
