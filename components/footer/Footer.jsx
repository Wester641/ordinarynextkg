import React from "react";
import { footerData } from "../../lib/constans/footer";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" w-full flex flex-col justify-around min-h-[250px]  bg-zinc-800 text-textwhite">
      <div className="hidden xs:flex xs:justify-around md:h-full md:items-start relative">
        {footerData.map((item) => (
          <div key={item.id}>
            <p className="bold text-base pb-2">{item.title}</p>
            <ul className="flex flex-col gap-1">
              {item.categories.map((el) => (
                <Link key={el.id} href={el.path}>
                  <li className="text-[0.8rem] hover:bg-green cursor-pointer">
                    {el.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <div className="text-center text-[0.7rem]">
          <Link className="hover:bg-green" href="https://zafarzhon.vercel.app/">
            Сайт создан на платформе Vercel.app
          </Link>
          <div>
            С НАМИ НАДЕЖНО город Бишкек |{" "}
            <Link
              className="hover:bg-green"
              href="https://zafarzhon.vercel.app/"
            >
              Пожаловаться на контент
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
