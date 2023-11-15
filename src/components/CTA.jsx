import React from "react";
import { useState } from "react";

const CTA = () => {
  const [selected, setSelected] = useState("yearly");

  return (
    <div className="bg-[#E9F8F3] py-24">
      <div class="mb-14 flex w-full flex-col text-center">
        <h1 class="title-font mb-2 text-3xl font-semibold text-emerald-950 sm:text-5xl">
          Planes
        </h1>
        <p class="mx-auto px-4 text-lg leading-relaxed text-emerald-700 lg:w-2/3">
          Elige entre nuestros planes o escríbenos para un plan personalizado
        </p>
        <div class="mx-auto mt-6 flex overflow-hidden rounded border-2 border-primary text-lg font-semibold">
          <button
            onClick={() => setSelected("monthly")}
            class={`w-[110px]  px-4 py-1 focus:outline-none ${
              selected == "monthly" ? "bg-primary text-white" : ""
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setSelected("yearly")}
            class={`w-[110px] px-4 py-2 focus:outline-none ${
              selected == "yearly" ? "bg-primary text-white" : ""
            }`}
          >
            Anual
          </button>
        </div>
      </div>
      <div class="container mx-auto flex flex-col items-center justify-between lg:flex-row lg:items-start">
        <div class="order-2 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-1 lg:w-full lg:rounded-r-none">
          <div class="mb-7 flex  items-center border-b border-gray-300 pb-7">
            <div class="ml-5">
              <span class="block text-2xl font-semibold">Plan Inicial</span>
              <span>
                <span class="align-top text-xl font-medium text-gray-500">
                  $&thinsp;
                </span>
                <span class="text-3xl font-bold">
                  {selected === "yearly" ? "300" : "35"}
                </span>
              </span>
              <span class="font-medium text-gray-500">
                / {selected === "yearly" ? "año" : "mes"}
              </span>
            </div>
          </div>
          <ul class="mb-7 font-medium text-gray-500">
            <li class="mb-2 flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span class="ml-3">
                <span class="text-black">75</span> animales
              </span>
            </li>
            <li class="mb-2 flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span class="ml-3">
                Soporte Técnico <span class="text-black">Fundamental</span>
              </span>
            </li>
            <li class="flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span class="ml-3">
                Un perfil <span class="text-black">administrador</span> y un
                perfil <span class="text-black">trabajador</span>
              </span>
            </li>
          </ul>
          <a
            href="#/"
            class="flex items-center justify-center rounded-xl bg-primary px-4 py-5 text-center text-xl font-medium text-white"
          >
            Elegir Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              class="ml-2"
            />
          </a>
        </div>

        <div class="order-1 w-full flex-1 rounded-3xl bg-emerald-900 p-8 text-emerald-200 shadow-xl sm:w-96 lg:order-2 lg:mt-0 lg:w-full">
          <div class="mb-8 flex items-center border-b border-emerald-100 pb-8">
            <div class="ml-5">
              <span class="block text-3xl font-semibold text-white">
                Plan Estándar
              </span>
              <span>
                <span class="align-top text-xl font-medium">$&thinsp;</span>
                <span class="text-3xl font-bold text-white">
                  {selected === "yearly" ? "500" : "50"}
                </span>
              </span>
              <span class="font-medium">
                / {selected === "yearly" ? "año" : "mes"}
              </span>
            </div>
          </div>
          <ul class="mb-10 text-xl font-medium">
            <li class="mb-6 flex">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span class="ml-3">
                150 <span class="text-white">animales</span>
              </span>
            </li>
            <li class="mb-6 flex">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span class="ml-3">
                <span class="text-white">Soporte Técnico </span>Personalizado
              </span>
            </li>
            <li class="flex">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span class="ml-3">
                <span class="text-white">Un perfil</span> administrador y cinco
                perfiles trabajador
              </span>
            </li>
          </ul>
          <a
            href="#/"
            class="flex items-center justify-center rounded-xl bg-primary px-4 py-6 text-center text-2xl font-medium text-white"
          >
            Elegir Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              class="ml-2"
            />
          </a>
        </div>

        <div class="order-3 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-3 lg:w-full lg:rounded-l-none">
          <div class="mb-7 flex items-center border-b border-gray-300 pb-7">
            <div class="ml-5">
              <span class="block text-2xl font-semibold">
                Plan Personalizado
              </span>
              <span class="py-1 align-top text-xl font-medium text-gray-500">
                $ Según necesidades
              </span>
            </div>
          </div>
          <ul class="mb-7 font-medium text-gray-500">
            <li class="mb-2 flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span class="ml-3">
                Animales <span class="text-black">variables</span>
              </span>
            </li>
            <li class="mb-2 flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span class="ml-3">
                Soporte Técnico <span class="text-black">Personalizado</span>
              </span>
            </li>
            <li class="flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span class="ml-3">
                <span class="text-black">Flexibilidad total</span> a clientes
              </span>
            </li>
          </ul>
          <a
            href="#/"
            class="flex items-center justify-center rounded-xl bg-primary px-4 py-5 text-center text-xl font-medium text-white"
          >
            Contáctenos
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              class="ml-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
