import React from "react";
import OrderSummaryProductCard from "./OrderSummaryProductCard";

function OrderSummaryProducts({orderItems}) {
  
  return(<div className='space-y-3 '>
        {
          orderItems?.map((orderItem)=> <OrderSummaryProductCard key={orderItem?.id} orderItem={orderItem}/>)
        }
  </div>)

}

export default OrderSummaryProducts;
