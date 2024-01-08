import React, { useState } from "react";
import Overview from "../Components/Overview";
import Transactions from "../Components/Transactions";

const Payments = () => {
  return (
    <div className=" w-[95%] h-[200vh] text-black">
      <Overview />
      <Transactions />
    </div>
  );
};

export default Payments;
