import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";
import twitter from "../../assets/twitter.svg";
export const SocialIcons = ({ method }) => (
  <div>
    <p className="text-center text-[14px] font-semibold mt-4">{method} With</p>
    <div className="flex justify-center items-center gap-8 mt-8 mb-8">
      <button>
        <img src={facebook} alt="facebook" />
      </button>
      <button>
        <img src={google} alt="google" />
      </button>
      <button>
        <img src={twitter} alt="twitter" />
      </button>
      <button>
        <img src={apple} alt="apple" />
      </button>
    </div>
  </div>
);
