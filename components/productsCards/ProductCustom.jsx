"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCustom({
  image,
  title,
  price,
  color,
  completed,
}) {
  return (
    <section className="flex flex-col h-72 sm:h-96 md:h-[29rem] w-full items-center  p-1 sm:p-2  group rounded bg-[#f4f4f4] shadow-4xl cursor-pointer hover:shadow-5xl">
      <div className=" border w-full border-[#d9d9d9] h-1/2  ">
        <div className="h-full bg-[#fff]">
          <Image
            className=" h-full w-full object-contain "
            src={image}
            alt="img"
          />
        </div>
      </div>
      <div className="h-1/2 box-border w-full">
        <p className=" flex flex-col h-full justify-between  gap-1 text-[#4b4a4a] text-[11px] lg:text-base sm:text-[12px] py-1 px-1 ">
          {title}
          <span
            className={`block text-md lg:text-sm xl:text-xl text-salesgreen`}
          >
            {completed}
          </span>
          <span className="block text-sm font-semibold lg:text-base xl:text-xl">
            {" "}
            {price} /шт
          </span>
          <button className="w-full bg-red-500 text-[#fff] hover:shadow-3xl rounded-[2px] xl:py-1 opacity-90 ">
            <Link href="/#">Купить</Link>
          </button>
        </p>
      </div>
    </section>
  );
}
