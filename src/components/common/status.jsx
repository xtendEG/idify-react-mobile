const Status = ({ status }) => {
  const getStatus = (status) => {
    switch (status) {
      case "open":
        return {
          color: "text-[#058550]",
          bg: "bg-[#EFFFF8]",
        };
      case "pending":
        return {
          color: "text-[#0073E7]",
          bg: "bg-[#ECFDFF]",
        };
      case "closed":
        return {
          color: "text-[#D83C53]",
          bg: "bg-[#FFEBEB]",
        };
      default:
        return {
          color: "text-[#058550]",
          bg: "bg-[#EFFFF8]",
        };
    }
  };
  return (
    <div
      className={`text-[10px] font-medium leading-[12px] tracking-[-0.2px] ${
        getStatus(status).bg
      } ${getStatus(status).color}  rounded-full px-2 py-[5px]`}
    >
      {status}
    </div>
  );
};

export default Status;
