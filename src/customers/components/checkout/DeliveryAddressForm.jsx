import { Button, TextField, TextareaAutosize } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../state/order/Action";
import { useNavigate } from "react-router-dom";

function DeliveryAddressForm() {
  const dispatch=useDispatch();
  const navigate= useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const data=new FormData(e.currentTarget);
    
    const address={
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("State_Province_Region"),
      zipCode: data.get("zip_Postal_code"),
      mobile: data.get("phoneNumber")
    }

    console.log(address);
    const reqData={
      "address":address,
      "navigate":navigate
    }

    dispatch(createOrder(reqData));
    // navigate('/checkout?steps=3')

  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="bg-white px-1 py-6 rounded-sm flex flex-col gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <TextField
              name="firstName"
              required
              type="text"
              placeholder="First Name"
              className="px-3 py-[.5rem] border outline-none w-full rounded-md"
            />
            <TextField
            name="lastName"
              required
              type="text"
              placeholder="Last Name"
              className="px-3 py-[.5rem] border outline-none w-full rounded-md"
            />
          </div>

          <div>
            <textarea
              name="address"
              required
              rows={5}
              id=""
              className=" w-full border px-3 py-[.5rem] outline-none rounded-md"
              placeholder="Address "
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <TextField
              name="city"
              required
              type="text"
              placeholder="City"
              className="px-3 py-[.5rem] border outline-none w-full rounded-md"
            />
            <TextField
              name="State_Province_Region"
              required
              type="text"
              placeholder="State/Province/Region"
              className="px-3 py-[.5rem] border outline-none w-full rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <TextField
              name="zip_Postal_code"
              required
              type="text"
              placeholder="Zip/Postal code"
              className="px-3 py-[.5rem] border outline-none w-full rounded-md"
            />
            <TextField
              name="phoneNumber"
              required
              type="text"
              placeholder="Phone Number"
              className="px-3 py-[.5rem] border outline-none w-full rounded-md"
            />
          </div>

          <div>
            <Button type="submit" variant="contained" sx={{ mt: "1rem" }}>
              Deliver here
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DeliveryAddressForm;
