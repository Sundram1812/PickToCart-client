import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from "./HomeSectionCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { kurta } from "../../../data/kurta";

function HomeSectionCardCarousel({products, productsName}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    486: {items: 1.5},
    600: { items: 2 },
    720: {items: 2.5},
    885: { items: 3 },
    1024: { items: 3.5 },
    1300: {items:4.5}
  };




  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = products.map((item) => <HomeSectionCard item={item} />);

  return (
    <div className="relative px-4 lg:px-8 py-2">
    <h1 className="text-start font-extrabold text-xl my-4 px-8 underline ">{productsName}</h1>
      <div className="relative px-4">
        <AliceCarousel
          key={activeIndex}
          mouseTracking
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex} 
          animationDuration={20}
          controlsStrategy="alternate"
        />
      </div>


      {activeIndex !== items.length - 5 && (
        <button
          onClick={slideNext}
          className="absolute right-0 top-[10rem] py-4 px-2 shadow-md rounded-md   z-50 bg-white "
        >
          <ArrowForwardIosIcon />
        </button>
      )}

      {activeIndex !== 0 && (
        <button
          onClick={slidePrev}
          className="absolute left-0 top-[10rem] py-4 px-2 shadow-md rounded-md  z-50 bg-white  "
        >
          <ArrowBackIosNewIcon />
        </button>
      )}
    </div>
  );
}

export default HomeSectionCardCarousel;
