import React from "react";

const Subheading = ({ heading, subHeading }) => {
  return (
    <div className="mt-8 mb-5">
      <h2 className="text-5 font-medium mb-2">{heading}</h2>
      <p className="text-4 font-light">{subHeading}</p>
    </div>
  );
};

export default Subheading;
