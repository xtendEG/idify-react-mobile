import React, { useState } from "react";
import Heading from "../../components/common/heading";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/profile/avatar.png";
import settings from "../../assets/images/profile/settings.svg";
import profile from "../../assets/images/profile/profile.svg";
import logout from "../../assets/images/profile/logout.svg";
import notification from "../../assets/images/profile/notification.svg";
import recentlyViewed from "../../assets/images/profile/recently-viewed.svg";
import SmallArrow from "../../components/common/small-arrow";

const Profile = () => {
  const links = [
    {
      title: "Settings",
      to: "/profile/settings",
      icon: settings,
    },
    {
      title: "Profile Edit",
      to: "/profile/edit",
      icon: profile,
    },
    {
      title: "Notifications",
      icon: notification,
      action: "",
    },
    {
      title: "History",
      to: "/profile/about",
      icon: recentlyViewed,
    },
  ];
  return (
    <div className="relative font-mona py-10 px-4 ">
      <Heading heading={"Profile"}  />
      <div className="absolute top-0 left-0 right-0 h-[177px] bg-[#EFFFF8] z-[-1]" />
      <div className="mt-[64px]">
        <img src={avatar} alt="" className="rounded-full mx-auto " />
        <div className="text-center">
          <h2 className="text-[18px] font-medium mt-4 mb-2">Mohamed Khaled</h2>
          <p className="text-[14px] font-light">mohamed.khaled@gmail.com</p>
        </div>
      </div>
      <div className="mt-10">
        {links.map((link) =>
          link.to ? (
            <Link
              key={link.title}
              to={link.to}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-[32px] h-[32px] shadow-custom bg-white rounded-full ">
                  <img src={link.icon} alt="" />
                </div>
                <h3 className="text-[14px]">{link.title}</h3>
              </div>
              <SmallArrow className={"rotate-[270deg]"} />
            </Link>
          ) : (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-[32px] h-[32px] shadow-custom bg-white rounded-full ">
                  <img src={link.icon} alt="" />
                </div>
                <h3 className="text-[14px]">{link.title}</h3>
              </div>
              <Switching />
            </div>
          )
        )}
          <Link to="/auth/login" className=" mt-16 flex gap-2 px-1">
            <img src={logout} alt="" />
            <h3 className="text-[14px]">Logout</h3>
        </Link>
      </div>
    </div>
  );
};

export default Profile;



export const Switching = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      onClick={toggleSwitch}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="43"
        viewBox="0 0 57 43"
        fill="none"
        style={{ display: 'block' }}  // Ensure no extra space below the SVG
      >
        <rect y="3" width="51" height="31" rx="15.5" fill={isOn ? "#1CD29B" : "#ccc"} />
        <g filter="url(#filter0_dd_113_4153)">
          <circle
            cx={isOn ? "35.5" : "15.5"}
            cy="18.5"
            r="13.5"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_113_4153"
            x="14"
            y="0"
            width="43"
            height="43"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_113_4153"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_113_4153"
              result="effect2_dropShadow_113_4153"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_113_4153"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};


