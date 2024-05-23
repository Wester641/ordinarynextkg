import Link from "next/link";
import React from "react";

const navbarArray = [
  { name: "Главная", path: "/" },
  { name: "Каталог", path: "/catalogs" },
  { name: "О нас", path: "/about" },
  { name: "Контакты", path: "/contacts" },
  { name: "Доставка и оплата", path: "/delivery" },
  { name: "Статьи", path: "/articles" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function NavbarSection() {
  return (
    <nav className="hidden lg:flex justify-center relative h-28">
      <div className="absolute top-3 shadow-md w-[80%] text-center flex items-center justify-center gap-5  h-12 border-[2px] border-green ">
        {navbarArray.map((el) => (
          <Link
            key={el.id}
            href={el.path}
            className={classNames(
              el.current
                ? "bg-green-900 text-green bold "
                : "text-green-300 hover:bg-green-700 hover:text-green bold",
              "rounded-md px-3 py-2"
            )}
          >
            {el.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
