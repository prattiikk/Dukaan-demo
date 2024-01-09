import React from "react";

// react-icons/all is not supported anymore so we have to import each icon individually ig.
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";

const SearchBar = ({ isActive }) => {
  {
    /* active state default Payments for now */
  }
  const activeItem = isActive || "Payments";

  return (
    <div className=" h-[60px] w-full flex justify-center items-center border-b-2 bg-white">
      <div className="w-[95%] h-full text-black grid grid-cols-3 grid-rows-1">
        <div className=" col-start-1 col-span-1 flex justify-start items-center">
          {/* tried rendering active page state name in the span below*/}

          <span className="pl-0 text-lg font-light">{activeItem}</span>

          {/* how it works button */}

          <button className=" hidden sm:flex justify-center items-center text-xs ml-4">
            <AiOutlineQuestionCircle />
            <span className="ml-2">How it works</span>
          </button>
        </div>

        {/* Main Search Box */}

        <div className="col-start-2 col-span-2 sm:col-span-1 flex items-center relative">
          <div className="absolute h-[60%] p-4 pl-4 left-0 flex items-center scale-125 pointer-events-none opacity-40 ">
            <LuSearch />
          </div>
          <input
            type="search"
            name="search"
            placeholder="Search features, tutorials, etc."
            id="search"
            className="w-full h-[60%] p-4 pl-10 rounded-md bg-[#e5e5e5] shadow-sm"
          />
        </div>

        {/* nav buttons on the right */}

        <div className=" col-start-3 col-span-1 hidden sm:flex items-center justify-end">
          <button className=" bg-[#e5e5e5] h-[50%] w-[30px] rounded-full flex items-center justify-center scale-125 mx-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5995_2532)">
                <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                <path
                  d="M28.4211 10.0237L11.1158 13.3823C10.4632 13.499 10 14.1287 10 14.8517V22.5019C10 23.225 10.4632 23.8547 11.1158 23.9713L12.8842 24.3212C13.6 25.6273 14.9474 27.8897 16.7579 29.7323C17.3684 30.362 18.3789 29.8022 18.2526 28.8693C18.0842 27.6331 18.1263 26.3037 18.1895 25.3707L28.4211 27.3766C29.2421 27.5398 30 26.8401 30 25.9072V11.4931C30 10.5602 29.2421 9.86046 28.4211 10.0237ZM16.4632 19.6331C16.4632 19.8897 16.2737 20.0996 16.0421 20.0996H14.3158C14.0842 20.0996 13.8947 19.8897 13.8947 19.6331V17.7206C13.8947 17.464 14.0842 17.2541 14.3158 17.2541H16.0421C16.2737 17.2541 16.4632 17.464 16.4632 17.7206V19.6331ZM21.2842 19.6331C21.2842 19.8897 21.0947 20.0996 20.8632 20.0996H19.1368C18.9053 20.0996 18.7158 19.8897 18.7158 19.6331V17.7206C18.7158 17.464 18.9053 17.2541 19.1368 17.2541H20.8632C21.0947 17.2541 21.2842 17.464 21.2842 17.7206V19.6331ZM26.1263 19.6331C26.1263 19.8897 25.9368 20.0996 25.7053 20.0996H23.9789C23.7474 20.0996 23.5579 19.8897 23.5579 19.6331V17.7206C23.5579 17.464 23.7474 17.2541 23.9789 17.2541H25.6842C25.9158 17.2541 26.1053 17.464 26.1053 17.7206V19.6331H26.1263Z"
                  fill="#4D4D4D"
                />
              </g>
              <defs>
                <clipPath id="clip0_5995_2532">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
          </button>
          <button className=" bg-[#e5e5e5] h-[50%] w-[30px] rounded-full flex items-center justify-center scale-125">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5995_2537)">
                <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                <path
                  d="M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z"
                  fill="#4D4D4D"
                />
              </g>
              <defs>
                <clipPath id="clip0_5995_2537">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
