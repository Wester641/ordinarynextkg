"use client";

import BreadCrumbs from "@/components/featers/breadCrumbs/BreadCrumbs";
import { productsForBank } from "../../../lib/constans/productsForBank";
import { useParams } from "next/navigation";
import { Link } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ProductIdInfo from "@/components/productsCards/productIdInfo/ProductIdInfo";

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;

  const product = productsForBank.find(
    (product) => product.id === parseInt(id, 10)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className=" min-h-screen">
      <BreadCrumbs />
      <div className="flex h-1/2 gap-8 m-5 ">
        <div className="w-2/5 ">
          <div className="border border-[#d9d9d9] ">
            <div className="w-full h-[350px] flex items-center justify-center">
              <Image
                className="h-[300px] object-contain"
                src={product.images[0]}
                height={300}
                alt="img-undefined"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/5 gap-5 border border-[#d9d9d9] p-5">
          <h1 className="text-xl font-bold">{product.name}</h1>
          {
            <span
              className={
                product.completed
                  ? "text-salesgreen text-sm"
                  : "text-sm text-red-500"
              }
            >
              {product.completed ? "В наличии" : "Под заказ"}
            </span>
          }
          <span>Оптом и в розницу</span>
          <div className="flex justify-start">
            <Button
              name={"Купить"}
              href={"/catalogs"}
              className={
                " bg-red-500 rounded py-2 px-12 text-white-smoke font-semibold cursor-pointer  shadow-md justify-start"
              }
            />
          </div>
          <p className="text-2xl">{product.price}</p>
          <p className="text-sm">{product.specifications.description}</p>
        </div>
      </div>
      {/* <div className="h-[50px] border border-[#d9d9d9] m-5"></div> */}
      <ProductIdInfo
        title={product.name}
        name={product.name}
        desc={product.specifications.description}
      />
    </section>
  );
}
