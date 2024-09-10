import React from "react";
import step1 from "../../assets/step-1.png";
import step2 from "../../assets/step-2.png";
import step3 from "../../assets/step-3.png";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
const Stpes = () => {
  const StepArr = [
    {
      title: "Step One",
      subtitle: "Take a new photo of yourself or import from the gallery",
      img: step1,
    },
    {
      title: "Step Two",
      subtitle: "AI powered engine removes background",
      img: step2,
    },
    {
      title: "Step Three",
      subtitle:
        "Choose a template size and enhance your photo quality then save as Jpg or png",
      img: step3,
    },
  ];
  const [step, setStep] = React.useState(0);
  const navigate = useNavigate();
  const handleNext = () => {
    if (step >= 2) {
      navigate("/start/welcome");
    }
    setStep(step + 1);
  };
  const handlePrev = () => {
    if (step <= 0) {
      return;
    }
    setStep(step - 1);
  };
  return (
    <div className="font-mona px-4 flex flex-col items-center justify-between gap-5 min-h-screen py-10">
      <div>
        <img src={StepArr[step].img} alt="" className="mt-24" />
        <div className="text-center">
          <h2 className="text-[24px] leading-[28.8px] tracking-[-0.48px] font-medium my-5 ">
            {StepArr[step].title}
          </h2>
          <p className="text-[14px] leading-[16.8px] tracking-[-0.28px] font-light max-w-[228px] mx-auto">
            {StepArr[step].subtitle}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {[0, 1, 2].map((item) => (
          <Dot key={item} active={item === step} />
        ))}
      </div>
      <Button
        label="Next"
        bg="bg-[#151412]"
        attr={{
          onClick: handleNext,
        }}
      />
      {step > 0 && (
        <button className="absolute top-10 left-4" onClick={handlePrev}>
          <img src={arrow} alt="" />
        </button>
      )}
    </div>
  );
};

export default Stpes;

const Dot = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      className={` ${active && "w-[22px] fill-primary"}`}
    >
      <circle
        cx="3.5"
        cy="3.5"
        r={active ? "10" : "3.5"}
        fill="#D9D9D9"
        className={` ${active && "fill-primary"}`}
      />
    </svg>
  );
};
