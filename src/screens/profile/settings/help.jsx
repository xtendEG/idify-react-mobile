import React from "react";
import Heading from "../../../components/common/heading";
import AccordionItem, { Accordion } from "../../../components/common/accordion";

const Help = () => {
  const accordion = [
    {
      title: "How does the app work?",
      content:
        "The app allows you to edit, enhance, or modify images of government documents such as passports, driver's licenses, and identification cards. Simply upload the document image and use the available editing features to make the desired changes.",
    },
    {
      title: "Is the app legal to use?",
      content:
        "The app is designed for personal use and complies with applicable laws and regulations. However, it's important to note that using edited documents for fraudulent purposes or any illegal activities is strictly prohibited.",
    },
    {
      title: "Can I use the app offline?",
      content:
        "The app requires an internet connection to download and access the necessary features and functionalities. However, once the app is downloaded and installed, you may be able to use certain editing features offline. Please note that syncing and saving edited documents may require an internet connection.",
    },
    {
      title: "How can I report a technical issue with the app?",
      content:
        "If you encounter any technical issues, glitches, or bugs while using the app, please report them to our support team. You can reach out to us through the provided contact information and provide a detailed contentription of the problem. Our team will investigate and work towards resolving the issue as soon as possible.",
    },
  ];
  return (
    <div className="font-mona py-10 px-4 pb-20">
      <Heading heading="Privacy Policy" />{" "}
      <div className="mt-5 font-light text-3 leading-[30px] ">
        <p>
          Welcome to the Help & Support section. We're here to assist you and
          provide answers to commonly asked questions. If you can't find the
          information you need, please feel free to contact our support team
          using the provided contact information.
        </p>
        <h2 className="mb-4 font-medium">FAQs</h2>
        <Accordion>
          {accordion.map((item, index) => (
            <AccordionItem
              key={index}
              titleSection={
                <h4 className="text-2 leading-[11.6px] font-medium">
                  {item.title}
                </h4>
              }
              content={item.content}
            />
          ))}
        </Accordion>
        <div className="text-3 leading-[20px] font-light max-w-[320px]">
          <h3 className="my-4 font-medium">Contacting Support</h3>
          <p>
            If you have any further questions or require assistance, our support
            team is here to help. Please reach out to us using
          </p>
          <p className="my-1 font-bold ps-2">• Email: Idify@gmail.com</p>
          <p>
            When contacting support, please provide a detailed description of
            the issue or question to help us assist you more effectively. Our
            support team will strive to respond to your inquiries in a timely
            manner.
          </p>
          <h3 className="my-4 font-medium">User Feedback</h3>
          <p>
            We value your feedback and suggestions to improve our app and
            services. If you have any ideas, feature requests, or general
            feedback, please don't hesitate to share them with us. Your input is
            highly appreciated and helps us shape the future of the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
