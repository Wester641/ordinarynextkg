import React from "react";
import Button from "../buttons/ButtonCustom";

export default function Contacts() {
  return (
    <section className="">
      <div className="flex flex-col mx-5 text-start text-sm gap-5">
        <div className="flex  gap-[150px] ">
          <span className="w-1/6">Название:</span>
          <span className="w-4/5">
            Индивидуальный предприниматель Жунушалиева Динара - С НАМИ НАДЕЖНО
            город Бишкек{" "}
          </span>
        </div>
        <div className="flex gap-[150px] ">
          <span className="w-1/6">Контактное лицо:</span>
          <span className="w-4/5">Жунушалиева Динара</span>
        </div>
        <div className="flex gap-[150px] ">
          <span className="w-1/6">Сайт компании:</span>
          <span className="text-salesgreen cursor-pointer w-3/5">
            ordinarynextkg.vercel.app
          </span>
        </div>
        <div className="flex gap-[150px] ">
          <span className="w-1/6">Адрес:</span>
          <span className="w-4/5">г. Бишкек, ул. Мусы Жалиля 223</span>
        </div>
        <div className="flex gap-[150px] ">
          <span className="w-1/6">Телефон:</span>
          <div className="w-4/5">
            <span>тел. 0555 53 54 55 заказа </span>
            <span>тел. 0555 53 54 55 заказа, WhatsApp</span>
            {/* <span>+7 (747) 565-49-93Для заказа, WhatsApp</span> */}
          </div>
        </div>
        <div className="flex gap-[150px]">
          <span className="w-1/6">Email:</span>
          <span className=" text-salesgreen cursor-pointer w-4/5">
            d.zhunushalieva@mail.ru
          </span>
        </div>
        <div className="flex gap-[150px]">
          <span className="w-1/6">Сайт компании:</span>
          <span className="text-salesgreen cursor-pointer w-4/5">
            ordinarynextkg.vercel.app
          </span>
        </div>
        <button
          href="https://wa.me/+996500370002"
          className=" w-fit border border-green text-white bg-green hover:bg-[#fff] hover:text-green rounded px-4 py-2 my-5"
        >
          График работы
        </button>
      </div>
    </section>
  );
}
