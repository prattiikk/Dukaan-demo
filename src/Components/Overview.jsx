import React, { useState } from "react";
import Card from "./Card";
import { RiArrowDropDownLine } from "react-icons/ri";

const Overview = () => {
  const [amtReceived, setAmtreceived] = useState("₹23,92,312.19");
  const [orders, setOrders] = useState(231);
  return (
    <div className="w-full h-[240px] grid grid-rows-3 grid-cols-1 gap-4 ">
      <div className="w-full row-start-1 row-span-1 flex items-center justify-between py-6 ">
        <span className=" text-xl font-medium">Overview</span>
        <div className="dropdown dropdown-end col-start-4 col-span-1">
          <div
            tabIndex={0}
            role="button"
            className="border border-gray-500 border-opacity-40 rounded-sm flex items-center px-3 py-1"
            style={{ whiteSpace: "nowrap" }}
          >
            <span className=" text-sm">Last Month</span>
            <RiArrowDropDownLine className="h-full w-full" />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-stone-300 rounded-box w-52"
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
      <div className=" row-start-2 row-span-2 grid grid-cols-2 grid-rows-1 gap-4 max-h-[120px] bg-[#fafafa]">
        <Card title={"Online orderes"} count={orders} />
        <Card title={"Online orders"} count={amtReceived} />
      </div>
    </div>
  );
};

export default Overview;
