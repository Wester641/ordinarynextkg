import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutComponentDesc({
  description = "Для проведения кассовых операций (денежные накладки, бандерольные ленты, пакеты для вакуумной упаковки банкнот и мелочи).",
  image,
  border,
  title = "Упаковочные материалы. ",
  className = "flex flex-col md:flex-row text-start justify-between items-center sm:h-[200px]  mx-3 p-3 bg-[#ececec] gap-3",
  classNameBorder = "border border-[#fff]",
}) {
  return (
    <section className={className}>
      <div className="">
        <Image src={image} alt="money" width={170} />
      </div>
      <div className="flex flex-col justify-center gap-3">
        <Link href={"/"}>
          <h1 className="block text-xl hover:opacity-50">{title}</h1>
        </Link>
        <div className={classNameBorder}>{border}</div>
        <p className="block text-base">{description}</p>
      </div>
    </section>
  );
}
