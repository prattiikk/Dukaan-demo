// DrawerItem.js
import React from "react";
import { Link } from "react-router-dom";

const DrawerItem = ({ icon, title, isActive, to }) => {
  return (
    <Link
      to={to}
      className={`w-full h-full mt-1 flex justify-center items-center text-stone-200 cursor-pointer`}
    >
      <div className="w-fit scale-125">{icon}</div>
      <div className="w-3/4 font-medium pl-1">{title}</div>
    </Link>
  );
};

export default DrawerItem;
