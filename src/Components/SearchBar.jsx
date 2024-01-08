import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import { RiMessage2Fill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";

const SearchBar = ({ isActive }) => {
  const activeItem = isActive || "Payments";
  return (
    <div className=" h-[60px] w-full flex justify-center items-center border-b-2 bg-white">
      <div className="w-[95%] h-full text-black grid grid-cols-3 grid-rows-1">
        <div className=" col-start-1 col-span-1 flex justify-start items-center">
          <span className="pl-0 text-lg font-light">{activeItem}</span>
          <span className="flex justify-center items-center text-sm pl-4">
            <AiOutlineQuestionCircle />{" "}
            <span className="ml-2">How it works</span>
          </span>
        </div>
        <div className="col-start-2 col-span-1 flex items-center relative">
          <div className="absolute h-[60%] p-4 pl-4 left-0 flex items-center scale-125 pointer-events-none opacity-40 ">
            <LuSearch />
          </div>
          <input
            type="search"
            name="search"
            placeholder="Search features, tutorials, etc."
            id="search"
            className="w-full h-[60%] p-4 pl-10 rounded-lg bg-[#e5e5e5] shadow-sm"
          />
        </div>
        <div className=" col-start-3 col-span-1 flex items-center justify-end">
          <span className=" bg-[#e5e5e5] h-[40%] w-[30px] rounded-full flex items-center justify-center scale-125 mx-4">
            <RiMessage2Fill />
          </span>
          <span className=" bg-[#e5e5e5] h-[40%] w-[30px] rounded-full flex items-center justify-center scale-125">
            <FaCaretDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
