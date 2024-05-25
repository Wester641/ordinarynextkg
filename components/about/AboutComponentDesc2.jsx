import Link from "next/link";
import React from "react";

export default function AboutComponentDesc2({ desc, number, className }) {
  return (
    <div
      className={
        (className =
          "mx-3 shadow-lg relative  cursor-pointer rounded flex flex-col  bg-zinc-300 py-12 sm:py-6 px-6 my-3 group")
      }
    >
      <div className="sm:text-sm">
        {desc || (
          <div className="">
            <p className="relative">
              Оставьте свою заявку на сайте компании, по телефону или в
            </p>
            <Link href={"https://wa.me/+996500370002"}>
              <span className="text-green "> WhatsApp.</span>
            </Link>
          </div>
        )}
      </div>
      <div className="text-6xl absolute right-[7%] -z-0 group-hover:-translate-y-[70%] opacity-20 font-bold transition-transform duration-300 ease-in-out">
        <span className="hover:opacity-100">{number}</span>
      </div>
    </div>
  );
}
