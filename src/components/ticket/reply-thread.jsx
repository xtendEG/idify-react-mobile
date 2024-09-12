import Status from "../common/status";
import reply from "../../assets/images/settings/reply.svg";

const ReplyThread = () => {
  return (
    <div className="mt-5 pb-5 border-b-[1px] border-b-[#D7D7D7]">
      <div className="flex">
        <div className="relative flex-shrink-0 w-8">
          <div className="absolute top-0 -bottom-[32px] left-1/2 w-[1px] bg-[#9D9D9D]"></div>
          <LetterCircle letter={"A"} colors={"bg-[#FFF0D2] text-[#FF9519]"} />
        </div>
        <div className="flex-grow ml-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[14px] font-semibold">Abdullah Soliman</div>
              <div className="text-[12px] text-[#9D9D9D]">
                12 Jul 2024 • 9 AM
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Status status={"Open"} />
              <Reply />
            </div>
          </div>
          <p className="mt-1 text-[12px] font-light leading-[20px]">
            Lorem ipsum dolor sit amet. Quo quis voluptas ut perspiciatis odit
            est molestiae quia aut veniam dolores ad galisum nemo.
          </p>
        </div>
      </div>
      
      <div className="flex mt-4">
        <div className="relative flex-shrink-0 w-8 ml-8">
          <div className="absolute top-[15.5px] right-full w-[16px] h-[1px] bg-[#9D9D9D] "></div>
          <LetterCircle letter={"M"} colors={"bg-[#EFFFF8] text-[#1CD29B]"} />
        </div>
        <div className="flex-grow ml-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Mohamed Khaled</div>
              <div className="text-[12px] text-[#9D9D9D]">
                12 Jul 2024 • 9 AM
              </div>
            </div>
            <Reply />
          </div>
          <p className="mt-1 text-[10px] font-light leading-[20px]">
            Lorem ipsum dolor sit amet. Quo quis voluptas ut perspiciatis odit
            est molestiae quia aut veniam dolores ad galisum nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

const Reply = () => {
  return (
    <div className="flex items-center justify-center w-[26px] h-[26px] rounded-full shadow-custom bg-white">
      <img src={reply} alt="" />
    </div>
  );
};

const LetterCircle = ({ letter, colors }) => {
  return (
    <div className={`flex items-center justify-center w-[32px] h-[32px] ${colors} font-semibold rounded-full relative z-10`}>
      {letter}
    </div>
  );
};

export default ReplyThread;