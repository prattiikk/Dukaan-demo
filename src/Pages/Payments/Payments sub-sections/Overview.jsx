import React, { useState, useEffect } from "react";
import Card from "../../../Components/OverViewSummaryCard";
import { RiArrowDropDownLine } from "react-icons/ri";

const Overview = () => {
  const [amtReceived, setAmtReceived] = useState("₹23,92,312.19");
  const [orders, setOrders] = useState(231);

  useEffect(() => {
    // fetching orderes and amt from the server logic (used chatgpt for this ^_^ )
    fetch("your-server-endpoint")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data received in the format { amtReceived: 2392312.19, orders: 231 }
        const { amtReceived: receivedAmt, orders: receivedOrders } = data;

        // string Format
        const formattedAmtReceived = `₹${receivedAmt
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;

        setAmtReceived(formattedAmtReceived);
        setOrders(receivedOrders);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-full h-[240px] grid grid-rows-3 grid-cols-1 gap-4 ">
      <div className="w-full row-start-1 row-span-1 flex items-center justify-between mt-8 mb-2 ">
        <span className=" text-xl font-medium">Overview</span>

        {/* basic drop down from daisyUI */}
        <div className="dropdown dropdown-end col-start-4 col-span-1">
          <div
            tabIndex={0}
            role="button"
            className="border border-gray-500 border-opacity-40 rounded-sm flex items-center px-3 py-1"
            style={{ whiteSpace: "nowrap" }}
          >
            <span className=" text-md">Last Month</span>
            <RiArrowDropDownLine className="h-full w-full ml-2" />
          </div>

          {/* drop down menu code goes here */}
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-stone-300 w-52"
          >
            <li>
              <a href="#">Drop-Down menu</a>
            </li>
          </ul>
        </div>
      </div>

      {/* cards displaying total orders and amount */}
      <div className=" row-start-2 row-span-2 grid grid-cols-2 grid-rows-1 gap-4 max-h-[120px] bg-[#fafafa]">
        <Card title={"Online orderes"} count={orders} />
        <Card title={"Amount received"} count={amtReceived} />
      </div>
    </div>
  );
};

export default Overview;
