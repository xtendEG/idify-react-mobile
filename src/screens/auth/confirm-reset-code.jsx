import React from "react";
import TextInputField from "../../components/auth/input-fields";
import { Button } from "../../components/common/button";
import Heading from "../../components/common/heading";
import Subheading from "../../components/common/subheading";
import { Link, useNavigate } from "react-router-dom";
import PinInput from "../../components/auth/pin-Input";

const ConfirmResetCode = () => {
  const navigate = useNavigate();
  return (
    <div className="font-mona py-10 px-4">
      <Heading heading="Forget Password" returnFn={() => navigate("/auth/forgot-password")} />
      <Subheading
        heading="Check your email"
        subHeading="Please enter the code we’ve sent you"
      />
      <form className="mt-5">
      <PinInput length={4} onComplete={() => console.log("complete")} />
      <p className="text-center text-4 font-semibold mt-4">
          Didn’t receive it? {" "}
          <Link to={"/auth/signup"} className="underline font-semibold">
            Resend
          </Link>
        </p>
        <Link to={"/auth/reset-password"}>
        <Button label="Recover Password"  attr={{ className: "text-white mt-8 mb-5" }}/></Link>
      </form>
    </div>
  );
};

export default ConfirmResetCode;
