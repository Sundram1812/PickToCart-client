import React from 'react'
import CartProductCard from './CartProductCard'

function CartProduct({cartItems}) {
  return (
    <div className='space-y-3 '>
        {
          cartItems?.map((cartItem)=><CartProductCard key={cartItem?.cartItemId} cartItem={cartItem}/> )
        }      
    </div>
  )
}

export default CartProduct