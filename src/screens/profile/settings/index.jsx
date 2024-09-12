import React from "react";
import Heading from "../../../components/common/heading";
import { Link } from "react-router-dom";
import book from "../../../assets/images/settings/book.svg";
import about from "../../../assets/images/settings/about.svg";
import privacyPolicy from "../../../assets/images/settings/privacy-policy.svg";
import language from "../../../assets/images/settings/language.svg";
import ticket from "../../../assets/images/settings/ticket.svg";
import theme from "../../../assets/images/settings/theme.svg";
import deleteIcon from "../../../assets/images/settings/delete.svg";
import password from "../../../assets/images/settings/password.svg";
import help from "../../../assets/images/settings/help.svg";
import { Switching } from "..";
import SmallArrow from "../../../components/common/small-arrow";

const Settings = () => {
  const settingLinks = {
    general: {
      title: "General",
      links: [
        {
          title: "Languages",
          to: "/profile/settings/languages",
          icon: language,
        },
        {
          title: "Light Mode",
          action: "",
          icon: theme,
        },
        {
          title: "About",
          to: "/profile/settings/about",
          icon: about,
        },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        {
          title: "Terms and Conditions",
          to: "/profile/settings/terms",
          icon: book,
        },
        {
          title: "Privacy Policy",
          to: "/profile/settings/privacy",
          icon: privacyPolicy,
        },
        {
          title: "Help & Support",
          to: "/profile/settings/help",
          icon: help,
        },
        {
          title: "Support Ticket",
          to: "/profile/settings/support",
          icon: ticket,
        },
      ],
    },
    account: {
      title: "",
      space: true,
      links: [
        {
          title: "Change Password",
          to: "/profile/settings/change-password",
          icon: password,
        },
      ],
    },
  };
  return (
    <div className="relative font-mona py-10 px-4 ">
      <Heading heading={"Settings"} />
      <div className="mt-7">
        {Object.keys(settingLinks).map((key) => (
          <div key={key} className={settingLinks[key].space && "mt-14"}>
            <h2 className="text-[14px] font-medium mb-4 mt-5">
              {settingLinks[key].title}
            </h2>
            <div className="">
              {settingLinks[key].links.map((link) =>
                link.to ? (
                  <Link
                    className="flex items-center justify-between px-5 py-4 rounded-[10px] bg-[#F6F7F8] mb-3"
                    key={link.title}
                    to={link.to}
                  >
                    <div className="flex items-center gap-2">
                      <img src={link.icon} alt="" />
                      <h3 className="text-[14px]">{link.title}</h3>
                    </div>
                    <SmallArrow className={"rotate-[270deg]"} />
                  </Link>
                ) : (
                  <div
                    className="flex items-center justify-between rounded-[10px] px-5 py-2 bg-[#F6F7F8] mb-3"
                    key={link.title}
                  >
                    <div className="flex items-center gap-2">
                      <img src={link.icon} alt="" />
                      <h3 className="text-[14px]">{link.title}</h3>
                    </div>
                    <Switching />
                  </div>
                )
              )}
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between px-5 py-4 rounded-[10px] bg-[#F6F7F8] mb-3">
          <div className="flex items-center gap-2">
            <img src={deleteIcon} alt="" />
            <h3 className="text-[14px]">Delete Account</h3>
          </div>
          <SmallArrow className={"rotate-[270deg]"} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
