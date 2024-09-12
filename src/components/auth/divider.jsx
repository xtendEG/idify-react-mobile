export const Divider = ({ text }) => (
    <div className="relative text-center w-full">
        <span className="text-3 leading-[19.1px] font-medium text-black">{text}</span>
        <span className="absolute top-1/2 left-0 w-[45%] bg-[#D7D7D7] h-[1px] -translate-y-1/2"></span>
        <span className="absolute top-1/2 right-0 w-[45%] bg-[#D7D7D7] h-[1px] -translate-y-1/2"></span>
    </div>
);

export default Divider