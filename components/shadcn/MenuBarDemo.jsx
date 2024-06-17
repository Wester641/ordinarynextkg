import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import React from "react";
import logoPhone from "@/public/Img/icon/telephone-call.png";
import Link from "next/link";

function MenuBarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer gap-2 hover:text-green">
          <Image
            className=" text-salesgreen hover:opacity-70 rounded"
            src={logoPhone}
            width={35}
            height={35}
            alt="what'sapp"
          />
          <span className="w-20 text-start">Номера телефонов</span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="flex flex-col items-start text-[#333]">
            {/* New Tab <MenubarShortcut>⌘T</MenubarShortcut> */}
            <p className="text-lg font-normal">+996 (500) 37-00-02</p>
            <p className="mx-2 text-green">для заказа </p>
          </MenubarItem>
          <MenubarItem className="flex flex-col items-start text-[#333]">
            <p className="text-lg font-normal">+996 (500) 37-00-02</p>
            <p className="mx-2 text-green">
              для заказа в{" "}
              <Link className="text-salesgreen" href={"/whatsapp"}>
                Whatsapp
              </Link>
            </p>
          </MenubarItem>
          <MenubarItem className="flex flex-col items-start text-[#333]">
            <p className="text-lg font-normal">+996 (500) 37-00-02</p>
            <p className="mx-2 text-green">
              для заказа в{" "}
              <Link className="text-salesgreen" href={"/whatsapp"}>
                Telegram
              </Link>
            </p>
          </MenubarItem>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default MenuBarDemo;
