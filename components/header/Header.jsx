"use client";

import { useState, useEffect } from "react";
import { navigation, userNavigation } from "../../lib/constans/navigationData";
import logoPhone from "../../public/Img/icon/telephone-call.png";
import logoCalendar from "../../public/Img/icon/schedule.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      const links = document.querySelectorAll(".menu-link");
      const handleClick = () => setIsNavOpen(false);
      links.forEach((link) => {
        link.addEventListener("click", handleClick);
      });
      return () => {
        links.forEach((link) => {
          link.removeEventListener("click", handleClick);
        });
      };
    }
  }, [isNavOpen]);

  return (
    <div className="flex bg-neutral-800 sm:bg-[#fff] items-center justify-between border-b border-[#d9d9d9] py-2 ss:py-4 relative transition-transform duration-300 ease-in-out ">
      <div className="flex items-center justify-between w-full ">
        <div
          className="HAMBURGER-ICON space-y-1 sm:space-y-2 bg-green py-3 pr-4 pl-2 rounded-r-3xl hover:bg-dark-green cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-[2px] rounded sm:h-[3px] w-4 sm:w-8 bg-[#fff]"></span>
          <span className="block h-[2px] rounded sm:h-[3px] w-4 sm:w-8 bg-[#fff]"></span>
          <span className="block h-[2px] rounded sm:h-[3px] w-4 sm:w-8 bg-[#fff]"></span>
        </div>
        <div className="hidden sm:block text-black ">
          <h3>Пломбировочная и упаковочная продукции от компании </h3>
        </div>
        {/* <div className="hidden sm:block w-96">
          <input
            className="w-full border-2 border-[#d9d9d9] text-sm py-2 px-1"
            type="text"
            placeholder="Поиск по сайту"
          />
        </div> */}
        <div className="flex px-5 gap-5 ">
          <Link
            className="  hover:bg-salesgreen h-9 rounded bg-salesgreen  xs:bg-[#fff] "
            href="https://wa.me/+996500370002"
          >
            <Image src={logoPhone} width={35} height={35} alt="what'sapp" />
          </Link>
          <Link
            className="hover:bg-salesgreen h-9 rounded bg-salesgreen  xs:bg-[#fff]"
            href="#"
          >
            <Image
              className=" text-salesgreen"
              src={logoCalendar}
              width={35}
              height={35}
              alt="what'sapp"
            />
          </Link>
        </div>
      </div>
      <nav>
        <section className="MOBILE-MENU z-9999 flex ">
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-2 py-2"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="w-full">
              <div className="bg-green text-[#fff] text-center text-lg py-2">
                <h3>Меню</h3>
              </div>
              {navigation.map((item) => (
                <ul
                  key={item.id}
                  className="MENU-LINK-MOBILE-OPEN z-9999 flex flex-col items-start p-3 justify-between border-b border-[#252525] text-sm sm:text-base"
                >
                  <li className="border-gray-400 hover:text-green">
                    <Link className="menu-link" href={item.href}>
                      {item.name}
                    </Link>
                  </li>
                </ul>
              ))}
              <div className="bg-green text-[#fff] text-center text-lg py-2">
                <h3>Контакты</h3>
              </div>
            </div>
            <div>
              <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-start justify-between text-sm z-9999">
                {userNavigation.map((item, index) => (
                  <div
                    key={index}
                    className="my-4 text-start text-sm sm:text-base"
                  >
                    {item.company && <p>{item.company}</p>}
                    {item.name && <p>{item.name}</p>}
                    {item.phoneNumber && (
                      <div>
                        {item.phoneNumber.map((phone, idx) => (
                          <p key={idx}>{phone}</p>
                        ))}
                      </div>
                    )}
                    {item.person && <p>{item.person}</p>}
                    {item.address && <p>{item.address}</p>}
                    {item.email && <p>{item.email}</p>}
                    {item.href && (
                      <Link
                        className="menu-link text-blue-500"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-green text-[#fff] text-center text-lg py-2">
                <h3>Карты</h3>
              </div>
            </div>
          </div>
        </section>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
          transform: translateX(-100%);
        }
        .showMenuNav {
          display: block;
          position: absolute;
          color: rgb(255, 255, 255);
          top: 0;
          left: 0;
          background: rgb(50, 50, 50);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          transform: translateX(0);
        }
        @media (min-width: 768px) {
          .showMenuNav {
            width: 300px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          }
        }
        @media (max-width: 768px) {
          .showMenuNav {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
