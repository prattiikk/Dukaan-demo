import React from "react";
import OrderCard from "./OrderCard";
import { LuSearch } from "react-icons/lu";

const Transactions = () => {
  return (
    <div className="w-full mt-0">
      <div className="text-xl font-medium h-[60px]">
        Transactions | This Month
      </div>
      <div className="w-full p-4 bg-white shadow-sm">
        <div className=" w-[260px] flex items-center relative">
          <div className="absolute h-[60%] p-4 pl-4 left-0 flex items-center scale-125 pointer-events-none opacity-40 ">
            <LuSearch />
          </div>
          <input
            type="search"
            name="search"
            placeholder="Search features, tutorials, etc."
            id="search"
            className="w-full h-[40px] p-4 pl-10 rounded-lg bg-white border"
          />
        </div>
        <div className="w-full h-[40px] rounded-md flex items-center justify-between text-sm font-medium bg-stone-200 border-b px-4">
          <span>Order ID</span>
          <span>Order date</span>
          <span>Order amount</span>
          <span>Transaction fees</span>
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
