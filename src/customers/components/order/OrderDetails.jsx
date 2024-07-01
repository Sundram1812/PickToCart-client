import React from "react";
import SavedAddress from "../checkout/SavedAddress";
import OrderTrackingNav from "./OrderTrackingNav";
import OrderDetailsCard from "./OrderDetailsCard";

function OrderDetails() {
  return (
    <div className=" px-8 py-6 space-y-8">
      <div className="">
        <SavedAddress/>
      </div>

      <div className=" px-6 py-5 bg-white">
        <OrderTrackingNav activeStep={1}/>
      </div>

      <div className="px-8 bg-white py-8">
        <OrderDetailsCard/>
      </div>
    </div>
  );
}

export default OrderDetails;
