import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoHome from "../../../public/Img/home.svg";

export default function BreadCrumbs() {
  return (
    <div className="hidden md:block relative h-8 sm:h-0 border-b border-[#d9d9d9] bg-[#fff]">
      <div className="inline-block absolute left-[2%] bottom-2 ss:bottom-4 hover:text-green">
        <Link href="/">
          <Image
            className=""
            src={logoHome}
            width={16}
            height={16}
            alt="home"
          />
        </Link>
      </div>
    </div>
  );
}
