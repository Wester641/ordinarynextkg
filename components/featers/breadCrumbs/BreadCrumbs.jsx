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
                  <BreadcrumbPage>{segment}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink href={buildPath(index)}>
                    {segment}
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
