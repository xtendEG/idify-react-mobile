import React from "react";
import Stepper from "../common/stepper";

const Layout = ({ currentStep, children }) => {
  return (
    <div>
      <Stepper
        currentStep={currentStep}
        steps={["Order", "Payment", "Invoice"]}
      />
      <div className="mt-24 flex flex-col h-[calc(100vh-350px)]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
