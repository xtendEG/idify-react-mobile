const SearchInput = () => {
    return (
      <div className="relative ">
        <input
          type="text"
          placeholder={"Search"}
          className="border-[1px] border-[#D7D7D7] placeholder:text-[#D7D7D7] placeholder:text-4 rounded-full w-full h-[60px] px-10 focus-visible:outline-[#0073E7]"
        />
        <button className="absolute left-5 top-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M14.5 14.5L10.5 10.5M11.8333 7.16667C11.8333 9.744 9.744 11.8333 7.16667 11.8333C4.58934 11.8333 2.5 9.744 2.5 7.16667C2.5 4.58934 4.58934 2.5 7.16667 2.5C9.744 2.5 11.8333 4.58934 11.8333 7.16667Z"
              stroke="#D7D7D7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
  };

  export default SearchInput