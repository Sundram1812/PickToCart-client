import React from "react";
import { useNavigate } from "react-router-dom";
 // eslint-disable-next-line jsx-a11y/alt-text

function HomeSectionCard({item}) {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${6}`)} className="cursor-pointer h-[26rem] flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
    
      <div className="h-[18rem] w-[15rem] overflow-hidden">
        <img className="object-cover object-top h-full w-full hover:scale-110 transition-all duration-300 cursor-zoom-in" src={item.image} />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 ">
          {item.brand}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
