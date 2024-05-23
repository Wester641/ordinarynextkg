import Image from "next/image";
import React from "react";
import aboutBanner from "../../public/Img/ForCarousel/ForCarouse3.png";
import Button from "../ui/Button";

export default function AboutComponent({
  className,
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, adipisci.",
  descriptionsm = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, adipisci. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, quod!",
  image = { aboutBanner },
  border,
}) {
  return (
    <div
      className={
        className ||
        "flex flex-col justify-around max-w-full h-[500px] bg-green overflow-hidden mx-3 mb-24"
      }
    >
      <div className="flex flex-col justify-center w-full h-full text-center px-3">
        <p
          className={className || "text-xl h-full flex justify-center flex-col"}
        >
          {description}
        </p>
        <div className="border border-[#fff]">{border}</div>
        <p
          className={className || "text-sm h-full flex justify-center flex-col"}
        >
          {descriptionsm}
        </p>
      </div>
      <div className="my-5">
        <Image
          className="hidden md:block object-contain"
          src={image}
          alt="aboutBanner"
        />
        <Button
          name="Посмотреть ассортимент"
          className="text-black py-2 px-11 bg-yellow-600 cursor-pointer rounded hover:opacity-75"
        />
      </div>
    </div>
  );
}
