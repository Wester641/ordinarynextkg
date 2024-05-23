"use client";
import AboutComponent from "@/components/about/AboutComponent";
import BreadCrumbs from "@/components/featers/breadCrumbs/BreadCrumbs";
import React from "react";

const About = () => {
  return (
    <div className=" bg-zinc-100">
      <BreadCrumbs />
      <h1 className="px-3 pt-5 pb-3 text-lg font-semibold">О нас</h1>
      <AboutComponent />
      <AboutComponent />
      <AboutComponent />
      <AboutComponent />
      <AboutComponent />
    </div>
  );
};

export default About;
