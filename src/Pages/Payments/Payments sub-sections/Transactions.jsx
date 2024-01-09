import React, { useState, useEffect } from "react";
import OrderCard from "../../../Components/OrderCard";
import Pagination from "../../../Components/Pagination";
import { LuSearch } from "react-icons/lu";
import { TbArrowsSort } from "react-icons/tb";
import { RxDownload } from "react-icons/rx";
import { FiInfo } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";

const Transactions = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // fetching orderes server logic
    fetch("your-server-endpoint")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data received as an array of orders(obj) in the format order = { id,date,amount,fees }
        setOrders(data.orders);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-full mt-0">
      <div className="text-xl font-medium h-[40px]">
        Transactions | This Month
      </div>
      <div className="w-full sm:px-4 py-2 bg-white drop-shadow-sm	 rounded-md">
        <div className="w-full sm:h-[60%] flex items-center justify-between">
          <div className=" w-[200px] sm:w-[260px] flex items-center relative my-2">
            <div className="absolute h-full p-4 pl-4 left-0 flex items-center scale-125 pointer-events-none opacity-40 ">
              <LuSearch className="p-[1px]" />
            </div>
            <input
              type="search"
              name="search"
              placeholder="Search by order ID..."
              id="search"
              className="w-full h-[40px] p-3 pl-10 rounded-md bg-white border"
            />
          </div>
          <div className="h-full flex opacity-60">
            <button className="mr-2 border border-gray-500 border-opacity-40 rounded-sm py-1 px-2 flex items-center justify-between hover:cursor-pointer">
              <span className="px-2">Sort</span>
              <div className="h-full flex items-center">
                <TbArrowsSort />
              </div>
            </button>
            <button className="mr-2  border border-gray-500 border-opacity-40 rounded-sm py-1 px-2 flex items-center hover:cursor-pointer">
              <RxDownload />
            </button>
          </div>
        </div>
        <div className="w-full h-[60px] sm:h-[40px] rounded-md flex items-center justify-between text-xs sm:text-sm text-stone-600 font-normal  sm:font-medium bg-stone-200 bg-opacity-60 px-2 sm:px-4">
          <div className="w-full grid grid-cols-4 grid-rows-1">
            <span className=" col-span-1 flex items-center">Order ID</span>
            <span className=" col-span-1 flex items-center ">
              Order date
              <FaCaretDown className="m-1" />
            </span>
            <span className=" col-span-1 flex items-center justify-center">
              Order amount
            </span>
            <span className=" col-span-1 flex items-center justify-center  sm:justify-end pl-2 ">
              Transaction fees
              <FiInfo className="h-full sm:mx-1 hidden sm:block" />
            </span>
          </div>
        </div>
        {/* i have implemented basic order fetching logic and then we can map the oreders and pass id,date,amt and fees as props  */}
        {/* but for now we will just render OrderCard 19 times for simplicity */}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />{" "}
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />
        <OrderCard
          id={281209}
          date={"7 July, 2023"}
          amt={"₹1,278.23"}
          fees={"₹22"}
        />
        <Pagination
          totalItems={200}
          itemsPerPage={19}
          onPageChange={(page) => console.log("Page changed to:", page)}
        />
      </div>
    </div>
  );
};

export default Transactions;
