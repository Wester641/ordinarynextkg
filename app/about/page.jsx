"use client";
import React from "react";
import AboutComponent from "@/components/about/AboutComponent";
import BreadCrumbs from "@/components/featers/breadCrumbs/BreadCrumbs";
import aboutBanner from "../../public/Img/ForCarousel/ForCarouse3.png";
import bluePlombs from "../../public/Img/blueplombs.jpeg";
import AboutComponentDesc from "@/components/about/AboutComponentDesc";
import moneyPocket from "../../public/1123123.png";
import AboutComponentDesc1 from "@/components/about/AboutComponentDesc1";
import AboutComponentDesc2 from "@/components/about/AboutComponentDesc2";
import ButtonCustom from "@/components/buttons/ButtonCustom";

const About = () => {
  return (
    <div className=" bg-zinc-100">
      <BreadCrumbs />
      <h1 className="px-3 pt-5 pb-3 text-lg sm:text-2xl text-center font-semibold">
        О нас
      </h1>
      <AboutComponent
        description="Пломбировочная и упаковочная продукции от компании DMR Company"
        descriptionsm="Ежедневно многими финансовыми, банковскими, государственными и охранными организациями используются упаковочная и пломбировочная продукция, которая необходима для проведения кассовых операций и защиты помещений, грузов, пакетов от несанкционированного проникновения. Именно поэтому товары для банков и инкассации пользуются немалым спросом на рынке Казахстана."
        image={bluePlombs}
        className={"flex bg-green mx-3 h-[400px] "}
        style={{ flexShrink: 0.4, paddingTop: "15px" }}
      />
      <div className="flex justify-center my-10">
        <p className="text-start w-11/12 text-sm">
          Компания “DMR Company” является одним из крупнейших поставщиков
          пломбировочной и упаковочной продукции для банков и инкассации на
          территории города Алматы и Республики Казахстан. Мы ежегодно
          поставляем и продаем продукцию сотням частных и юридических лиц,
          предлагая своим клиентам лучшие условия среди всех компаний данной
          сферы. У нас Вы можете купить оптом и в розницу:
        </p>
      </div>
      <AboutComponentDesc image={moneyPocket} />
      <AboutComponentDesc
        className="flex sm:flex-row-reverse flex-col text-end justify-stretch sm:text-end  text-white gap-10 items-center sm:h-[200px]  mx-3 p-3 bg-green"
        image={moneyPocket}
        description="Пластиковые и свинцовые пломбы, тубусы для хранения ключей."
        title="Пломбировочные материалы"
      />
      <AboutComponentDesc
        title="Расходные материалы для инкассации. "
        image={moneyPocket}
      />
      <AboutComponentDesc
        className="flex sm:flex-row-reverse flex-col text-end justify-between items-center sm:h-[200px]  mx-3 p-3 text-white bg-green "
        image={moneyPocket}
      />
      <ButtonCustom
        className={
          "text-base rounded py-2 px-10 text-green font-bold border border-green hover:bg-green hover:text-[#fff] my-3"
        }
        name={"Изучить весь каталог"}
      />
      <div className="w-full text-start flex items-center flex-col">
        <p className="text-sm w-10/12">
          Вся продукция представленная в каталоге интернет-магазина “DMR
          Company” поставляется от ведущих заводов изготовителей, поэтому мы
          гарантируем высокое качество пломбировочной и упаковочной продукции.
        </p>
      </div>

      <div className="w-full text-start flex items-center flex-col my-10">
        <h1 className="text-2xl w-10/12 ">
          Лучший ассортимент пломбировочной и упаковочной продукции
        </h1>
        <p className="text-sm mt-10 w-10/12">
          Интернет-магазин “DMR Company” всегда стремится полностью
          соответствовать потребностям своих клиентов, предлагая им самый
          большой ассортимент качественной пломбировочной и упаковочной
          продукции. Мы ежегодно расширяем свой ассортимент, находя новых
          поставщиков товаров, которые будут доступны по цене и соответствовать
          высоким требованиям качества. Поэтому каждый посетитель сайта может
          без особого труда найти и купить нужную ему пломбировочную и
          упаковочную продукцию для инкассации и проведения кассовых операций.
          “DMR Company” – это эталон качества и высокого уровня сервиса, где
          каждый сотрудник компании является частью сплоченной команды, которая
          работает на благо наших клиентов. Где, как не у нас Вы можете найти
          такие отличительные преимущества: Широкий ассортимент Более 100
          наименований различной пломбировочной, упаковочной продукции.
        </p>
      </div>
      <div className="flex flex-col gap-5 md:grid grid-cols-2">
        <AboutComponentDesc1
          title={"Интернет-магазин"}
          desc="
        Широкий ассортимент Более 100
        наименований различной пломбировочной, упаковочной продукции.
      "
        />
        <AboutComponentDesc1
          title={"Лучший ассортимент"}
          desc="
        Широкий ассортимент Более 100
        наименований различной пломбировочной, упаковочной продукции.
      "
          className={
            "flex border-8 border-lime-600 shadow-xl bg-dark-green items-center text-white mx-3 text-center min-h-[200px]"
          }
        />
        <AboutComponentDesc1
          title={"Требованиям качества"}
          desc="
        Широкий ассортимент Более 100
        наименований различной пломбировочной, упаковочной продукции.
      "
          className={
            "flex border-8 border-lime-600 shadow-xl bg-dark-green items-center text-white mx-3 text-center min-h-[200px]"
          }
        />
        <AboutComponentDesc1
          title={"Благо наших клиентов"}
          desc="
        Широкий ассортимент Более 100
        наименований различной пломбировочной, упаковочной продукции.
      "
        />
      </div>
      <div className="mx-3 my-10  flex flex-col items-center">
        <p className="w-10/12 my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quo
          minus quos rem omnis blanditiis nesciunt mollitia, numquam itaque
          voluptatibus id et a atque sapiente sint! Officiis molestiae nulla,
          hic ut ea laborum voluptas eius? Explicabo tempora veniam architecto
          qui.
        </p>
        <ButtonCustom
          name={"Наши контакты"}
          className={
            "text-base rounded py-2 px-10 text-green font-bold border border-green hover:bg-green hover:text-[#fff] my-3"
          }
        />
      </div>
      <div className="text-center text-xl border-t-2 border-zinc-300 md:flex justify-center mx-3 md:py-10">
        <p>Как заказать?</p>
      </div>
      <div className="md:grid grid-cols-4">
        <AboutComponentDesc2 number={"01"} />
        <AboutComponentDesc2
          desc="Поэтому каждый посетитель сайта может
          без особого труда найти и купить нужную ему пломбировочную и"
          number={"02"}
        />
        <AboutComponentDesc2
          desc="Поставляется от ведущих заводов изготовителей, поэтому мы
          гарантируем высокое качество пломбировочной"
          number={"03"}
        />
        <AboutComponentDesc2
          desc="Поэтому каждый посетитель сайта может
          без особого труда найти и купить нужную ему пломбировочную и"
          number={"04"}
        />
      </div>
      <ButtonCustom
        name={"Доставка и оплата"}
        className={
          "text-base rounded py-2 px-10 text-green font-bold border border-green hover:bg-green hover:text-[#fff] my-3"
        }
      />
    </div>
  );
};

export default About;
