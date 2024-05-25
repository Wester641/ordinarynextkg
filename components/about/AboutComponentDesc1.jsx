import React from "react";

export default function AboutComponentDesc1({ title, desc, className }) {
  return (
    <div
      className={
        className ||
        "flex border-8 border-[#000] bg-green items-center text-white mx-3 text-center min-h-[200px]"
      }
    >
      <div className="flex h-full flex-col justify-around px-3">
        <div className="text-xl my-3">
          <p>{title}</p>
        </div>
        <div className="text-sm">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
