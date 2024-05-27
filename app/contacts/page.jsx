import Contacts from "@/components/contacts/Contacts";
import BreadCrumbs from "@/components/featers/breadCrumbs/BreadCrumbs";
import Map from "@/components/map/Map";
import React from "react";

export default function page() {
  return (
    <div className="text-center">
      <BreadCrumbs />
      <div className=" my-10">
        <h1 className="text-2xl font-semibold">Контакты</h1>
      </div>
      <Contacts />
      <Map />
    </div>
  );
}
