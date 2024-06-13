import React from "react";
import Button from "../buttons/ButtonCustom";

export default function Contacts() {
  return (
    <section className="">
      <div className="flex flex-col mx-5 text-start text-sm gap-5">
        <div className="flex  gap-[150px] ">
          <span className="w-1/6">Название:</span>
          <span className="w-4/5">
            ТОО DMR Company - С НАМИ НАДЕЖНО город Алматы{" "}
          </span>
        </div>
        <div className="flex gap-[150px] ">
          <span className="w-1/6">Контактное лицо:</span>
          <span className="w-4/5">Алимбетова Гульсайран</span>
        </div>
        <div className="flex gap-[150px] ">
          <span className="w-1/6">Сайт компании:</span>
          <span className="text-salesgreen cursor-pointer w-3/5">
            ordinarynextkg.vercel.app
          </span>
        </div>
        <div className="flex gap-[150px] ">
          <span className="w-1/6">Адрес:</span>
          <span className="w-4/5">
            ул Гоголя 86 офис 218 уг. Наурызбай Батыра, бизнес центр Казжол
            (высотное здание), главный вход со стороны Гоголя и дополнительный
            вход со стороны Наурызбай Батыра (первый поворот налево - шлагбаум),
            Алматы, Казахстан{" "}
          </span>
        </div>
        <div className="flex gap-[150px] ">
          <span className="w-1/6">Телефон:</span>
          <div className="w-4/5">
            <span>+7 (707) 777-41-97Для заказа </span>
            <span>+7 (701) 777-41-97Для заказа, WhatsApp</span>
            <span>+7 (747) 565-49-93Для заказа, WhatsApp</span>
          </div>
        </div>
        <div className="flex gap-[150px]">
          <span className="w-1/6">Email:</span>
          <span className=" text-salesgreen cursor-pointer w-4/5">
            ordinarynextkg.vercel.app
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
