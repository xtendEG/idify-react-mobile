import React, { useState } from "react";
import pk from "../../../assets/images/settings/languages/pakistan.svg";
import us from "../../../assets/images/settings/languages/america.svg";
import ksa from "../../../assets/images/settings/languages/saudi-arabia.svg";
import AppLayout from "../../../components/common/app-layout";
import Radio from "../../../components/common/radio";
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
    <AppLayout headingTitle={"Languages"} headingBg={"bg-white"}>
      <div className="flex flex-col justify-center items-center h-[calc(100vh-150px)]">
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
              <h3 className="text-3 font-medium">{language.name}</h3>
            </div>
            <img src={language.flag} alt="" />
          </div>
        ))}
      </div>
    </AppLayout>
  );
};

export default Languages;

