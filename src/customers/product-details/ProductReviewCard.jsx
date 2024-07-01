import { Avatar, Rating } from "@mui/material";
import React from "react";

function ProductReviewCard() {
  return (
    <div className=" flex flex-wrap justify-center lg:justify-start items-center space-x-5 space-y-10  ">
      <div className="">
        <Avatar alt="Sundram kumar" src="#" sx={{ bgcolor: "#6064de" }}>
          S
        </Avatar>
      </div>
      <div>
        <h2 className="font-semibold">Sundram</h2>
        <h3 className="text-sm opa-50">June 3, 2024</h3>
        <Rating precision={0.5} value={4.5} readOnly />
        <p className="text-sm opacity-50">Nice product and I love it</p>
      </div>
    </div>
  );
}

export default ProductReviewCard;
