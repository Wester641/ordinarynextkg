"use client";
import SimpleSlider from "../components/simpleslider/SimpleSlider";

import NavbarSection from "../components/header/navbar/NavbarSection";
import PromoBanner from "../components/promoSection/PromoBanner";
import PromoSection2 from "../components/promoSection/PromoSection2";
import Descriptions from "../components/descriptions/Descriptions";
import Descriptions2 from "../components/descriptions/Descriptions2";
import Descriptions3 from "../components/descriptions/Descriptions3";
import DescMaps from "../components/descriptions/DescMaps";
import DescEnd from "../components/descriptions/DescEnd";
import Portfolio from "../components/promoSection/PortfolioComponent";
import PromoSection from "../components/promoSection/PromoSection";
import ProductsCardsCustom from "../components/productsCards/ProductCardsCustom";

const Home = () => {
  return (
    <div className="">
      <SimpleSlider />
      <PromoSection />
      <ProductsCardsCustom />
      <PromoBanner />
      <PromoSection2 />
      <Descriptions />
      <Descriptions2 />
      <Descriptions3 />
      <DescMaps />
      <DescEnd />
      <Portfolio />
    </div>
  );
};

export default Home;
