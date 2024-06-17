import React from "react";
import imageCarousel10 from "../../public/Img/ForCarousel/emotions.jpg";
import Image from "next/image";

export default function PromoBanner() {
  return (
    <div className="w-full mt-10">
      <h1 className="text-base sm:text-3xl text-center text-black font-bold py-5">
        Пломбировочная и упаковочные продукции
      </h1>
      <Image className="m-auto" src={imageCarousel10} alt="img..." />
    </div>
  );
}
