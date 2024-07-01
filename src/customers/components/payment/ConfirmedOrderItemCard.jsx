import React from 'react'
import OrderSummaryProductCard from '../checkout/OrderSummaryProductCard';
import ShippingAddressCard from './ShippingAddressCard';

function ConfirmedOrderItemCard({orderItem, shippingAddress}) {
    console.log(orderItem);
    console.log(shippingAddress);
  return (
    <div className=' flex justify-between items-center rounded-sm space-y-2 py-6 bg-white px-4 mx-3 my-3 flex-wrap'>
        <div>
            <OrderSummaryProductCard orderItem={orderItem}/>
        </div>
        <div>
            <ShippingAddressCard shippingAddress={shippingAddress}/>
        </div>
    </div>
  )
}

export default ConfirmedOrderItemCard