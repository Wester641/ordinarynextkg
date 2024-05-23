import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import PortfolioComponent from "@/components/promoSection/PortfolioComponent";
import React from "react";

export default function Portfolio() {
  return (
    <div className="">
      <BreadCrumbs />
      <h1 className="text-center text-3xl py-5 font-semibold">Портфолио</h1>
      <PortfolioComponent />
    </div>
  );
}
