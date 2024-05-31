"use client";
import Image from "next/image";
import { callouts } from "../../lib/constans/promoSection";
import Link from "next/link";

export default function PromoSection2() {
  return (
    <section className="sm:m-5 mx-3">
      <div className="grid grid-cols-3 shadow-4xl overflow-hidden place-items-center cursor-pointer py-5">
        {callouts.map((el) => (
          <Link key={el.id} href={"/catalogs"}>
            <div className="border w-[85%]  h-32 md:h-[300px] sm:h-[230px] relative border-[#d9d9d9] hover:opacity-75 my-7 mx-7">
              <Image
                key={el.id}
                className="h-full w-full object-contain "
                src={el.imageOrg}
                width={200}
                height={200}
                alt="img"
              />
              <p className=" text-[#777777] h-8 sm:h-12 sm:text-base text-xs absolute w-full  text-center opacity-80 ">
                <span className="block">{el.description}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
