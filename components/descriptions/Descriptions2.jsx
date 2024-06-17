import React from "react";
import { Descriptions22 } from "../../lib/constans/descriptions";
import SectionDesc from "./SectionDesc";
import Button from "../buttons/ButtonCustom";

export default function Descriptions2() {
  return (
    <section className="max-w-full text-[#4d4d4d] shadow-4xl  m-5 py-5 md:pr-3 flex flex-col gap-10">
      <div>
        <h2 className="text-xl text-center my-5">
          Лучшие условия для оптово-розничных покупок в интернет-магазине
        </h2>
        {Descriptions22.map((el) => (
          <div
            className="flex hover:bg-zinc-300 cursor-pointer py-2 md:px-3 mx-3"
            key={el.id}
          >
            <SectionDesc
              className="hidden"
              icon={el.icon}
              description={el.description}
              subTitle={el.subTitle}
            />
          </div>
        ))}
      </div>
      <Button name="К оформлению заказа" />
    </section>
  );
}
