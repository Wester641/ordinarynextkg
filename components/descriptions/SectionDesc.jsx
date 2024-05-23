import Image from "next/image";
import React from "react";

export default function SectionDesc({ title, subTitle, icon, description }) {
  return (
    <section>
      <div>
        <div className="flex items-center md:py-3 ">
          {icon ? (
            <Image
              className="hidden md:block w-[50px] h-[50px] border-2 border-green px-[10px] rounded-full mx-5"
              src={icon}
              alt="icon"
            />
          ) : null}
          <div className="text-[0.9rem] py-3 ">
            <h3 className="font-semibold">{subTitle}</h3>
            {description}
          </div>
        </div>
      </div>
    </section>
  );
}
