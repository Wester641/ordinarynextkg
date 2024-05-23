import React from "react";
import logoImage from "../../public/Img/icon/ContactsWhatsApp.svg";
import logoWhatsapp from "../../public/Img/whatsapp(11).png";
import Link from "next/link";
import Image from "next/image";

export default function WhatsAppComponent() {
  return (
    <div className="fixed z-50 right-[5%] rounded-full bottom-[10%] bg-[#0000007f] hover:bg-green">
      <Link className=" cursor-pointer " href="https://wa.me/+996500370002">
        <Image src={logoImage} width={80} height={80} alt="what'sapp" />
      </Link>
    </div>
  );
}
