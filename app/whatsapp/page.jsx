"use client";
import Contacts from "@/components/contacts/Contacts";
import Map from "@/components/map/Map";
import React, { useEffect } from "react";

export default function WhatsApp() {
  useEffect(() => {
    document.title = "Контакты whatsApp +996 555 53 54 55";
  }, []);
  return (
    <div className="text-center">
      <Contacts />
      <Map />
    </div>
  );
}
