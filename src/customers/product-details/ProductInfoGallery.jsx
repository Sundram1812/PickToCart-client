import React from "react";
import { productInfoData } from "./productInfoData";

function ProductInfoGallery({product}) {
  
  return (
    <div className=" lg:col-span-1 col-span-2 flex flex-col items-center gap-2 my-4">
      <div className="max-w-[30rem] h-[35rem] overflow-hidden rounded-lg">
        <img
          src={product?.imageUrl}
          alt=""
          className="object-cover object-top rounded-lg h-full w-full hover:scale-110 transition-all duration-300 "
        />
      </div>

      <div className="flex flex-wrap space-x-2 max-w[30rem] max-h-[35rem]">
        {productInfoData.images.map((image) => (
          <div
            key={image.alt}
            className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg max-w-[5rem] max-h-[5rem]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductInfoGallery;
