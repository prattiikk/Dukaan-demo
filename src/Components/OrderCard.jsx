// ordercard rendered inside of Transactions this month section of Payments page
import React from "react";

const OrderCard = ({ id, date, amt, fees }) => {
  return (
    <div className="w-full h-[50px] flex items-center  text-xs sm:text-sm font-medium bg-white border-b px-2 sm:px-4">
      <div className="w-full grid grid-cols-4 grid-rows-1">
        <span className=" text-sky-700 col-span-1">#{id}</span>
        <span className=" col-span-1">{date}</span>
        <span className=" col-span-1 flex justify-center">{amt}</span>
        <span className=" col-span-1 flex justify-center sm:justify-end">{fees}</span>
      </div>
    </div>
  );
};

export default OrderCard;
