import React from "react";

function OrderStatusFilter() {
  return (
    <div className=" px-2 md:px-4">
      <div className="pb-4">
        <h2 className="font-bold text-lg opacity-85">Filters</h2>
      </div>

      <div>
        <p className=" uppercase text-sm font-bold opacity-80 pb-2">Order status</p>
        <div className="flex items-center gap-3 ">
          <input type="checkbox" id="on_the_way" />
          <label htmlFor="on_the_way" className="text-sm font-semibold opacity-70">On The Way</label>
        </div>
        <div className="flex items-center gap-3 py-1">
          <input type="checkbox" id="on_the_way" />
          <label htmlFor="on_the_way" className="text-sm font-semibold opacity-70">Delevered</label>
        </div>
        <div className="flex items-center gap-3 py-1">
          <input type="checkbox" id="on_the_way" />
          <label htmlFor="on_the_way" className="text-sm font-semibold opacity-70">Cancelled</label>
        </div>
        <div className="flex items-center gap-3 py-1">
          <input type="checkbox" id="on_the_way" />
          <label htmlFor="on_the_way" className="text-sm font-semibold opacity-70">Returned</label>
        </div>
      </div>
    </div>
  );
}

export default OrderStatusFilter;
