import React from "react";
import wallet from "../../imgs/wallet.png";
const Creadits = ({ amt }) => {
  return (
    <div className="bg-[#555f8160] h-[60px] w-[85%] grid grid-cols-4 grid-rows-1 absolute bottom-0 text-white mb-3 p-2 shadow rounded place-items-center mx-auto">
      <div className="col-start-1 col-span-1 h-[80%] w-[80%] px-1 rounded bg-[#555f8186] flex items-center justify-center">
        <img src={wallet} className=" scale-110" />
      </div>
      <div className="flex flex-col items-start col-start-2 col-span-3 scale-110">
        <span className="w-full text-xs opacity-80">Available credits</span>
        <span className=" font-medium text-base"> {amt}</span>
      </div>
    </div>
  );
};

export default Creadits;
