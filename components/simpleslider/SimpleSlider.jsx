import React, { useState, useEffect } from "react";

import imageCarousel1 from "../../public/Img/ForCarousel/ForCarousel1.png";
import imageCarousel2 from "../../public/Img/ForCarousel/ForCarousel2.png";
import imageCarousel3 from "../../public/Img/ForCarousel/ForCarouse3.png";
import imageCarousel4 from "../../public/Img/ForCarousel/ForCarousel4.png";
import imageCarousel5 from "../../public/Img/ForCarousel/ForCarousel5.png";
import imageCarousel6 from "../../public/Img/ForCarousel/ForCarousel6.png";
import imageCarousel7 from "../../public/Img/ForCarousel/landscape.jpg";
import imageCarousel8 from "../../public/Img/ForCarousel/autumn.jpg";
import imageCarousel9 from "../../public/Img/ForCarousel/banner.jpg";
import imageCarousel10 from "../../public/Img/ForCarousel/emotions.jpg";
import imageCarousel11 from "../../public/Img/ForCarousel/1812.jpg";
import Image from "next/image";

const carouselArray = [
  imageCarousel8,
  imageCarousel7,
  imageCarousel9,
  imageCarousel10,
  imageCarousel11,
  imageCarousel4,
  imageCarousel5,
  imageCarousel6,
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselArray.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 11000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-[97%] m-auto">
      <div
        className="relative h-28 ss:h-56 w-full shadow-md
 md:h-96 overflow-hidden "
      >
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselArray.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <Image
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full md:object-cover"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black sm:bg-opacity-50 bg-opacity-20 text-white sm:px-4 sm:py-2 px-2 py-1 rounded-l-md z-10"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black sm:bg-opacity-50 bg-opacity-20 text-white sm:px-4 sm:py-2 px-2 py-1 rounded-r-md z-10"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};
export default Slider;
