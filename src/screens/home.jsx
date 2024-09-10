import React from "react";
import Heading from "../components/common/heading";
import Subheading from "../components/common/subheading";
import id from "../assets/id.svg";
import primit from "../assets/primit.svg";
import visa from "../assets/visa.svg";
import passport from "../assets/passport.svg";
import family from "../assets/family-id.svg";
import health from "../assets/health.svg";
import license from "../assets/license.svg";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const services = [
    {
      title: "National ID Card",
      svg: id,
      action: "",
    },
    {
      title: "Residence Permit",
      svg: primit,
      action: "",
    },
    {
      title: "Passport",
      svg: passport,
      action: "",
    },
    {
      title: "Driving License",
      svg: license,
      action: "",
    },
    {
      title: "Family ID Card",
      svg: family,
      action: "",
    },
    {
      title: "Health Card",
      svg: health,
      action: "",
    },
    {
      title: "Visa",
      svg: visa,
      action: "",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="font-mona py-10 px-4 h-custom-screen">
      <Heading heading="Home" returnFn={() => navigate(-1)}/>
      <Subheading
        heading="Welcome To Idify!"
        subHeading="Discover your needed template requirements and get started!"
      />
      <SearchInput />
      <div className="mt-5">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            svg={service.svg}
            action={service.action}
          />
        ))}
      </div>
    </div>
  );
};
const SearchInput = () => {
  return (
    <div className="relative ">
      <input
        type="password"
        placeholder={"Search"}
        className="border-[1px] border-[#D7D7D7] placeholder:text-[#D7D7D7] placeholder:text-[16px] rounded-full w-full h-[60px] px-10 focus-visible:outline-[#0073E7]"
      />
      <button className="absolute left-5 top-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M14.5 14.5L10.5 10.5M11.8333 7.16667C11.8333 9.744 9.744 11.8333 7.16667 11.8333C4.58934 11.8333 2.5 9.744 2.5 7.16667C2.5 4.58934 4.58934 2.5 7.16667 2.5C9.744 2.5 11.8333 4.58934 11.8333 7.16667Z"
            stroke="#D7D7D7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
const ServiceCard = ({ title, svg, action }) => {
  return (
    <div className="flex justify-between items-center p-5 rounded-[16px] mt-4 w-full shadow-custom ">
      <div className="flex items-center gap-4">
        <div className="w-[26px] h-[26px] rounded-full bg-[#EFFFF8] flex items-center justify-center">
          <img src={svg} alt="" />
        </div>
        <h2 className="text-[14px] font-medium">{title}</h2>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6.26414 9.26768C6.43332 9.09628 6.66274 9 6.90196 9C7.14118 9 7.37061 9.09628 7.53978 9.26768L12.0054 13.7932L16.4711 9.26768C16.6413 9.10114 16.8691 9.00899 17.1057 9.01107C17.3422 9.01316 17.5685 9.10931 17.7358 9.27882C17.903 9.44832 17.9979 9.67763 18 9.91734C18.002 10.1571 17.9111 10.388 17.7468 10.5604L12.6433 15.7323C12.4741 15.9037 12.2447 16 12.0054 16C11.7662 16 11.5368 15.9037 11.3676 15.7323L6.26414 10.5604C6.09501 10.389 6 10.1565 6 9.91405C6 9.67163 6.09501 9.43913 6.26414 9.26768Z"
          fill="#151412"
        />
      </svg>
    </div>
  );
};
