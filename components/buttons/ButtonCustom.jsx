import Link from "next/link";
import React from "react";

export default function ButtonCustom({ name, className, href = "/#" }) {
  return (
    <div className="flex justify-center">
      <button
        className={
          className ||
          "text-base rounded py-3 px-11 text-green font-bold border border-green hover:bg-green hover:text-[#fff] "
        }
      >
        <Link href={href}>{name}</Link>
      </button>
    </div>
  );
}
