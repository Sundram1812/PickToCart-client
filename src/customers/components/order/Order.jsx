import React from "react";
import OrderDetails from "./OrderedProducts";
import OrderStatusFilter from "./OrderStatusFilter";

function Order() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 py-6 px-6">
      <div className=" col-span-1 bg-white py-2 border shadow-lg max-h-[15rem] sticky top-[6.9rem]">
        <OrderStatusFilter />
      </div>
      <div className=" col-span-3 py-2 px-8 bg-white max-h-[95vh] overflow-y-scroll">
        <OrderDetails />
      </div>
    </div>
  );
}

export default Order;
