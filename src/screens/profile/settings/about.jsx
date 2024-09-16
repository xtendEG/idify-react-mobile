import React from "react";
import AppLayout from "../../../components/common/app-layout";

const About = () => {
  const about = [
    "Document Editing: With Idify, you can easily edit and enhance document images. Adjust brightness, contrast, or crop the image to improve clarity and legibility.",
    "User-Friendly Interface: We have designed the app with a clean and intuitive interface, ensuring a seamless user experience. The app's features and functionalities are easily accessible, making it simple for users of all levels of technical expertise to navigate and utilize the editing tools.",
    "Privacy and Security: At Idify, we prioritize the privacy and security of your personal information. We adhere to strict data protection practices and comply with applicable laws and regulations. Your information is encrypted and stored securely, and we do not share your data with third parties without your consent. For more details, please refer to our Privacy Policy.",
    "App Updates and Support: We are committed to continually improving our app's performance and introducing new features. Regular updates ensure that you have access to the latest enhancements and bug fixes. Our dedicated support team is available to assist you with any questions or issues you may encounter while using the app.",
    "Legal Compliance: It's important to note that Idify is intended for personal use only and must be used in accordance with applicable laws and regulations. Using edited documents for fraudulent purposes or any illegal activities is strictly prohibited. We encourage users to familiarize themselves with the guidelines provided by relevant authorities regarding the use and acceptability of edited documents.",
  ];
  return (
    <AppLayout headingTitle={"About"} headingBg={"bg-white"}>
      <div className="mt-5 font-light text-3 leading-[30px] pb-[90px]">
        <p>
          Idify is a secure mobile application designed to assist you in editing
          and enhancing images of government documents. Our app provides a
          convenient and efficient way to make visual adjustments to documents
          such as passports, driver's licenses, and identification cards.
        </p>
        <h2 className="font-medium my-4">Key Features:</h2>
        {about.map((item, index) => (
          <p className="mb-4 max-w-[356px]" key={item}>
            {index + 1}. {item}
          </p>
        ))}
        <div className="fixed bottom-0 left-0 right-0  bg-custom-gradient h-[138px]"></div>
      </div>
    </AppLayout>
  );
};

export default About;
