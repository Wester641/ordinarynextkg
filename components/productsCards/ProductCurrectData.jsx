"use client";

import React from "react";
import ProductCustom from "./ProductCustom";
import { productsForBank } from "../../lib/constans/productsForBank";
import Link from "next/link";

export default function ProductCurrectData() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-4  gap-5 mx-3 my-3 xl:place-items-center ">
          {productsForBank.map((card) => (
            <Link
              className=" w-full xl:w-11/12 grid place-items-center"
              key={card.id}
              href={`/product/${card.id}`}
            >
              <ProductCustom
                image={card.images && card.images[0] ? card.images[0] : ""}
                title={card.name}
                completed={
                  <span
                    className={
                      card.completed ? "text-salesgreen" : "text-red-500"
                    }
                  >
                    {" "}
                    {card.completed ? "В наличии" : "Под заказ"}
                  </span>
                }
                price={card.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
