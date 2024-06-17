import React from "react";

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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

function SimpleSlider() {
  return (
    <Carousel
      className="h-96"
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={10000}
    >
      {carouselArray.map((image, index) => (
        <div className="border h-96" key={index}>
          <Image
            className=" object-cover"
            src={image}
            alt={`Slide ${index}`}
            layout="fill"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default SimpleSlider;
