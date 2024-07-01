import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

function MainCarousel() {
  const items = MainCarouselData.map((item) => (
    <img role="presentation" src={item.image} alt="" className="-z-[30]" />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
}
export default MainCarousel;
