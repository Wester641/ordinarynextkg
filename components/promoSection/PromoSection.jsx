import Image from "next/image";
import { callouts } from "../../lib/constans/promoSection";
import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="sm:m-7 mx-3">
      <h2 className="lg:text-3xl font-bold text-gray-900 text-center my-5 bg-green text-white ">
        Группы товаров и услуг
      </h2>
      <div className="grid grid-cols-3 overflow-hidden place-items-center gap-3  ">
        {callouts.map((el) => (
          <div
            key={el.id}
            className="border w-full  h-32 md:h-[450px] sm:h-[300px]  relative border-[#d9d9d9] cursor-pointer hover:opacity-75"
          >
            <Link href={el.href}>
              <Image
                key={el.id}
                className="h-full w-full object-contain"
                src={el.imageOrg}
                width={200}
                height={200}
                alt="img"
              />
            </Link>
            <p className="bg-green text-[#fff]  min-h-8 sm:py-2 sm:text-base text-xs md:text-xl absolute w-full bottom-5 text-center opacity-80 ">
              <span className="block ">{el.description}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
