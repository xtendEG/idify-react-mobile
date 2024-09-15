import React from "react";
import logo from "../../assets/images/logo.png";
import { Button } from "../../components/common/button";
import { Link, useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="font-mona px-4 grid place-items-center max-h-screen bg-secondary text-white min-h-screen py-10">
      <div className="flex flex-col items-center ">
        <img src={logo} alt="" className="mt-24" />
        <h2 className="text-[24px] leading-[28.8px] tracking-[-0.48px] font-medium mt-12 mb-8">
          Welcome to Idify
        </h2>
        <p className="text-3 leading-[16.8px] tracking-[-0.28px] font-light max-w-[265px] mx-auto text-center">
          Thank you for choosing our app! Get ready to embark on an incredible
          journey. Sign in now to unlock a seamless and enriching user
          experience.
        </p>
      </div>

      <div className="w-full ">
        <Button
          label="Sign In"
          attr={{ onClick: () => navigate("/auth/login"), className: "mt-8 text-white" }}

        />
        <Button
          label="Sign Up"
          attr={{
            className:
              "border-primary border-[1px] bg-transparent text-primary mt-6 mb-5",
            onClick: () => navigate("/auth/signup"),
          }}
        />

        <Link
          className="text-3 leading-[16.8px] tracking-[-0.28px] font-medium block text-center text-primary "
          to="/"
        >
          Continue As A Guest
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
