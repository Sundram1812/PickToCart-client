import React from "react";

function OrderSummaryProductCard({orderItem}) {

return (<div className="bg-white border shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
  <div id="cartProductCard" className="  flex gap-6  px-4 py-4  ">
    {/* Image */}
    <div id="cartProductCardImg" className="h-[12rem] w-[10rem]">
      <img
        src={orderItem?.product?.imageUrl}
        alt=""
        className=" object-cover object-top w-full h-full"
      />
    </div>

    {/* Content */}
    <div className=" ">
      <div className=" mb-4">
        <h2 className="text-lg font-semibold">
          {orderItem?.product?.title}
        </h2>
        <p className=" text-lg opacity-55">Size: {orderItem?.size}, {orderItem?.product?.color}</p>
        <p className="text-lg opacity-55">Seller: {orderItem?.product?.brand}</p>
      </div>

      <div id="price" className="flex gap-4 mt-8">
        <p className=" opa-50 line-through">&#8377;{orderItem?.price}</p>
        <p className=" ">&#8377;{orderItem?.discountedPrice}</p>
        <p className="text-green-600">{orderItem?.product?.discountPercent}% off</p>
      </div>

      <div className=" py-2">
        <p className="text-xs font-semibold">
          <span>Quantity:</span>  {orderItem?.quantity}
        </p>
    </div>
    </div>

  </div>

{/* Count incr decr button
  <div className=" flex items-center space-x-8 my-2 px-3">
    <div className="flex items-center gap-3">
      <IconButton variant="contained" onClick={handleCartItemQuantityDecrement}>
        <RemoveCircleOutlineIcon sx={{color:"#1876d1"}}/>
      </IconButton>

      <span className="px-5 py-1 border rounded-sm text-xs font-semibold">
        {orderItem?.quantity}
      </span>

      <IconButton variant="contained" onClick={handleCartItemQuantityIncrement}>
        <AddCircleOutlineIcon sx={{color:"#1876d1"}}/>
      </IconButton>
    </div>

    <div onClick={handleRemoveCartItem} className="cursor-pointer">
      <p className=" text-[#1876d1]">Remove</p>
    </div>
  </div> */}
</div>)
}
export default OrderSummaryProductCard;
