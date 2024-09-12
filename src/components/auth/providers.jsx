import google from "../../assets/images/social/google.svg";
import facebook from "../../assets/images/social/facebook.svg";
import apple from "../../assets/images/social/apple.svg";
import twitter from "../../assets/images/social/twitter.svg";
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
