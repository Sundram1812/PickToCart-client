import React from "react";
import "./CartProductCard.css";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../state/auth/action";
import { removeCartItem, updateCartItem } from "../../../state/cart/Action";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CartProductCard({cartItem}) {

  const navigate=useNavigate();
  const {user}=useSelector(store=>store.auth)
  const dispatch=useDispatch()
  const jwt= localStorage.getItem("jwt");

  function handleCartItemQuantityIncrement(){

    const reqData={
      "quantity":1
    }
    dispatch(getUser(jwt));
    dispatch(updateCartItem(user?.userId, cartItem?.cartItemId, reqData))

  }

  function handleCartItemQuantityDecrement(){
    const reqData={
      "quantity": -1
    }
    dispatch(getUser(jwt));
    dispatch(updateCartItem(user?.userId, cartItem?.cartItemId, reqData));

    if(cartItem?.quantity===1){
      dispatch(removeCartItem(user?.userId, cartItem?.cartItemId));
    }
  }

  // if(cartItem?.quantity===0){
  //   dispatch(removeCartItem(user?.userId, cartItem?.cartItemId));
  // }

  function handleRemoveCartItem(){
    dispatch(getUser(jwt));
    dispatch(removeCartItem(user?.userId, cartItem?.cartItemId));
    toast.success("Product Removed From cart")
  }

  return (
    <div className="bg-white border shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div id="cartProductCard" className="  flex gap-6  px-4 py-4  ">
        {/* Image */}
        <div id="cartProductCardImg" className="h-[12rem] w-[10rem]">
          <img
            src={cartItem?.product?.imageUrl}
            alt=""
            className=" object-cover object-top w-full h-full"
          />
        </div>

        {/* Content */}
        <div className=" ">
          <div className=" mb-4">
            <h2 className="text-lg font-semibold">
              {cartItem?.product?.title}
            </h2>
            <p className=" text-lg opacity-55">Size: {cartItem?.size}, {cartItem?.product?.color}</p>
            <p className="text-lg opacity-55">Seller: {cartItem?.product?.brand}</p>
          </div>

          <div id="price" className="flex gap-4 mt-8">
            <p className=" opa-50 line-through">&#8377;{cartItem?.price}</p>
            <p className=" ">&#8377;{cartItem?.discountedPrice}</p>
            <p className="text-green-600">{cartItem?.product?.discountPercent}% off</p>
          </div>
        </div>
      </div>

    {/* Count incr decr button */}
      <div className=" flex items-center space-x-8 my-2 px-3">
        <div className="flex items-center gap-3">
          <IconButton variant="contained" onClick={handleCartItemQuantityDecrement}>
            <RemoveCircleOutlineIcon sx={{color:"#1876d1"}}/>
          </IconButton>

          <span className="px-5 py-1 border rounded-sm text-xs font-semibold">
            {cartItem?.quantity}
          </span>

          <IconButton variant="contained" onClick={handleCartItemQuantityIncrement}>
            <AddCircleOutlineIcon sx={{color:"#1876d1"}}/>
          </IconButton>
        </div>

        <div onClick={handleRemoveCartItem} className="cursor-pointer">
          <p className=" text-[#1876d1]">Remove</p>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
