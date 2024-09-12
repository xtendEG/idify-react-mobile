import attachment from "../../assets/images/settings/attatchment.svg";

const Attachment = ({ name, size }) => {
  return (
    <div className="flex items-center gap-4 shadow-custom rounded-full w-[158px] px-2 py-1">
      <div className="flex justify-center items-center rounded-full h-[34px] w-[34px] bg-[#F0F0F0]">
        <img src={attachment} alt="" />
      </div>
      <div>
        <h6 className="text-[11px] text-[#303030] leading-[15.8px] tracking-[-.22px] mb-2">
          {name}
        </h6>
        <h6 className="text-[10px] text-[#303030] leading-[14.8px] tracking-[-.20px] ">
          {size}
        </h6>
      </div>
    </div>
  );
};
export default Attachment;
