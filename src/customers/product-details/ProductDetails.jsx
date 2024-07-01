import { useEffect, useState } from "react";
import RatingAndReview from "./RatingAndReview";
import ProductInfoGallery from "./ProductInfoGallery";
import ProductInfoContent from "./ProductInfoContent";
import { productInfoData } from "./productInfoData";
import { useParams } from "react-router-dom";
import { findProductById } from "../../state/product/Action";
import { useDispatch, useSelector } from "react-redux";
import ProductDetaileCategoryNav from "./ProductDetaileCategoryNav";

// const product=productInfoData;

export default function ProductDetalis() {
  const dispatch=useDispatch();
  const {product}=useSelector(store=>store);

  const { productId } = useParams()

  console.log("id ;", productId);

  

  useEffect(()=>{
    dispatch(findProductById(productId));
  },[productId])
  console.log(product?.product);
  const cateLevelOne= product?.product?.category.parentCategory.parentCategory;
  const cateLevelTwo= product?.product?.category.parentCategory;
  console.log(cateLevelOne?.name);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >


            <ProductDetaileCategoryNav catName={cateLevelOne?.name}/>
            <ProductDetaileCategoryNav catName={cateLevelTwo?.name}/>

            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product?.product?.category?.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* SECTION FOR PRODUCT INFO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 space-x-8 px-8 py-10">
          <ProductInfoGallery product={product?.product}/>
          <ProductInfoContent productById={product?.product}/>
        </section>

        {/* SECTION FOR REAVIEW AND RATING */}
        <RatingAndReview />
      </div>
    </div>
  );
}
