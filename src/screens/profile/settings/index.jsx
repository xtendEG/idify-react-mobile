import React, { useState } from "react";
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
import Dialog from "../../../components/common/dialog";
import trash from "../../../assets/images/settings/trash.png";
import CloseIcon from "../../../components/common/close-icon";
import AppLayout from "../../../components/common/app-layout";
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <AppLayout headingTitle={"Settings"} headingBg={"bg-white"}>
      <div className="mt-7">
        {Object.keys(settingLinks).map((key, index) => (
          <div key={index} className={settingLinks[key].space && "mt-14"}>
            <h2 className="text-3 font-medium mb-4 mt-5">
              {settingLinks[key].title}
            </h2>
            <div className="">
              {settingLinks[key].links.map((link, index) =>
                link.to ? (
                  <Link
                    className="flex items-center justify-between px-5 py-4 rounded-[10px] bg-[#F6F7F8] mb-3"
                    key={index}
                    to={link.to}
                  >
                    <div className="flex items-center gap-2">
                      <img src={link.icon} alt="" />
                      <h3 className="text-3">{link.title}</h3>
                    </div>
                    <SmallArrow className={"rotate-[270deg]"} />
                  </Link>
                ) : (
                  <div
                    className="flex items-center justify-between rounded-[10px] px-5 py-2 bg-[#F6F7F8] mb-3"
                    key={index}
                  >
                    <div className="flex items-center gap-2">
                      <img src={link.icon} alt="" />
                      <h3 className="text-3">{link.title}</h3>
                    </div>
                    <Switching />
                  </div>
                )
              )}
            </div>
          </div>
        ))}
        <div
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center justify-between px-5 py-4 rounded-[10px] bg-[#F6F7F8] mb-3"
        >
          <div className="flex items-center gap-2">
            <img src={deleteIcon} alt="" />
            <h3 className="text-3">Delete Account</h3>
          </div>
          <SmallArrow className={"rotate-[270deg]"} />
        </div>
      </div>
      <Dialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        content={
          <div className="flex flex-col items-center gap-4 relative">
            <img src={trash} alt="" />
            <h3 className="text-4 leading-[20px] font-medium">
              Delete Account
            </h3>
            <p className="text-3 font-light leading-[20px] text-center">
              Are you sure you want to delete your account? <br />
              This action cannot be undone
            </p>
            <CloseIcon
              attr={{
                className: "absolute top-0 right-0",
                onClick: () => setIsDialogOpen(false),
              }}
            />
          </div>
        }
        footer={
          <>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="bg-secondary text-3 font-medium leading-[16.8px] tracking-[-0.28px] px-7 py-2 rounded-full text-white mx-auto mt-4"
            >
              Delete
            </button>
          </>
        }
      />
    </AppLayout>
  );
};

export default Settings;
