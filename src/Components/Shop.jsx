import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Shop = ({ shopImg, shopName, shopLink }) => {
  return (
    <div className="bg-[#1e2640] px-2 grid grid-cols-4 grid-rows-1 justify-evenly items-center text-white mb-3">
      <div className="col-start-1 col-span-1 h-full w-full py-2 px-1  ">
        <img
          src={shopImg}
          alt="shop img"
          className="w-full h-full object-cover rounded-sm "
        />
      </div>

      <div className=" col-start-2 col-span-2 p-2">
        <div className=" font-semibold">{shopName}</div>
        <a href={shopLink} className=" underline opacity-60">
          Visit store
        </a>
      </div>
      <div className="dropdown dropdown-end col-start-4 col-span-1">
        <div tabIndex={0} role="button">
          <RiArrowDropDownLine className="h-full w-full" />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
