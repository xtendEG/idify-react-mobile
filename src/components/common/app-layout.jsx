import React from 'react';
import Heading from '../../components/common/heading';

const AppLayout = ({ headingTitle, headingBg, returnFn, children, childrenClassName }) => {
  return (
    <div className="relative ">
      <Heading heading={headingTitle} bg={headingBg || "bg-transparent"} returnFn={returnFn} />
      <div className={`font-mona pb-10 px-4 ${childrenClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;