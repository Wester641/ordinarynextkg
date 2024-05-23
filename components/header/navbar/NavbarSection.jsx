import Link from "next/link";
import React, { useState } from "react";

const navbarArray = [
  { id: 1, name: "Главная", path: "/" },
  {
    id: 2,
    name: "Каталог",
    path: "/catalogs",
    submenu: [
      { id: 1, name: "Акции", path: "/catalogs/sales" },
      {
        id: 2,
        name: "Материалы для упаковки банковских ценностей",
        path: "/catalogs/materialforbank",
      },
      {
        id: 3,
        name: "Расходные материалы для инкассации",
        path: "/catalogs/materialforinkas",
      },
      {
        id: 4,
        name: "Материалы для пломбирования",
        path: "/catalogs/materialforplomb",
      },
      { id: 5, name: "Технические ткани", path: "/catalogs/sales" },
      { id: 6, name: "Мешковина, упаковочная ткань", path: "/catalogs/sales" },
    ],
  },
  { id: 3, name: "О нас", path: "/about" },
  { id: 4, name: "Контакты", path: "/contacts" },
  { id: 5, name: "Доставка и оплата", path: "/delivery" },
  { id: 6, name: "Статьи", path: "/articles" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function NavbarSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
    setTimeoutId(id);
  };

  return (
    <nav className="hidden lg:flex justify-center relative">
      <div className="absolute top-3 shadow-md z-10 bg-slate-50 w-[80%] text-center flex items-center justify-center gap-5  h-12 border-[2px] border-green ">
        {navbarArray.map((el) => (
          <div
            key={el.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative "
          >
            <Link
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
            {el.submenu && dropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 bg-slate-50 shadow-md text-start">
                {el.submenu.map((submenuItem) => (
                  <div key={submenuItem.id}>
                    <Link
                      href={submenuItem.path}
                      className="block px-4 text-[0.8rem] hover:text-green hover:opacity-80 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {submenuItem.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
