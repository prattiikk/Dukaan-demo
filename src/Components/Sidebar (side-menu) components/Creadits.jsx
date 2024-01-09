import React from "react";
import example from "./example.jpeg";
import { BiCreditCardAlt } from "react-icons/bi";

const Creadits = ({ amt }) => {
  return (
    <div className="bg-[#555f8160] h-[60px] w-[85%] grid grid-cols-4 grid-rows-1 absolute bottom-0 text-white mb-3 p-2 shadow rounded">
      <div className="col-start-1 col-span-1 h-full w-full px-1 rounded bg-[#555f8186]">
        {/* <img
          src={example}
          alt="shop img"
          className="w-full h-full object-cover bg-no-repeat rounded-sm "
        /> */}
        <BiCreditCardAlt className="w-full h-full" />
      </div>
      <div className="flex flex-col items-start col-start-2 col-span-3 px-2">
        <span className="w-full text-xs opacity-80">Available credits</span>
        <span className=" font-medium text-base"> {amt}</span>
      </div>
    </div>
  );
};

export default Creadits;
