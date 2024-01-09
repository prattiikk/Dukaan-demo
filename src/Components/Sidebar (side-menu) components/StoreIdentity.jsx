// this is rendered inside the sidebar(drawer) component on the top

import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import StoreLogo from "../../imgs/Imagestoreimg.png";

const Shop = ({ shopImg, shopName, shopLink }) => {
  return (
    <div className="bg-[#1e2640] px-2 grid grid-cols-4 grid-rows-1 justify-evenly items-center text-white mb-3">
      {/* store logo */}
      <div className="col-start-1 col-span-1 h-full w-full py-2 px-1  ">
        <img
          src={StoreLogo}
          alt="shop img"
          className="w-full h-full object-cover rounded-sm "
        />
      </div>

      {/* store name and their website link */}
      <div className=" col-start-2 col-span-2 p-2">
        <div className=" font-semibold">{shopName}</div>
        <a href={shopLink} className=" underline opacity-60">
          Visit store
        </a>
      </div>

      {/* dropdown */}
      <div className="dropdown dropdown-end col-start-4 col-span-1">
        <div tabIndex={0} role="button">
          <RiArrowDropDownLine className="h-full w-full" />
        </div>

        {/* dropdown menu goes here */}
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
        >
          <li>
            <a>Drop-Down Menu</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
