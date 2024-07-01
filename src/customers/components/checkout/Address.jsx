import React, { useEffect } from "react";
import SavedAddress from "./SavedAddress";
import DeliveryAddressForm from "./DeliveryAddressForm";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../state/auth/action";

function Address() {

  const {user}=useSelector(store=> store.auth)
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");

  useEffect(()=>{
    dispatch(getUser(jwt));
  },[user?.userId])

  const userSavedAddresses = user?.addresses;
  // console.log(userSavedAddresses);


  return (
    <div className="grid grid-cols-1  md:grid-cols-2 py-6 my-4 gap-4 ">
      <div className=" h-[30.5rem] divide-y overflow-y-scroll shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white px-8 py-2 rounded-md">
        {
          userSavedAddresses?.map((address)=> <SavedAddress key={address?.addressId} address={address}/>)
        }

      </div>
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white px-2 py-1 rounded-md h-[30.5rem] divide-y overflow-y-scroll">
        <DeliveryAddressForm />
      </div>
    </div>
  );
}

export default Address;
