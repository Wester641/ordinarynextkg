"use client";

import {
  country,
  curyerDelivery,
  deliveryMethods,
  kazahstan,
  kyrgyz,
  myContacts,
  paymentMethods,
  regions,
  samoDelivery,
  transDelivery,
} from "@/lib/constans/deliveryData";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Delivery() {
  // const [users, setUsers] = useState([]);
  // const [error, setError] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com//posts")
  //     .then((res) => {
  //       setUsers(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setError(error.message);
  //     });
  // }, []);

  return (
    <>
      <h2 className="text-center my-5 sm:text-2xl sm:font-semibold">
        Условия доставки и оплаты{" "}
      </h2>
      <div className="mx-10 flex flex-col gap-5 text-[#333333] flex-wrap mb-10">
        {myContacts.map((item) => (
          <ul key={item.id}>
            <li className="sm:font-semibold ">{item.title}</li>
            <ul>
              {item.contact.map((descItem, index) => (
                <li className="sm:mx-10 my-2 text-sm" key={index}>
                  {descItem}
                </li>
              ))}
            </ul>
          </ul>
        ))}
        <h2 className="sm:font-bold">Cпособы доставки</h2>
        <div className="sm:text-sm ">
          {transDelivery.map((item) => (
            <ul key={item.id}>
              <li className="sm:font-semibold  sm:mx-5">{item.title}</li>
              <ul>
                {item.desc.map((descItem, index) => (
                  <li className="sm:mx-10 my-2" key={index}>
                    {descItem}
                  </li>
                ))}
              </ul>
            </ul>
          ))}

          {curyerDelivery.map((item) => (
            <ul key={item.id}>
              <li className="sm:font-semibold sm:mx-5 my-4">{item.title}</li>
              <li className="mx-10 my-4">
                <ul>
                  {item.desc.map((descItem, index) => (
                    <li className="my-2" key={index}>
                      {descItem}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
          {paymentMethods.map((item) => (
            <ul key={item.id}>
              <li className="sm:mx-5  font-semibold my-2">{item.title}</li>
              <li className="sm:mx-10 text-sm my-2">{item.name}</li>
              <li className="sm:mx-10 text-sm my-2">{item.desc}</li>
            </ul>
          ))}
        </div>

        <div className="text-[#333333]">
          <h2 className="sm:font-semibold mt-5">Регионы доставки:</h2>
          {country.map((count) => (
            <ul
              className="sm:text-sm sm:mx-10 text-[#333333]"
              style={{ "list-style-type": "disc" }}
              key={count.id}
            >
              <li className="my-2">{count}: все регионы</li>
            </ul>
          ))}
          {kazahstan.map((reg) => (
            <ul className="sm:mx-10 sm:text-sm text-[#333333] " key={""}>
              <li className="my-1">- {reg}</li>
            </ul>
          ))}

          {kyrgyz.map((kg, index) => (
            <ul
              style={{ listStyleType: "disc" }}
              className="sm:mx-5 sm:text-sm text-[#333333]"
              key={index}
            >
              <li className="mx-5 ">{kg.title}</li>
              {kg.reg.map((item) => (
                <ul className="mx-5 my-1" key={item.id}>
                  <li className="my-2">{item} область</li>
                </ul>
              ))}
            </ul>
          ))}
        </div>
        <h2 className="">Допольнительная информация о доставке и оплате:</h2>
        {curyerDelivery.map((item) => (
          <dl className="text-sm" key={item.id}>
            <dt className="sm:mx-5 ">{item.title}</dt>
            <dd className="mx-10">
              <ul>
                {item.desc.map((descItem, index) => (
                  <li className="my-2" key={index}>
                    {descItem}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        ))}
      </div>
    </>
  );
}
