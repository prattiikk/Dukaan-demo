import React from "react";
import OrderCard from "./OrderCard";
import { LuSearch } from "react-icons/lu";

const Transactions = () => {
  return (
    <div className="w-full mt-0">
      <div className="text-xl font-medium h-[40px]">
        Transactions | This Month
      </div>
      <div className="w-full p-4 bg-white shadow-sm">
        <div className=" w-[260px] flex items-center relative my-2">
          <div className="absolute h-[60%] p-4 pl-4 left-0 flex items-center scale-125 pointer-events-none opacity-40 ">
            <LuSearch />
          </div>
          <input
            type="search"
            name="search"
            placeholder="Search by order ID..."
            id="search"
            className="w-full h-[40px] p-4 pl-10 rounded-lg bg-white border"
          />
        </div>
        <div className="w-full h-[40px] rounded-md flex items-center justify-between text-sm font-medium bg-stone-200 border-b px-4">
          <div className="w-full grid grid-cols-4 grid-rows-1">
            <span className=" col-span-1">Order ID</span>
            <span className=" col-span-1 ">Order date</span>
            <span className=" col-span-1 flex justify-center">
              Order amount
            </span>
            <span className=" col-span-1 flex justify-end">
              Transaction fees
            </span>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Transactions;
