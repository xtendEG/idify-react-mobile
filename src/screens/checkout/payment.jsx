import React, { useState } from "react";
import AppLayout from "../../components/common/app-layout";
import CheckoutLayout from "../../components/checkout/layout";
import klarna from "../../assets/images/payment/klarna.svg";
import americanExpress from "../../assets/images/payment/american-express.svg";
import mastercard from "../../assets/images/payment/mastercard.svg";
import visa from "../../assets/images/payment/visa.svg";
import paypal from "../../assets/images/payment/paypal.svg";
import Radio from "../../components/common/radio";
import TextInputField, {
  CustomCheckbox,
} from "../../components/auth/input-fields";
import Dialog from "../../components/common/dialog";
import success from "../../assets/images/common/success.png";
import CloseIcon from "../../components/common/close-icon";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const paymentMethods = [
    {
      name: "Credit or Debit Cards",
      flag: (
        <div className="flex items-center gap-1">
          <img src={visa} alt="" />
          <img src={mastercard} alt="" />
          <img src={americanExpress} alt="" />
        </div>
      ),
    },
    {
      name: "PayPal",
      flag: <img src={paypal} alt="" />,
    },
    {
      name: "Klarna",
      flag: <img src={klarna} alt="" />,
    },
  ];
  const [selectedPayment, setSelectedPayment] = useState(
    "Credit or Debit Cards"
  );
  const [showDialog, setShowDialog] = useState(true);
  const navigate = useNavigate();
  return (
    <AppLayout headingTitle={"Checkout"} headingBg={"bg-white"}>
      <CheckoutLayout currentStep={2}>
        <h2 className="text-4 font-medium leading-[15.47px] mb-4">
          Payment Method
        </h2>

        <p className="text-3 italic leading-[13.54px]">
          Select your preferred payment method
        </p>
        <div className="mt-5">
          {paymentMethods.map((payment) => (
            <div
              onClick={() => setSelectedPayment(payment.name)}
              key={payment.name}
              className={`flex items-center justify-between w-full rounded-[10px] mb-4 bg-[#EFFFF8] px-5 py-4  border-[1px] ${
                payment.name == selectedPayment
                  ? " border-primary"
                  : "border-transparent"
              }`}
            >
              <div className="flex items-center gap-2">
                <Radio
                  isSelected={payment.name == selectedPayment}
                  stroke={"#1CD29B"}
                />
                <h3 className="text-3 font-medium">{payment.name}</h3>
              </div>
              {payment.flag}
            </div>
          ))}
        </div>
        <CardForm />
        <div className="flex items-center justify-center mt-10 flex-wrap pb-4">
          <div className="grow">
            <CustomCheckbox
              label={"Save my info for next time"}
              id={"saveInfo"}
            />
          </div>
          <button
            onClick={() => navigate("/checkout/invoice")}
            className="text-3 font-medium leading-[16.8px] tracking-[-0.28px] bg-primary active:bg-secondary transition-all duration-150 text-white px-6 py-4 mt-4 rounded-full font-mona"
          >
            Confirm Order
          </button>{" "}
        </div>
        <SuccessDialog
          isDialogOpen={showDialog}
          setIsDialogOpen={setShowDialog}
        />
      </CheckoutLayout>
    </AppLayout>
  );
};

export default Payment;

const CardForm = () => {
  return (
    <div className="mt-4">
      <h2 className="text-5 font-medium leading-[15.47px] mb-4">
        Card Details
      </h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <TextInputField
            label={"Card Number *"}
            placeholder={"Enter Your Card Number"}
          />
        </div>
        <TextInputField label={"Expiry Date *"} placeholder={"MM/YY"} />
        <TextInputField label={"CVV *"} placeholder={"000"} />
      </form>
    </div>
  );
};

const SuccessDialog = ({ isDialogOpen, setIsDialogOpen }) => {
  return (
    <Dialog
      isOpen={isDialogOpen}
      setIsOpen={setIsDialogOpen}
      content={
        <div className="flex flex-col items-center gap-4 relative">
          <img src={success} alt="" />
          <h3 className="text-4 leading-[20px] font-medium">Order Confirmed</h3>
          <p className="text-3 font-light leading-[20px] text-center">
            Your Order is confirmed successfully, feel free to <br />
            contact us if you encounter any issues
          </p>
          <CloseIcon
            attr={{
              className: "absolute top-0 right-0",
              onClick: () => setIsDialogOpen(false),
            }}
          />
        </div>
      }
      footer={
        <>
          <button
            onClick={() => setIsDialogOpen(false)}
            className="bg-secondary text-3 font-medium leading-[16.8px] tracking-[-0.28px] px-7 py-2 rounded-full text-white mx-auto mt-4"
          >
            Done
          </button>
        </>
      }
    />
  );
};
