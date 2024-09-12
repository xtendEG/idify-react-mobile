import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../../../../components/common/heading";
import FirstEmail from "../../../../components/ticket/first-email";
import ReplyThread from "../../../../components/ticket/reply-thread";
import SendBox from "../../../../components/ticket/send-box";
import { Button } from "../../../../components/common/button";

const Ticket = () => {
  const { id } = useParams();

  return (
    <div className="font-mona py-10 px-4 ">
      <Heading heading="Support Tickets" />
      <FirstEmail />
      {/* <NoResponse /> */}
      <div className="mb-20">
        <ReplyThread />
        <ReplyThread />
        <ReplyThread />
      </div>
      <SendBox />
      {/* when ticket is closed this will be shown */}
      {/* : <div className="bg-white fixed bottom-0 left-0 right-0 px-2 py-2 z-10">
        <Button
          label={"Create New Ticket"}
          attr={{
            onClick: () => navigate("/profile/settings/support/create"),
            className: "text-white",
          }}
        />
      </div> */}
    </div>
  );
};

export default Ticket;
