import React from 'react'

const ActionBox = ({action:{
    fn,
    icon,
    title,
    active
}}) => {
  return (
    <div className="flex flex-col items-center  gap-2">
    <button
      onClick={fn}
      className={`w-[50px] h-[50px] rounded-full ${active ? "bg-primary active:bg-secondary transition-all duration-150" : "bg-[#2D2D2D]"} flex items-center justify-center`}
    >
      <img src={icon} alt="" />
    </button>

    <h2 className="text-3 font-medium text-white text-center">
      {title}
    </h2>
  </div>  )
}

export default ActionBox