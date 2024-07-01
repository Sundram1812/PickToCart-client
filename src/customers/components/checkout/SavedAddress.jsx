import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../../../state/order/Action";

function SavedAddress({address}) {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  

  function handleDeliveraddress(){
    dispatch(createOrder(address));
    navigate('/checkout?steps=3')
  }
  return (
    <div className="  rounded-sm space-y-2 py-6 bg-white px-4">
      <div>
        <h2 className=" font-bold opacity-70">{address?.firstName +" "+ address?.lastName}</h2>
      </div>

      <div>
        <p className=" opacity-50">
          {address?.city}, {address?.streetAddress}
        </p>
        <p className=" opacity-50">{address?.state}  ({address?.zipCode})</p>
      </div>

      <div>
        <h2 className=" font-semibold opacity-70">Phone Number</h2>
        <h3 className=" font-bold opacity-70">+91{address?.mobile}</h3>
      </div>

      <Link >
        <Button onClick={handleDeliveraddress} variant="contained" sx={{ mt: "1rem" }}>
          Deliver here
        </Button>
      </Link>
    </div>
  );
}

export default SavedAddress;
