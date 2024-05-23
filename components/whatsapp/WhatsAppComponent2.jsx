import React from "react";
import logoWhatsapp from "../../public/Img/whatsapp(11).png";
import Link from "next/link";
import Image from "next/image";

export default function WhatsAppComponent2() {
  return (
    <div className="fixed z-50 right-0">
      <Link className=" cursor-pointer " href="https://wa.me/+996500370002">
        <Image src={logoWhatsapp} width={50} height={50} alt="what'sapp" />
      </Link>
    </div>
  );
}
