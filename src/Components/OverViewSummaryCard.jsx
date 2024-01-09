import React from "react";
const Card = ({ title, count }) => {
  return (
    <div className=" rounded-md  drop-shadow-sm ring-offset-8 p-4 bg-white">
      <div className="w-full h-1/3 opacity-60">{title}</div>
      <div className="w-full h-2/3 text-xl sm:text-4xl mt-4 sm:mt-2">
        {count}
      </div>
    </div>
  );
};
export default Card;
