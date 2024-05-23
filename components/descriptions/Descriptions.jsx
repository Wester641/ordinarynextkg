import React from "react";
import { Descriptions1 } from "../../lib/constans/descriptions";
import SectionDesc from "./SectionDesc";
import Button from "../ui/Button";

export default function Descriptions() {
  return (
    <section className="max-w-full text-[#4d4d4d] shadow-4xl  m-5 py-5 md:pr-3 flex flex-col gap-10">
      <h2 className="text-center text-xl">
        Качественная и надежная защита от несанкционированного доступа
      </h2>
      <div className=" md:grid md:grid-cols-2  gap-5 py-2 md:px-3 mx-3">
        {Descriptions1.map((el) => (
          <div className="flex" key={el.id}>
            <SectionDesc title="" icon={el.icon} description={el.description} />
          </div>
        ))}
      </div>
      <Button name="Увидеть ассортимент" />
    </section>
  );
}
