const Status = ({ status }) => {
  const statusStyles = {
    open: {
      color: "text-[#058550]",
      bg: "bg-[#EFFFF8]",
    },
    pending: {
      color: "text-[#0073E7]",
      bg: "bg-[#ECFDFF]",
    },
    closed: {
      color: "text-[#D83C53]",
      bg: "bg-[#FFEBEB]",
    },
    default: {
      color: "text-[#058550]", 
      bg: "bg-[#EFFFF8]",
    },
  };

  const { color, bg } = statusStyles[status] || statusStyles.default;

  return (
    <span
      className={` inline-flex items-center px-2 py-1 text-[10px] font-medium rounded-full ${bg} ${color} `}
    >
      {status}
    </span>
  );
};

export default Status;
