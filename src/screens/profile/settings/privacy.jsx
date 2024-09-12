import React from "react";
import Heading from "../../../components/common/heading";
import StructuredTextDisplay from "../../../components/common/formmat-text";
import { Actions } from "./terms";

const Privacy = () => {
  const policy = [
    {
      title: "Information We Collect",
      subtitle:
        "Personal Information: When you use the App, we may collect personal information such as your name, email address, and any other information you provide voluntarily.b. Device Information: We may collect certain information about your device, including device type, operating system, and unique device identifiers.c. Usage Information: We may collect information about how you use the App, including your interactions, preferences, and settings.",
    },
    {
      title: "Use of Information",
      subtitle:
        "We use the collected information to provide and improve the App, personalize your experience, and communicate with you.b. We may use your email address to send you updates, notifications, and promotional materials related to the App. You can opt-out of receiving such communications at any time.c. We may use aggregated and anonymized data for analytical and research purposes.",
    },
    {
      title: "Data Security",
      subtitle:
        "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.b. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security of your information.",
    },
    {
      title: "Data Retention",
      subtitle:
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Policy unless a longer retention period is required or permitted by law.b. You can request the deletion of your personal information by contacting us using the information provided in Section 8.",
    },
    {
      title: "Third-Party Services",
      subtitle:
        "The App may contain links to third-party websites or services. This Policy does not apply to such third-party services, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of those third parties.",
    },
    {
      title: "Children's Privacy",
      subtitle:
        "The App is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete it.",
    },
    {
      title: "Disclosure of Information",
      subtitle: ` We may disclose your personal information to third parties in the following cases:
      • With your consent.
      • To comply with legal obligations or respond to lawful requests.
      • To protect our rights, property, or safety, or the rights, property, or safety of others.
      • In connection with a merger, acquisition, or sale of assets, where your personal information may be transferred as part of the transaction.`,
    },
    {
      title: "Contact Us",
      subtitle:
        "If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at Idify@gmail.com",
    },
  ];
  return (
    <div className="font-mona py-10 px-4 min-h-custom-screen pb-32">
      <Heading heading="Privacy Policy" />{" "}
      <div className="mt-5 font-light text-3 leading-[30px] ">
        <p>
          Idify is a secure mobile application designed to assist you in editing
          and enhancing images of government documents. Our app provides a
          convenient and efficient way to make visual adjustments to documents
          such as passports, driver's licenses, and identification cards.
        </p>
        {policy.map((term, index) => (
          <div key={term.title} className="mb-4 max-w-[357px]">
            <h3 className="font-medium">
              {index + 1}. {term.title}
            </h3>
            <StructuredTextDisplay className="text-3 ps-2" text={term.subtitle} />
          </div>
        ))}
      </div>
      <Actions />
    </div>
  );
};

export default Privacy;