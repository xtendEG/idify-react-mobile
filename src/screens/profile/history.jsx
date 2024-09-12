import React from "react";
import Heading from "../../components/common/heading";
import SearchInput from "../../components/common/search-input";
import Dropdown from "../../components/common/dropdown";
import filter from "../../assets/images/profile/history/filter.svg";
import person from "../../assets/images/profile/history/person-2.png";
import dots from "../../assets/images/profile/dots.svg";
import { Link } from "react-router-dom";
import search from "../../assets/images/profile/history/search.png";
import empty from "../../assets/images/profile/history/empty.png";

const History = () => {
  const filters = [
    "National Id",
    "Residence Permit",
    "Passport",
    "Driving License",
    "Family ID Card",
    "Heath Card",
    "Visa",
  ];
  const serviceHistory = [
    {
      service: "National ID",
      date: "10/10/2022",
      price: "$20",
      status: "Delivered",
      image: person,
    },
    {
      service: "Driving License",
      date: "10/10/2022",
      price: "$20",
      status: "Delivered",
      image: person,
    },
    {
      service: "Passport",
      date: "10/10/2022",
      price: "$20",
      status: "Delivered",
      image: person,
    },
    {
      service: "Visa",
      date: "10/10/2022",
      price: "$20",
      status: "Delivered",
      image: person,
    },
  ];
  return (
    <div className="relative font-mona py-10 px-4 ">
      <Heading heading={"History"} />

      <div className="mt-5">
        <div className="flex items-center gap-4">
          <div className="grow">
            <SearchInput />
          </div>
          <Dropdown
            btnClassName={
              "w-[32px] h-[32px] rounded-full  shadow-custom flex items-center justify-center"
            }
            options={filters}
            btnContent={<img src={filter} alt="" />}
            menuClassName={"top-[calc(100%+6px)]"}
            arrowFill={"#000"}
          />
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {serviceHistory.map((service) => (
            <ServiceRow key={service.service} service={service} />
          ))}
        </div>
        {/* should be shown when there are no services after search  */}
        
        {/* <NoResults height={"h-[calc(100vh-200px)]"} image={search} title={"No Results found"} description={" We can’t find any item matching your search, try another way"} /> */}
      </div>
        {/* should be shown when there are no services yet  */}

        {/* <NoResults height={"h-[calc(100vh-100px)]"} image={empty} title={"No History yet"} description={" Looks like you haven’t added any orders yet. "} /> */}
    </div>
  );
};

export default History;
const ServiceRow = ({ service: { service, date, price, status, image } }) => {
  const serviceOptions = [
    "Download",
    <Link to={"/profile/create-album"}>Generate Album</Link>,
    <Link to={"/profile/settings/support/create"}>Support Ticket</Link>,
    "Delete",
  ];
  return (
    <div className="flex justify-between p-4 bg-white rounded-[10px] shadow-custom  ">
      <div className="flex items-center gap-4">
        <div className="rounded-[10px] overflow-hidden border-[1px] border-[#D7D7D7] w-[50px] h-[50px] pt-1 px-1">
          <img
            src={image}
            alt=""
            className=" scale-[1.2]  h-[63px] object-cover object-top"
          />
        </div>

        <div className="flex flex-col gap-[2px]">
          <h2 className="text-3  font-medium">{service}</h2>
          <h4 className="text-[11px] text-[#9D9D9D]">{date}</h4>
          <h6 className="text-[11px] text-[#0073E7]">{status}</h6>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="relative">
          <Dropdown
            btnContent={<img src={dots} alt="" />}
            options={serviceOptions}
            menuClassName={"top-[calc(100%-10px)]"}
          />
        </div>
        <span>{price}</span>
      </div>
    </div>
  );
};

const NoResults = ({height, image,title,description}) => {
  return (
    <div className={`${height} flex flex-col items-center justify-center  w-full` }>
      <img src={image} alt="" />
      <h2 className="text-5 font-medium mt-12">{title}</h2>
      <p className="text-4 font-light leading-[20px] text-center mt-2 max-w-[250px]">
       {description}
      </p>
    </div>
  );
};
