import React from "react";
import { Button } from "../common/button";
import ticket from "../../../assets/images/settings/ticket.png";
import Heading from "../common/heading";

const EmptyTickets = () => {
  return (
    <div className="font-mona py-10 px-4 pb-4 relative min-h-screen flex flex-col justify-between items-center">
      <Heading heading="Support Tickets" />
      <div className="flex flex-col items-center justify-center flex-grow">
        <img src={ticket} alt="No tickets available" className="w-32 h-auto" />
        <h3 className="text-[18px] font-medium mt-10">
          There are no tickets yet
        </h3>
        <p className="text-[16px] font-light mt-2 max-w-[230px] text-center">
          Looks like you haven’t sent any support tickets yet.
        </p>
      </div>

      <div className="w-full mt-auto">
        <Button
          label="Create Ticket"
          attr={{
            className: "text-white w-full mt-8 mb-5",
            onClick: () => navigate("/profile/settings/support/create"),
            
          }}
        />
      </div>
    </div>
  );
};

export default EmptyTickets;
