import React from "react";
import { DescMapsAndIcons } from "../../lib/constans/descriptions";
import Button from "../buttons/ButtonCustom";
import Image from "next/image";

export default function DescMaps() {
  return (
    <>
      <Button
        name="Больше комментариев"
        className="text-base rounded py-3 px-11 text-green font-bold border border-green hover:bg-green hover:text-[#fff] mt-10 "
      />
      <section className="max-w-full text-[#4d4d4d] shadow-4xl  m-5 py-10 flex flex-col gap-10">
        <h2 className="text-center text-xl">
          Оформить заказ пломбировочной и упаковочной продукции
        </h2>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          {DescMapsAndIcons.map((el) => (
            <div
              key={el.id}
              className="flex flex-row-reverse items-start justify-center"
            >
              <div className="flex flex-col justify-start items-center mx-7 lg:gap-7 my-7 md:my-0 ">
                <Image src={el.icon} className="h-[60px] w-[60px]" alt="icon" />
                <p className="text-[0.8rem] text-center">{el.description}</p>
              </div>
              <p className="hidden text-2xl md:block">{el.arrow}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
