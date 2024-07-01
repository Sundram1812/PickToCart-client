import React, { useEffect } from "react";
import CartProduct from "./CartProduct";
import CartPriceCard from "./CartPriceCard";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeCartItem } from "../../../state/cart/Action";
import { getUser } from "../../../state/auth/action";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthModal from "../../auth/AuthModal";

function Cart() {
  const dispatch=useDispatch();
  const { cartItems} = useSelector((store) => store.cart);
  const navigate=useNavigate();
  const jwt= localStorage.getItem("jwt")


  console.log("cartItems  : ",cartItems);
  useEffect(()=>{
    dispatch(getCart())

  }, [cartItems?.length])



  if(cartItems?.length===0) return (
    <div className="w-full h-[26rem] overflow-hidden flex items-center justify-center flex-col gap-6">
      <RemoveShoppingCartIcon sx={{height: '80px', width:'80px'}}/>
      <p className=" text-4xl font-semibold"> Your Cart Is <span className=" text-red-600">Empty!</span></p>
      <p>Must add item on the cart before you proceed to checkout</p>
      <div className=" text-center mt-5">
        <Button
          onClick={()=>navigate("/")}
         variant="contained" sx={{ display: "flex", alignItems:"center", gap:"6px"}}>
          <ShoppingBagOutlinedIcon/>
          <span className="my-[3px]"> Return to shop</span>
        </Button>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:space-x-4 lg:max-w-7xl mx-auto py-5 px-4 min-h-[26rem]">
      <div className=" lg:col-span-2">
        <CartProduct cartItems={cartItems} />
      </div>
      <div className=" lg:col-span-1 ">
        <CartPriceCard cartItems={cartItems}/>
      </div>
    </div>
  );
}

export default Cart;
