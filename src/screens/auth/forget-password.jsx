import React from "react";
import TextInputField from "../../components/auth/input-fields";
import { Button } from "../../components/common/button";
import Subheading from "../../components/common/subheading";
import { Link, useNavigate } from "react-router-dom";
import AppLayout from "../../components/common/app-layout";

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <AppLayout
      headingTitle={"Forget Password"}
      headingBg={"bg-white"}

      returnFn={() => navigate("/auth/login")}
    >
       <Subheading
            heading="Password recovery"
            subHeading="Please enter your email to recover your password"
          />
          <form className="mt-5">
            <TextInputField
            required={true}
              label="Email"
              placeholder="Enter Your Email Address"
            />
            {/* Link just for testing */}
            <Link to={"/auth/confirm-reset-code"}>
              <Button
                attr={{ className: "mt-8 mb-5 text-white" }}
                label="Recover Password"
              />
            </Link>
          </form>
    </AppLayout>
  );
};

export default ForgetPassword;
