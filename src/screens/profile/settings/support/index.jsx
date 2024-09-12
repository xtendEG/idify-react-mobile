import React from "react";
import Heading from "../../../../components/common/heading";
import { Link, useNavigate } from "react-router-dom";
import SearchInput from "../../../../components/common/search-input";
import { Button } from "../../../../components/common/button";
import Status from "../../../../components/common/status";

const Support = () => {
  const navigate = useNavigate();
  const tickets = [
    {
      title: "Problem Title",
      date: "12 Jul 2024",
      description: "Lorem ipsum dolor sit amet. Vel Quis natus et nihil nihil",
      status: "pending",
      id: 1,
    },
    {
      title: "Problem Title",
      date: "12 Jul 2024",
      description: "Lorem ipsum dolor sit amet. Vel Quis natus et nihil nihil",
      status: "open",
      id: 1,
    },
    {
      title: "Problem Title",
      date: "12 Jul 2024",
      description: "Lorem ipsum dolor sit amet. Vel Quis natus et nihil nihil",
      status: "closed",
      id: 1,
    },
    {
      title: "Problem Title",
      date: "12 Jul 2024",
      description: "Lorem ipsum dolor sit amet. Vel Quis natus et nihil nihil",
      status: "closed",
      id: 1,
    },
    {
      title: "Problem Title",
      date: "12 Jul 2024",
      description: "Lorem ipsum dolor sit amet. Vel Quis natus et nihil nihil",
      status: "open",
      id: 1,
    },
    {
      title: "Problem Title",
      date: "12 Jul 2024",
      description: "Lorem ipsum dolor sit amet. Vel Quis natus et nihil nihil",
      status: "pending",
      id: 1,
    },
    {
      title: "Problem Title",
      date: "12 Jul 2024",
      description: "Lorem ipsum dolor sit amet. Vel Quis natus et nihil nihil",
      status: "closed",
      id: 1,
    },
    {
      title: "Problem Title",
      date: "12 Jul 2024",
      description: "Lorem ipsum dolor sit amet. Vel Quis natus et nihil nihil",
      status: "closed",
      id: 1,
    },
    {
      title: "Problem Title",
      date: "12 Jul 2024",
      description: "Lorem ipsum dolor sit amet. Vel Quis natus et nihil nihil",
      status: "open",
      id: 1,
    },
  ];
  return (
    <div className="font-mona py-10 px-4">
      <Heading heading="Support Tickets" />
      <div className="mt-10 mb-16">
        <SearchInput />
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id} // Ensure each ticket has a unique key for efficient rendering
            title={ticket.title}
            date={ticket.date}
            description={ticket.description}
            status={ticket.status}
            id={ticket.id}
          />
        ))}
      </div>

      <div className="bg-white fixed bottom-0 left-0 right-0 px-2 py-2 z-10">
        <Button
          label={"Create New Ticket"}
          attr={{
            onClick: () => navigate("/profile/settings/support/create"),
            className: "text-white mt-8 mb-5"
          }}
        />
      </div>
    </div>

    // :     <EmptyTickets/> when no tickets yet.
  );
};

export default Support;

const Ticket = ({ title, date, description, status, id }) => {
  return (
    <Link
      to={`/profile/settings/support/${id}`}
      className="block py-4 border-b-[1px] border-[#D7D7D7]"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[14px] font-medium leading-[16.8px] tracking-[-0.28px]">
          {title}
        </h2>
        <h6 className="text-[12px] font-light  ">{date}</h6>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-light leading-[17.302px] tracking-[-0.24px] text-[#303030]">
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </p>
        <Status status={status} />
      </div>
    </Link>
  );
};

