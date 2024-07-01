import React from 'react'
import OrderSummaryPriceCard from './OrderSummaryPriceCard';
import OrderSummaryProducts from './OrderSummaryProducts';

function OrderSummaryProduct({order}) {
    const orderItems=order?.orderItems;
    return (
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:space-x-4 lg:max-w-7xl mx-auto py-5 px-4 min-h-[26rem]">
          <div className=" lg:col-span-2">
            <OrderSummaryProducts orderItems={orderItems}/>
          </div>
          <div className=" lg:col-span-1 sticky top-[60rem] ">
            <OrderSummaryPriceCard order={order} orderItems={orderItems} orderId={order?.id}/>
          </div>
        </div>
      </div>
    );
}

export default OrderSummaryProduct