import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { productInfoData } from "./productInfoData";
import { Button, Rating } from "@mui/material";
import { Radio, RadioGroup } from "@headlessui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { South } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../state/cart/Action";
import { getUser } from "../../state/auth/action";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const product = productInfoData;

function ProductInfoContent({productById}) {
  const [selectedSize, setSelectedSize] = useState({});
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const user=getUser(jwt)
  const {cart, auth}=useSelector(store=> store)
  const productId=useParams();
  const navigate=useNavigate();
  
  

  const reqData={
    "productId": productId.productId,
    "size": selectedSize?.name
  }

  function handleAddToCart(e){
    e.preventDefault();
    console.log(auth?.user);
    dispatch(addItemToCart(reqData, auth?.user.userId));
    toast.success("Product Added To Cart")
    navigate("/cart")
  }

  console.log(cart.cart);

  return (
    <div className="flex justify-start lg:justify-center lg:col-span-1 col-span-2">
      <div className="lg:col-span-1 my-4 max-w-2xl pb-16 lg:pb-24 px-0 py-2 lg:max-w-7xl lg:px-8 sm:px-6 pr-2">
        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>

          <p className="text-xl lg:text-2xl text-gray-900 font-semibold">
            {productById?.brand}
          </p>
          <p className="text-lg opacity-60 mb-3">
            {productById?.title}
          </p>

          <p className="tracking-tight text-gray-900 space-x-3">
            <span className=" text-lg font-semibold">&#8377;{productById?.discountedPrice}</span>
            <span className="text-gray-400 line-through">&#8377;{productById?.price}</span>
            <span className=" font-semibold text-green-500">{productById?.discountPercent}%off</span>
          </p>

          {/* Reviews */}
          <div className="mt-6 flex gap-2 items-center">
            <Rating name="half-rating" value={3.5} readOnly precision={0.5} />
            <h3 className="text-sm opacity-60 capitalize">56560 ratings</h3>
            <h3 className="text-sm font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
              Reviews
            </h3>
          </div>

          <form className="mt-10 lg:w-[14rem]">
            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
              </div>

              <fieldset aria-label="Choose a size" className="mt-4">
                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="grid grid-cols-4 gap-2 lg:gap-4 sm:grid-cols-8 lg:grid-cols-4"
                >
                  {product.sizes.map((size) => (
                    <Radio
                      key={size.name}
                      value={size}
                      disabled={!size.inStock}
                      className={({ focus }) =>
                        classNames(
                          size.inStock
                            ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                          focus ? "ring-2 ring-indigo-500" : "",
                          "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        )
                      }
                    >
                      {({ checked, focus }) => (
                        <>
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              className={classNames(
                                checked
                                  ? "border-indigo-500"
                                  : "border-transparent",
                                focus ? "border" : "border-2",
                                "pointer-events-none absolute -inset-px rounded-md"
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1={0}
                                  y1={100}
                                  x2={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>

            <Link to={"/cart"}>
            <Button
              onClick={handleAddToCart}
              variant="contained"
              sx={{
                px: "2rem",
                py: "1rem",
                bgcolor: "rgb(96,100,222)",
                my: "1rem",
              }}
            >
              Add to cart
            </Button>
            </Link>
          </form>

        </div>

        {/* Full description */}
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{productById?.description}</p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoContent;
