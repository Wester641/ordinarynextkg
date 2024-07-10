"use client";
import React, { useEffect } from "react";
import { productsForBank } from "../../../lib/constans/productsForBank";
import ProductCustom from "@/components/productsCards/ProductCustom";

export default function MaterialForBank() {
  const indicesToSelect = [1, 3, 5, 14, 16, 25];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const product = [];

  indicesToSelect.forEach((index) => {
    if (productsForBank[index] !== undefined) {
      product.push(productsForBank[index]);
    }
  });

  useEffect(() => {
    document.title = "Материалы для упаковки банковских ценностей";
  }, [product]);

  return (
    <>
      <div className="my-10">
        <h2 className="text-center text-xl font-semibold my-10">
          Материалы для упаковки банковских ценностей
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
        <div>
          <div class="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-with-dividers"
              type="button"
              class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Actions
              <svg
                class="hs-dropdown-open:rotate-180 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor" 
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
              aria-labelledby="hs-dropdown-with-dividers"
            >
              <div class="py-2 first:pt-0 last:pb-0">
                <p
                  class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Newsletter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
