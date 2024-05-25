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
  classNameBorder,
  style,
}) {
  return (
    <div
      className={
        className ||
        "flex flex-col justify-around max-w-full h-[500px] bg-green overflow-hidden mx-3 mb-24"
      }
    >
      <div className="flex flex-col justify-center  w-full h-full text-center md:text-start text-[#fff] px-3">
        <p
          className={"text-xl h-full flex justify-center flex-col md:text-2xl"}
        >
          {description}
        </p>
        <div className={classNameBorder || "border border-[#fff]"}>
          {border}
        </div>
        <p className={"text-sm h-full flex flex-col"} style={style}>
          {descriptionsm}
        </p>
      </div>
      <div className="my-5 md:my-0 shrink-0">
        <Image
          className="hidden md:block object-contain h-full"
          src={image}
          alt="aboutBanner"
        />
        <Button
          name="Посмотреть ассортимент"
          className=" hidden text-black py-2 px-11 bg-yellow-600 cursor-pointer rounded hover:opacity-75"
        />
      </div>
    </div>
  );
}
