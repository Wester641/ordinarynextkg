"use client";

import BreadCrumbs from "@/components/featers/breadCrumbs/BreadCrumbs";
import { productsForBank } from "../../../lib/constans/productsForBank";
import { useParams } from "next/navigation";
import { Link } from "lucide-react";
import Image from "next/image";

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
    <>
      <BreadCrumbs />
      <div className="flex">
        <div className="w-2/5">
          <Image
            className="h-[300px]"
            src={product.images[0]}
            height={300}
            alt="img-undefined"
          />
        </div>
        <div className="flex flex-col w-3/5 gap-3">
          <h1 className="text-xl font-bold">{product.name}</h1>
          {
            <span
              className={product.completed ? "text-salesgreen" : "text-red-500"}
            >
              {product.completed ? "В наличии" : "Под заказ"}
            </span>
          }
          <span>Оптом и в розницу</span>
          <p className="text-2xl">{product.price}</p>
          <p>{product.specifications.description}</p>
        </div>
      </div>
    </>
  );
}
