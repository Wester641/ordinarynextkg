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
              {item.categories.map((el, idx) => (
                <li
                  className="text-[0.8rem] hover:bg-green cursor-pointer"
                  key={idx}
                >
                  <Link href={item.path || "#"}>{el}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <div className="text-center text-[0.7rem]">
          <Link className="hover:bg-green" href="github.com/Wester641">
            Сайт создан на платформе Satu.kz
          </Link>
          <div>
            ТОО DMR Company - С НАМИ НАДЕЖНО город Алматы |
            <Link className="hover:bg-green" href="github.com/Wester641">
              Пожаловаться на контент
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
