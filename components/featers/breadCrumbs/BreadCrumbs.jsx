"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoHome from "../../../public/Img/home.svg";

function BreadCrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  console.log(segments);
  const buildPath = (index) => "/" + segments.slice(0, index + 1).join("/");

  const getTranslation = (segment, index) => {
    // const defaultTranslation = index === 1 ? "Китайский чай пример" : segment;

    switch (segment) {
      case "catalogs":
        return "Каталог товаров";
      case "materialforbank":
        return "Материалы для упаковки банковских ценностей";
      case "materialforinkas":
        return "Расходные материалы для инкассации";
      case "materialforplomb":
        return "Материалы для пломбирования";
      case "techtkan":
        return "Технические ткани";
      case "meshoktechtkan":
        return "Мешковина упаковочная ткань";
      case "sales":
        return "Акции";
      case "about":
        return "О нас";
      case "contacts":
        return "Контакты";
      case "delivery":
        return "Доставки и оплаты";
      case "articles":
        return "Статьи";
      case "product":
        return "Продукты";
      case "1":
        return "Пломба свинцовая D-10 мм";
      case "2":
        return "Мешок для монет";
      case "3":
        return "Пломба пластиковая номерная ФАСТ";
      case "whatsapp":
        return "Контакты для оформления заказа";
      default:
        return segment;
    }
  };
  return (
    <div className="hidden md:block relative h-8 sm:h-0 border-b border-[#d9d9d9] bg-[#fff]">
      <div className="inline-block absolute left-[2%] bottom-2 ss:bottom-4 ">
        <Breadcrumb className="mt-5 flex gap-3">
          <BreadcrumbItem>
            <BreadcrumbLink className="text-sm" href="/">
              <Image src={logoHome} width={16} height={16} alt="home" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => (
            <BreadcrumbList key={index} className="">
              <BreadcrumbSeparator />
              {index === segments.length - 1 ? (
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {getTranslation(segment, index)}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink href={buildPath(index)}>
                    {getTranslation(segment, index)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
            </BreadcrumbList>
          ))}
        </Breadcrumb>
      </div>
    </div>
  );
}

export default BreadCrumbs;

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function BreadCrumbs() {
//   return (
//     <div className="hidden md:block relative h-8 sm:h-0 border-b border-[#d9d9d9] bg-[#fff]">
//       <div className="inline-block absolute left-[2%] bottom-2 ss:bottom-4 hover:text-green">
//         <Link href="/">
//           <Image
//             className=""
//             src={logoHome}
//             width={16}
//             height={16}
//             alt="home"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// }
