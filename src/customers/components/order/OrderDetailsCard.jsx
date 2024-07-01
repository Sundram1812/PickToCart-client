import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

const product={
    image:
      "https://rukminim1.flixcart.com/image/612/612/knyxqq80/salwar-kurta-dupatta/q/i/q/32-skd7385-biba-original-imag2jag2zzz3shw.jpeg?q=70",
    brand: "BIBA",
    title: "Solid Stitched Lehenga Choli",
    color: "Yellow",
    selling_price: "₹4,016",
    price: "8,995",
    disscount: "55% off",
    size: "",
    seller: "sundram"
  }

function OrderDetailsCard() {
  return (
 
      <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div className=" col-span-3 flex  gap-5 px-3">
          <div className="h-[8rem] w-[6rem] bg-gray-300 p-1">
            <img
              src={product.image}
              className=" object-cover object-top w-full h-full"
            />
          </div>

          <div className="space-y-2 py-1">
            <div>
            <h2 className="text-sm font-semibold opacity-85">{product.title}</h2>
              <span className="text-xs font-semibold opacity-55">Color: {product.color}</span>
              <span className="text-xs font-semibold opacity-55">Size: M</span>
            </div>
            <p className=" text-sm opacity-75">Seller : {product.seller}</p>
            <p>&#x20B9;{product.price}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div>
              <StarIcon sx={{height:"20px", width:"20px"}} className=" text-[#1876D1]"/>
          </div>
          <p className=" text-[#1876D1]">Rate & Review Product</p>
        </div>
      </div>
    
  );
}

export default OrderDetailsCard;
