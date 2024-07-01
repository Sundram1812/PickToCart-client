import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../state/order/Action';
import OrderSummaryAddressCard from './OrderSummaryAddressCard';
import OrderSummaryProduct from './OrderSummaryProduct';

function OrderSummary() {

  const {order}=useSelector(store=> store.order);
  const dispatch=useDispatch();
  const location=useLocation();
  const searchParam=new URLSearchParams(location.search);
  const orderId=searchParam.get("order_id");
  console.log(orderId);


  useEffect(()=>{
    dispatch(getOrderById(orderId))
  }, [orderId]);


  const shippingAddress=order?.shippingAddress;

  // console.log(order);


  return (
    <div className='my-3'>
      <OrderSummaryAddressCard address={shippingAddress}/>
      <OrderSummaryProduct order={order}/>
    </div>
  )
}

export default OrderSummary