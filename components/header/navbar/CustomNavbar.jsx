"use client";
import Link from "next/link";
import React from "react";
import DropDown from "../dropdown/Dropdown";

export default function NavbarSection() {
  return (
    <nav className="hidden lg:flex justify-center relative h-28">
      <div className="absolute top-3 shadow-md w-[80%] text-center flex items-center justify-center gap-8  h-12 border-[2px] border-green  ">
        <Link
          className="text-green-300 hover:bg-green-700 hover:text-green bold"
          href={"/"}
        >
          Главная
        </Link>

        <DropDown />
        <Link
          className="text-green-300 hover:bg-green-700 hover:text-green bold"
          href={"/about"}
        >
          О нас
        </Link>
        <Link
          className="text-green-300 hover:bg-green-700 hover:text-green bold"
          href={"/contacts"}
        >
          Контакты
        </Link>
        <Link
          className="text-green-300 hover:bg-green-700 hover:text-green bold"
          href={"/delivery"}
        >
          Доставка и оплата
        </Link>
        <Link
          className="text-green-300 hover:bg-green-700 hover:text-green bold"
          href={"/articles"}
        >
          Статьи
        </Link>
      </div>
    </nav>
  );
}
