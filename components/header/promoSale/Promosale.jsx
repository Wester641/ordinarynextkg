import React from "react";

export default function Promosale() {
  return (
    <div className="flex w-full h-12 text-sm sm:text-base  justify-center items-center gap-3 bg-[rgb(101,193,46)] sm:border-b sm:border-[#797979]">
      <p className=" text-zinc-800">Акция с 07.12.2022-31.01.2023 года</p>
      <button className="px-[0.9rem] py-[0.2rem] text border border-stone-800 text-zinc-800">
        Спешите
      </button>
    </div>
  );
}
