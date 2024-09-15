import React from 'react'
import Dialog from './dialog'
import error from "../../assets/images/common/error.png";
import CloseIcon from './close-icon';
const ErrorDialog = ({isDialogOpen, setIsDialogOpen}) => {
  return (
    <Dialog
    isOpen={isDialogOpen}
    setIsOpen={setIsDialogOpen}
    content={
      <div className="flex flex-col items-center gap-4 relative">
        <img src={error} alt="" />
        <h3 className="text-4 leading-[20px] font-medium">
        Something Went Wrong
        </h3>
        <p className="text-3 font-light leading-[20px] text-center">
        Please make sure you have selected <br /> a service.
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
          Try Again
        </button>
      </>
    }
  />
  )
}

export default ErrorDialog