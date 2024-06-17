"use client";

import BreadCrumbs from "@/components/featers/breadCrumbs/BreadCrumbs";
import { productsForBank } from "../../../lib/constans/productsForBank";
import { useParams } from "next/navigation";
import Image from "next/image";
import Button from "@/components/buttons/ButtonCustom";
import ProductIdInfo from "@/components/productsCards/productIdInfo/ProductIdInfo";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      {/* <BreadCrumbs /> */}
      <div className="flex flex-wrap xs:flex-nowrap xs:h-1/2 gap-8 m-5 ">
        <div className=" w-full xs:w-2/5 ">
          <div className="border border-[#d9d9d9] ">
            <div className="xs:w-full h-[350px] flex items-center justify-center ">
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={5000}
                className="w-full overflow-hidden h-[300px] object-contain"
              >
                {product.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    height={300}
                    className="h-[300px] object-contain"
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full xs:w-3/5 gap-5 border border-[#d9d9d9] p-5">
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
