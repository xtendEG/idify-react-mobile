import React from "react";
import AppLayout from "../../components/common/app-layout";
import CheckoutLayout from "../../components/checkout/layout";
import logo from "../../assets/images/logo-text.png";
import share from "../../assets/images/common/share.svg";
import download from "../../assets/images/common/download.svg";
import { Button } from "../../components/common/button";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const invoiceDetails = {
    to: {
      name: "Mohamed Khaled",
      phone: "+966239765498",
      email: "mohamed.khaled@gmail.com",
    },
    from: {
      name: "Idify",
      email: " Idify@gmail.com",
      address: "Saudi Arabia",
    },
    invoice_info: {
      number: "#576712",
      date: "10/5/2024",
      paymentMethod: "PayPal",
    },
    services: [
      {
        name: "Visa Template",
        quantity: 1,
        unit_price: 5,
        total_price: 5,
      },
      {
        name: "Remove Background",
        quantity: 1,
        unit_price: 5,
        total_price: 5,
      },
      {
        name: "Adjust",
        quantity: 1,
        unit_price: 5,
        total_price: 5,
      },
    ],
  };
  const navigate = useNavigate();
  return (
    <AppLayout headingTitle={"Checkout"} headingBg={"bg-white"}>
      <CheckoutLayout currentStep={3}>
        <div className=" bg-white p-5 rounded-lg shadow-md tracking-[-0.02em]">
          <div className="flex items-center justify-between pb border-b-[1px] border-[#D7D7D7]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img src={logo} alt="" />

                <h1 className="text-3 font-semibold leading-[19.2px] tracking-[-0.02em]">
                  Invoice
                </h1>
              </div>
              <div className="mb-8 text-[6px]  leading-[7.2px]  flex flex-col gap-1">
                <p className="text-[8px] leading-[9.6px] font-semibold ">
                Invoice Info
                </p>

                <p>
                  <span className="font-semibold">Invoice Number:</span>
                  {invoiceDetails.invoice_info.number}
                </p>
                <p>
                  <span className="font-semibold">Invoice Date:</span>
                  {invoiceDetails.invoice_info.date}
                </p>
                <p>
                  <span className="font-semibold">Payment Method: </span>{" "}
                  {invoiceDetails.invoice_info.paymentMethod}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div className="text-[6px]  leading-[7.2px] flex flex-col gap-1">
                <p className="text-[8px] leading-[9.6px] font-semibold ">To</p>
                <p>
                  <span className="font-semibold">Client Name: </span>
                  {invoiceDetails.to.name}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">Client Mobile: </span>
                  {invoiceDetails.to.phone}
                </p>
                <p>
                  <span className="font-semibold">Client Email: </span>
                  {invoiceDetails.to.email}
                </p>
              </div>
              <div className="mb-8 text-[6px]  leading-[7.2px]  flex flex-col gap-1">
                <p className="text-[8px] leading-[9.6px] font-semibold">From</p>

                <p>
                  <span className="font-semibold">Company Name: </span>
                  {invoiceDetails.from.name}
                </p>
                <p>
                  <span className="font-semibold">Company Email: </span>
                  {invoiceDetails.from.email}
                </p>
                <p>
                  <span className="font-semibold">Company Address: </span>{" "}
                  {invoiceDetails.from.address}
                </p>
              </div>
            </div>
          </div>

          <table className="w-full mt-5 border-[1px] border-[#F6F7F8]">
            <thead className="bg-[#F6F7F8] text-[8px] leading-[9.6px]">
              <tr>
                <th className="font-medium py-2 ps-8 text-left w-1/3">
                  Service
                </th>
                <th className="font-medium py-2 text-start w-1/6">
                  Quantity
                </th>
                <th className="font-medium py-2 text-start w-1/6">
                  Unit Price
                </th>
                <th className="font-medium py-2 pe-8 text-start w-1/6">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceDetails.services.map((service, index) => (
                <tr
                  key={index}
                  className={` text-[7px] leading-[8.4px] ${
                    index % 2 ? "bg-[#F6F7F8]" : ""
                  }`}
                >
                  <td className="py-2 ps-8 text-start w-1/3">{service.name}</td>
                  <td className="py-2  text-start w-1/6">
                    {service.quantity}
                  </td>
                  <td className="py-2 text-start w-1/6">
                    ${service.unit_price}
                  </td>
                  <td className="py-2 text-start w-1/6">
                    ${service.total_price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-b-[1px] border-[#D7D7D7] pb-2">
            <div className=" max-w-[171px] ms-auto mt-5 ">
              <p className="flex items-center justify-between border-b-[1px] border-[#D7D7D7] pb-2 pe-4  mb-2 text-[8px] leading-[9.6px] font-medium">
                <span>Vat 10 %</span> <span>$5</span>
              </p>
              <p className="flex items-center justify-between pe-4  mb-2 text-[8px] leading-[9.6px] font-medium">
                <span>Total</span> <span>$20</span>
              </p>
            </div>
          </div>

          <p className="text-[8px] leading-[8.4px] font-light mt-3 text-center">
            In case the service does not meet your expectations or there is an
            error, you can request refunds including the reason for the refund.
            Must be requested before a week from the received date.
          </p>
          <div className="flex items-end justify-between mt-14">
            <div className="text-[8px] leading-[10.8px] flex flex-col gap-1 ">
              <p className="font-medium">Thank You!</p>
              <p>We hope to see you again.</p>
              <p>idify@gmail.com</p>
            </div>

            <div className="flex justify-end mt-4 space-x-2">
              <button className="flex items-center justify-center w-8 h-8 bg-white shadow-custom rounded-full">
               <img src={share} alt="" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 bg-primary  active:bg-secondary transition-all duration-150 rounded-full">
               <img src={download} alt="" />
              </button>
            </div>
          </div>
        </div>
          <div className="mt-10 pb-5">

          <Button label="View Photos" attr={{ className: " text-white", onClick: () => navigate("/checkout/view") }} />
          </div>
      </CheckoutLayout>
    </AppLayout>
  );
};

export default Invoice;
