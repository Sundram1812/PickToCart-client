import React from 'react'
import ConfirmedOrderItemCard from './ConfirmedOrderItemCard'

function ConfirmedOrderItems({order}) {
  return (
    <div>
        {
            order?.orderItems?.map((orderItem)=><ConfirmedOrderItemCard key={orderItem.id} orderItem={orderItem} shippingAddress={order?.shippingAddress}/>)
        }
    </div>
  )
}

export default ConfirmedOrderItems