import Image from "next/image";
import { callouts } from "../../lib/constans/promoSection";
import Button from "../ui/Button";
import Link from "next/link";

export default function PromoSection2() {
  return (
    <section className="sm:mx-5 mx-3 my-3">
      <div className="grid grid-cols-3 shadow-4xl overflow-hidden place-items-center cursor-pointer py-5 my-3">
        {callouts.slice(0, 3).map((el) => (
          <>
            <div
              key={el.id}
              className="border w-[85%]  h-32 sm:h-[230px] md:h-[300px] relative border-[#d9d9d9] hover:opacity-75 my-7 mx-7"
            >
              <Link href="/#">
                <Image
                  key={el.id}
                  className="h-full w-full object-contain "
                  src={el.imageOrg}
                  width={200}
                  height={200}
                  alt="img"
                />
              </Link>
              <p className=" text-[#777777] h-8 sm:h-12 sm:text-base text-xs absolute w-full  text-center opacity-80 ">
                {/* {el.name} */}
                <span className="block">{el.description}</span>
              </p>
            </div>
          </>
        ))}
      </div>
      <Button name="Посмотреть все работы" />
    </section>
  );
}
