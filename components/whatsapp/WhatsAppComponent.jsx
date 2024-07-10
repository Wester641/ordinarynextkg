import React from "react";
import logoImage from "../../public/Img/icon/ContactsWhatsApp.svg";
import logoWhatsapp from "../../public/Img/whatsapp(11).png";
import Link from "next/link";
import Image from "next/image";

export default function WhatsAppComponent() {
  return (
    <div className="fixed z-50 right-[5%] rounded-full bottom-[10%] bg-[#000000d1] hover:bg-green spin-slow  ">
      <div className="relative ">
        <Link className="cursor-pointer " href="https://wa.me/+996500370002">
          <Image
            className="animate-none"
            src={logoImage}
            width={60}
            height={60}
            alt="what'sapp"
          />
          <Image
            className="absolute top-0"
            src={logoImage}
            width={60}
            height={60}
            alt="what'sapp"
          />
        </Link>
      </div>
    </div>
  );
}
