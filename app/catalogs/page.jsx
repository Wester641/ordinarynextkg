import BreadCrumbs from "@/components/featers/breadCrumbs/BreadCrumbs";
import ProductsCardsCustom from "@/components/productsCards/ProductCardsCustom";
import PromoSection from "@/components/promoSection/PromoSection";
import React from "react";

export default function Catalogs() {
  return (
    <div className="text-center">
      <BreadCrumbs />
      <PromoSection />
      <ProductsCardsCustom />
    </div>
  );
}
