import React from "react";
import us from "../../assets/images/settings/languages/america.svg";
import ksa from "../../assets/images/settings/languages/saudi-arabia.svg";
import pk from "../../assets/images/settings/languages/pakistan.svg";
import { Button } from "../../components/common/button";
import { useNavigate } from "react-router-dom";
const ChooseLanguage = () => {
  const languages = [
    {
      name: "Arabic",
      country: "Saudi Arabia",
      flag: ksa,
    },
    {
      name: "English",
      country: "United States",
      flag: us,
    },
    {
      name: "Urdu",
      country: "Pakistan",
      flag: pk,
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="font-mona px-4 py-12">
      <h1 className="text-[24px] leading-[28.8px] tracking-[-0.48px] font-medium mb-8">
        Choose Your <br /> Language
      </h1>
      <div className="flex flex-col items-center">
        {languages.map((language) => (
          <div
            key={language.name}
            className="flex flex-col items-center gap-2 rounded-[10px] mb-4 w-[220px] py-4  border-[1px] border-transparent shadow-custom"
          >
            <img src={language.flag} className="w-24 h-24" alt="" />
           
            <h3 className="text-4 font-medium leading-[19.2px] tracking-[-0.02em]">{language.name}</h3>
            <p className="text-2 italic leading-[14.8px] tracking-[-0.02em]  ">{language.country}</p>
          </div>
        ))}
      <Button label="Next" bg={"bg-secondary"} attr={{ className: "mt-12 text-white",onClick: () => navigate("/start/steps") }} />
      </div>
    </div>
  );
};

export default ChooseLanguage;
