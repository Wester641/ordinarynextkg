import React from "react";
import { DescMapsAndIcons } from "../../../lib/constans/descriptions";
import Image from "next/image";

function ProductIdInfo({
  title = "Минимальная партия на мешковину - 10 погонных метров при ширине 100см.",
  name = "Мешковина из джута (420,0 г/м2)",
  desc,
}) {
  return (
    <div className="min-h-screen border border-[#d9d9d9] shadow-4xl w-10/12 mx-5 bg-[#f6f7fa] my-10">
      <nav className="w-full h-[80px] flex   border-b border-b-green">
        <div className="border-r border-r-[#d9d9d9] w-1/3 flex justify-center items-center hover:bg-zinc-200 hover:border-t hover:border-t-green">
          <button>Описание</button>
        </div>
        <div className="w-1/3 border-r border-r-[#d9d9d9] flex justify-center items-center hover:bg-zinc-200  hover:border-t hover:border-t-green ">
          <button>Характеристика</button>
        </div>
        <div className="w-1/3 flex justify-center items-center hover:bg-zinc-200 hover:border-t hover:border-t-green">
          <button>Информация для заказа</button>
        </div>
      </nav>
      <div className="border border-[#fae2b3] m-5 h-14 bg-[#faebcc] flex items-center px-5">
        <div className="text-xs font-medium">
          заявки принимаем только по{" "}
          <span className="cursor-pointer text-salesgreen">WhatsApp</span>
        </div>
      </div>
      <div className=" h-[300px] flex flex-col gap-2 p-5">
        <div className="text-sm">{title}</div>
        <div className="text-2xl mb-10">{name}</div>
        <div className="text-sm">{desc}</div>
      </div>
      <section className="max-w-full text-[#4d4d4d] m-5 py-10 flex flex-col gap-10">
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
    </div>
  );
}

export default ProductIdInfo;
