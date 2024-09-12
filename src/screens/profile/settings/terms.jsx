import React from "react";
import Heading from "../../../components/common/heading";
const Terms = () => {
  const terms = [
    {
      title: "App Description and Purpose",
      subtitle:
        "The App is designed to provide photo editing features specifically for government documents, such as passports, driver's licenses, and identification cards. It allows users to edit, enhance, or modify images of these documents for personal use, subject to applicable laws and regulations.",
    },
    {
      title: "User Responsibilities",
      subtitle:
        " You must only use the App in compliance with applicable laws and regulations.b. You are responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account.c. You agree not to use the App for any illegal, unauthorized, or unethical purposes.",
    },
    {
      title: "Intellectual Property Right",
      subtitle:
        "The App and all its contents, including but not limited to software, design elements, logos, trademarks, and documentation, are owned by the Company and are protected by intellectual property laws.b. You may not reproduce, distribute, modify, or create derivative works of the App or its content without prior written consent from the Company.",
    },
    {
      title: "User-Generated Content",
      subtitle:
        "By uploading or submitting any content through the App, you grant the Company a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute the content for the purpose of providing and improving the App.b. You are solely responsible for the content you upload or submit and must ensure it does not infringe upon the rights of any third party or violate any laws.",
    },
    {
      title: "Privacy and Data Security",
      subtitle:
        " The Company respects your privacy and handles your personal information in accordance with its Privacy Policy.b. The App may collect certain information from your device for the purpose of providing and improving the App. By using the App, you consent to such data collection and usage.",
    },
    {
      title: "Limitation of Liability",
      subtitle:
        'The App is provided on an "as-is" and"as available" basis, without warranties of any kind, express or implied.b. The Company shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising out of or in connection with your use of the App.',
    },
    {
      title: "Indemnification",
      subtitle:
        "You agree to indemnify and hold the Company and its affiliates, officers, directors, employees, and agents harmless from any claims, losses, damages, liabilities, or expenses arising out of your use of the App or violation of these Terms.",
    },
    {
      title: "Modification and Termination",
      subtitle:
        " The Company reserves the right to modify or discontinue the App at any time without prior notice.b. These Terms may be amended by the Company from time to time. Your continued use of the App after any modifications constitutes your acceptance of the revised Terms.",
    },
    {
      title: "Governing Law and Jurisdiction",
      subtitle:
        " These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-mona">
      <div className="flex-grow overflow-auto pb-[100px]">
        <div className="py-10 px-4">
          <Heading heading="Terms and Conditions" />
          <div className="mt-5 font-light text-3 leading-[30px]">
            {terms.map((term, index) => (
              <div key={term.title} className="mb-4">
                <h3 className="font-medium">
                  {index + 1}. {term.title}
                </h3>
                <p className="max-w-[353px] ps-2">{term.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Actions />
    </div>
  );
};

export default Terms;
export const Actions = () => {
  const classes =
    "my-10 rounded-full py-3 px-8 font-mona font-medium text-4 leading-[16.8px] tracking-[-2%]";
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-14  bg-custom-gradient">
      <button className={`${classes} text-primary border-[1px] border-primary`}>
        Decline
      </button>
      <button className={`${classes} bg-primary text-white`}>Accept</button>
    </div>
  );
};
