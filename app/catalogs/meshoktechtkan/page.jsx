"use client";
import React, { useEffect } from "react";
import { productsForBank } from "../../../lib/constans/productsForBank";
import ProductCustom from "@/components/productsCards/ProductCustom";

export default function Meshoktechtkan() {
  const indicesToSelect = [20, 1, 7, 8, 9, 10];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const product = [];

  indicesToSelect.forEach((index) => {
    if (productsForBank[index] !== undefined) {
      product.push(productsForBank[index]);
    }
  });

  useEffect(() => {
    document.title = "Мешковина, упаковочная ткань";
  }, [product]);

  return (
    <>
      <div className="my-10">
        <h2 className="text-center text-xl font-semibold my-10">
          Мешковина, упаковочная ткань
        </h2>
        <div className="grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-4  gap-5 mx-3 my-3 xl:place-items-center ">
          {product.map((card) => (
            <div
              className=" w-full xl:w-11/12 grid place-items-center"
              key={card.id}
              href={`/product/${card.id}`}
            >
              <ProductCustom
                image={card.images && card.images[0] ? card.images[0] : ""}
                title={card.name}
                href={`/product/${card.id}`}
                completed={
                  <span
                    className={
                      card.completed
                        ? "text-salesgreen text-sm"
                        : "text-red-500 text-sm"
                    }
                  >
                    {" "}
                    {card.completed ? "В наличии" : "Под заказ"}
                  </span>
                }
                price={card.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
