import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function CartPriceCard({cartItems}) {

  const initialValue=0;
  const totalDiscountedPrice=cartItems?.reduce((accumulator, currentValue)=> (currentValue?.discountedPrice)*(currentValue?.quantity) + accumulator, initialValue);
  const totalPrice=cartItems?.reduce((accumulator, currentValue)=> (currentValue?.price)*(currentValue?.quantity) + accumulator, initialValue);

  return (
    <div className=" p-4 bg-white flex flex-col justify-between max-h-[25rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:sticky lg:top-[8rem]">
      <div className=" divide-y ">
        <h2 className=" text-lg opacity-60 font-semibold pb-2 ">
          PRICE DETAILS
        </h2>
        <div>
          <div className=" text-sm font-semibold flex justify-between items-center space-y-2">
            <p>Price ({cartItems?.length} items)</p>
            <p>&#8377;{totalPrice}</p>
          </div>
          <div className=" text-sm font-semibold flex justify-between items-center space-y-2">
            <p>Discount</p>
            <p className="text-green-600">-&#8377;{totalPrice-totalDiscountedPrice}</p>
          </div>

          <div className=" text-sm font-semibold flex justify-between items-center space-y-2">
            <p>Deliver Charge</p>
            <p className="text-green-600">free</p>
          </div>
        </div>

        <div className=" flex justify-between items-center my-4 py-2">
          <p className="font-bold ">Total Amount</p>
          <p className="font-semibold text-green-600">&#8377;{totalDiscountedPrice}</p>
        </div>
      </div>

      <Link to={"/checkout?steps=2"}>
      <Button variant="contained" sx={{mt:"3rem"}}>CHECK OUT</Button>
      </Link>
    </div>
  );
}

export default CartPriceCard;
