import React from "react";
import Overview from "./Payments sub-sections/Overview";
import Transactions from "./Payments sub-sections/Transactions";

const Payments = () => {
  return (
    <div className=" w-[95%] h-fit mb-8 text-black">
      <Overview />
      <Transactions />
    </div>
  );
};

export default Payments;
