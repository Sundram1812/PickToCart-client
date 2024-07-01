import React from "react";
import { Link, useNavigate } from "react-router-dom";

function OrderedProductCard({ product }) {
  const navigate=useNavigate();
  return (
    
    <div onClick={()=>navigate(`/account/order/${9}`)} className="grid grid-cols-6 border shadow-lg mb-2 py-2 px-2 cursor-pointer">
      <div className=" col-span-3 flex  gap-3 px-3">
        <div className="h-[6rem] w-[5rem] bg-gray-300 p-1">
          <img
            src={product.imageUrl}
            className=" object-cover object-top w-full h-full"
          />
        </div>

        <div className="space-y-2 py-1">
          <h2 className="text-sm font-semibold opacity-85">{product.title}</h2>
          <p className="text-xs font-semibold opacity-65">Size: M</p>
        </div>
      </div>

      <div className=" col-span-1 flex ">
        <p className=" font-bold opacity-85">&#x20B9;{product.price}</p>
      </div>

      <div className=" col-span-2">
        <div className=" px-3 flex items-center gap-2">
          <div className=" h-2 w-2 rounded-full border flex items-center justify-center border-green-600">
            <p className="bg-green-600 h-1 w-1 rounded-full"></p>
          </div>
          <p className=" capitalize text-sm font-bold opacity-85">
            expected delivery on may 13
          </p>
        </div>
        <p className="px-3 capitalize text-xs font-semibold opacity-70">
          your item has been delevered
        </p>
      </div>
    </div>
  
  );
}

export default OrderedProductCard;
