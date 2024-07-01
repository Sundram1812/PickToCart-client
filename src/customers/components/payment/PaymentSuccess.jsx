import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import OrderStatusStepsNav from "./OrderStatusStepsNav";
import PaymentSuccessAlert from "./PaymentSuccessAlert";
import { getOrderById } from "../../../state/order/Action";
import { updatePayment } from "../../../state/payment/Action";
import ConfirmedOrderItems from "./ConfirmedOrderItems";

function PaymentSuccess() {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();

  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store.order);
  console.log("order id ---" + orderId);
  console.log(order);
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);


  useEffect(()=>{
      if(paymentId && orderId){
        const data={"orderId":orderId, "paymentId":paymentId}
        dispatch(updatePayment(data));
        dispatch(getOrderById(orderId));
      }
  },[orderId, paymentId])


  // console.log(order);

  return (
    <div className="min-h-[26rem]">
      <div className="flex justify-center my-2">
        <PaymentSuccessAlert/>
      </div>

      <div className="lg:w-[80rem] mx-auto px-6 mt-16">
        <OrderStatusStepsNav/>
      </div>

      <div >
        <ConfirmedOrderItems order={order}/>
      </div>
    </div>
  );
}

export default PaymentSuccess;
