import React from "react";
import "./productCard.css";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  // console.log(product);
  const navigate=useNavigate()
  function handleClick(){
    // console.log(product.productId);
    navigate(`/product/${product.productId}`)
  }

  return (

    <div
      onClick={handleClick}
      id="productCard"
      className=" bg-white w-[16rem] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition-all duration-200 my-2 rounded-md"
    >
      <div
        id="productCardImage"
        className=" productCardImage h-[23rem]  w-full overflow-hidden rounded-t-md"
      >
        <img
          className="h-full w-full hover:scale-110 transition-all duration-200 object-cover object-top"
          //   src="https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/a/c/acy-4626_1_.jpg"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className=" space-y-1 py-2 px-2 transition-all duration-200 hover:-translate-y-2 bg-white rounded-b-md">
        <p className="font-semibold opacity-60 text-lg">{product.brand}</p>
        <p className=" opacity-50 text-xs">{product.title}</p>
        <p className=" opacity-60 text-xs font-bold">{product.color}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <p className=" text-sm font-semibold">₹1,299</p>
          <p className="text-sm opacity-40 line-through">₹1,2999</p>
          <p className="text-sm text-green-600 font-semibold">{product.discountPercent}% off</p>
        </div>
      </div>
    </div>

  );
}

export default ProductCard;
