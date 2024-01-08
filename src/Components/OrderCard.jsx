import React from "react";

const OrderCard = ({ id, date, amt, fees }) => {
  return (
    <div className="w-full h-[50px] flex items-center justify-between text-sm font-medium bg-white border-b px-4">
      <span className=" text-sky-700">#{id}</span>
      <span>{date}</span>
      <span>{amt}</span>
      <span>{fees}</span>
    </div>
  );
};

export default OrderCard;
