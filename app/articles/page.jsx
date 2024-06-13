import PromoSection2 from "@/components/promoSection/PortfolioComponent";
import PromoSection from "@/components/promoSection/PromoSection";
import React from "react";

export default function Articles() {
  return (
    <div className="text-center my-10">
      <div className="flex flex-col font-semibold gap-5 mb-7 my-5">
        <h1 className="text-3xl">Статьи</h1>
        <p className="text-start text-xl mx-5">Основной раздел</p>
      </div>
      <PromoSection2 />
    </div>
  );
}
