import React, { useState } from "react";
import Heading from "../../../components/common/heading";
import pk from "../../../assets/images/settings/languages/pakistan.svg";
import us from "../../../assets/images/settings/languages/america.svg";
import ksa from "../../../assets/images/settings/languages/saudi-arabia.svg";
const Languages = () => {
  const languages = [
    {
      name: "English",
      flag: us,
    },
    {
      name: "Arabic",
      flag: ksa,
    },
    {
      name: "Urdu",
      flag: pk,
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  return (
    <div className="relative font-mona py-10 px-4 ">
      <Heading heading={"Languages"}  />
      <div className="flex flex-col justify-center items-center h-screen">
        {languages.map((language) => (
          <div
            onClick={() => setSelectedLanguage(language.name)}
            key={language.name}
            className={`flex items-center justify-between w-full rounded-[10px] mb-4 bg-[#F6F7F8] px-5 py-4  border-[1px] ${
              language.name == selectedLanguage
                ? " border-primary"
                : "border-transparent"
            }`}
          >
            <div className="flex items-center gap-2">
              <Radio isSelected={language.name == selectedLanguage} />
              <h3 className="text-[14px] font-medium">{language.name}</h3>
            </div>
            <img src={language.flag} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;

const Radio = ({ isSelected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle cx="10" cy="10" r="9.25" stroke="#D7D7D7" strokeWidth="1.5" />
      {isSelected && <circle cx="10" cy="10" r="7" fill="#1CD29B" />}
    </svg>
  );
};
