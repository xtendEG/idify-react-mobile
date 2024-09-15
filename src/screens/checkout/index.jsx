import React from "react";
import AppLayout from "../../components/common/app-layout";
import { Button } from "../../components/common/button";
import CheckoutLayout from "../../components/checkout/layout";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const orderSummary = [
    {
      service: "Visa Template",
      price: 5,
    },
    {
      service: "Remove Background",
      price: 5,
    },
    {
      service: "Adjust",
      price: 5,
    },
  ];
  const navigate = useNavigate();
  return (
    <AppLayout headingTitle={"Checkout"} headingBg={"bg-white"}>
      <CheckoutLayout currentStep={1}>
          <h2 className="text-4 font-medium leading-[15.47px] mb-4">
            Order Summary
          </h2>
          <div className="grow">
            <div className="shadow-custom rounded-[10px] bg-white mt-2">
              {orderSummary.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border-b-[.5px] border-b-[#D7D7D7]"
                >
                  <p className="text-3 font-medium">{item.service}</p>
                  <p className="text-3 font-medium">$ {item.price}</p>
                </div>
              ))}
              <div className="flex items-center justify-between p-4 ">
                <p className="text-3 font-medium">Total</p>
                <p className="text-3 font-medium">
                  $ {orderSummary.reduce((a, b) => a + b.price, 0)}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button
              label={"Next"}
              attr={{
                className: "text-white",
                onClick: () => navigate("/checkout/payment"),
              }}
            />
            <Button
              label={"cancel"}
              bg={"bg-transparent"}
              attr={{
                className: "text-primary border-[1px] border-primary mt-4 ",
              }}
            />
          </div>
      </CheckoutLayout>
    </AppLayout>
  );
};

export default Checkout;
