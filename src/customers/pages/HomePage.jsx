import React from "react";
import MainCarousel from "../components/home-carousel/MainCarousel";
import HomeSectionCardCarousel from "../components/home-section-card/HomeSectionCardCarousel";
import { kurta } from "../../data/kurta";
import { gounsPage1 } from "../../data/gounsPage1";
import { lehngacholiPage2 } from "../../data/lehngacholiPage2";
import { mensShoesPage1 } from "../../data/mensShoesPage1";

function HomePage() {
  return (
    <div className="scroll-smooth">
      <MainCarousel />
      <div className="my-10 space-y-10 border mx-4 ">
        <HomeSectionCardCarousel products={kurta} productsName={"kurta"} />
        <HomeSectionCardCarousel products={gounsPage1} productsName={"Gouns"} />
        <HomeSectionCardCarousel products={lehngacholiPage2} productsName={"Lehnga Choli"} />
        <HomeSectionCardCarousel products={mensShoesPage1} productsName={"Mens Shoes"} />
      </div>
    </div>
  );
}

export default HomePage;
