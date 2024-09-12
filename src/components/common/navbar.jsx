import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const pathname = useLocation().pathname;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-[86px] flex items-end justify-between font-mona py-5 px-12 shadow-custom  bg-white">
      <Link
        to={"/"}
        className={`flex flex-col items-center ${
          pathname === "/" && "text-primary"
        }`}
      >
        <Home pathname={pathname} />
        <span className="text-3 font-medium">Home</span>
      </Link>

      <Link>Create</Link>

      <Link
        to={"/profile"}
        className={`flex flex-col items-center ${
          pathname === "/profile" && "text-primary"
        }`}
      >
        <Profile pathname={pathname} />
        <span className="text-3 font-medium">Profile</span>
      </Link>
      <Plus />
    </div>
  );
};

export default Navbar;

const Home = ({ pathname }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M8.17701 27.9999C6.60634 27.9999 5.33301 26.6932 5.33301 25.0799V13.3439C5.33301 12.4572 5.72634 11.6172 6.39967 11.0639L14.2223 4.63988C14.7222 4.22599 15.3507 3.99951 15.9997 3.99951C16.6486 3.99951 17.2772 4.22599 17.777 4.63988L25.5983 11.0639C26.273 11.6172 26.6663 12.4572 26.6663 13.3439V25.0799C26.6663 26.6932 25.393 27.9999 23.8223 27.9999H8.17701Z"
        stroke="#151412"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={` ${pathname === "/" && "stroke-primary"}`}
      />
      <path
        d="M12.666 28V20.6667C12.666 19.9594 12.947 19.2811 13.4471 18.781C13.9472 18.281 14.6254 18 15.3327 18H16.666C17.3733 18 18.0515 18.281 18.5516 18.781C19.0517 19.2811 19.3327 19.9594 19.3327 20.6667V28"
        stroke="#151412"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={` ${pathname === "/" && "stroke-primary"}`}
      />
    </svg>
  );
};
const Profile = ({ pathname }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M16.5003 2.66675C9.13633 2.66675 3.16699 8.63608 3.16699 16.0001C3.16699 23.3641 9.13633 29.3334 16.5003 29.3334C23.8643 29.3334 29.8337 23.3641 29.8337 16.0001C29.8337 8.63608 23.8643 2.66675 16.5003 2.66675Z"
        stroke="#151412"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={` ${pathname === "/profile" && "stroke-primary"}`}
      />
      <path
        d="M6.19531 24.4613C6.19531 24.4613 9.16731 20.6667 16.5006 20.6667C23.834 20.6667 26.8073 24.4613 26.8073 24.4613M16.5006 16C17.5615 16 18.5789 15.5786 19.3291 14.8284C20.0792 14.0783 20.5006 13.0609 20.5006 12C20.5006 10.9391 20.0792 9.92172 19.3291 9.17157C18.5789 8.42143 17.5615 8 16.5006 8C15.4398 8 14.4224 8.42143 13.6722 9.17157C12.9221 9.92172 12.5006 10.9391 12.5006 12C12.5006 13.0609 12.9221 14.0783 13.6722 14.8284C14.4224 15.5786 15.4398 16 16.5006 16Z"
        stroke="#151412"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={` ${pathname === "/profile" && "stroke-primary"}`}
      />
    </svg>
  );
};

const Plus = () => {
  return (
    <>
      {" "}
      <div className="absolute -top-6 left-1/2  -translate-x-1/2 z-10 flex items-center justify-center w-[58px] h-[58px] rounded-full bg-primary">
        <Link to="/camera">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M24.0003 17.3307H17.3337V23.9974C17.3337 24.351 17.1932 24.6902 16.9431 24.9402C16.6931 25.1903 16.3539 25.3307 16.0003 25.3307C15.6467 25.3307 15.3076 25.1903 15.0575 24.9402C14.8075 24.6902 14.667 24.351 14.667 23.9974V17.3307H8.00033C7.6467 17.3307 7.30757 17.1903 7.05752 16.9402C6.80747 16.6902 6.66699 16.351 6.66699 15.9974C6.66699 15.6438 6.80747 15.3046 7.05752 15.0546C7.30757 14.8045 7.6467 14.6641 8.00033 14.6641H14.667V7.9974C14.667 7.64377 14.8075 7.30463 15.0575 7.05459C15.3076 6.80454 15.6467 6.66406 16.0003 6.66406C16.3539 6.66406 16.6931 6.80454 16.9431 7.05459C17.1932 7.30463 17.3337 7.64377 17.3337 7.9974V14.6641H24.0003C24.3539 14.6641 24.6931 14.8045 24.9431 15.0546C25.1932 15.3046 25.3337 15.6438 25.3337 15.9974C25.3337 16.351 25.1932 16.6902 24.9431 16.9402C24.6931 17.1903 24.3539 17.3307 24.0003 17.3307Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <svg
        className="absolute -top-[32px] left-1/2 -translate-x-1/2"
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
      >
        <circle cx="37" cy="37" r="37" fill="#EFFFF8" />
      </svg>
    </>
  );
};
