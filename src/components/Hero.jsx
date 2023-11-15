import React from "react";
import { dashboardImg, animalsImg } from "../assets";

const Hero = () => {
  return (
    <div className="w-full bg-white py-12 md:py-24 ">
      <div className="relative m-auto grid max-w-[600px] px-4 md:max-w-[1480px]  md:grid-cols-2 md:px-0">
        <div className="isolate z-10 flex flex-col justify-start gap-4">
          <p className="pt-6 text-2xl font-medium text-primary md:py-2">
            INTELIGENCIA TECNOLÓGICA
          </p>
          <h1 className="text-4xl font-semibold md:text-[52px] md:leading-[72px]">
            Comience a criar a su ganado con{" "}
            <span className="text-primary"> tecnología </span>y la{" "}
            <span className="text-primary"> innovación </span>
            del futuro <span className="text-primary underline">hoy mismo</span>
          </h1>
          <p className="pb-2 text-lg text-gray-600">
            Maximiza Productividad y Salud del Ganado con GanaTech.
          </p>
          <button className="flex items-center gap-x-2 self-start rounded-lg bg-primary px-5 py-3 text-lg font-bold text-white">
            Ir a la aplicación
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
        <div className="isolate order-first  flex max-w-[600px]  justify-center justify-self-center pb-8 md:order-last">
          <div className="animate-wiggle animate-infinite animate-duration-[10000ms]  animate-reverse overflow-hidden rounded-2xl shadow-lg ">
            <img className="" src={dashboardImg} />
          </div>
          <div className="animate-wiggle animate-infinite animate-duration-[10000ms]  -translate-x-3 overflow-hidden rounded-2xl shadow-lg ">
            <img className="" src={animalsImg} />
          </div>
          <svg
            className="absolute -z-10 -translate-y-[8%] translate-x-[9%] scale-125 md:scale-[145%]"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="a">
                <path
                  fill="currentColor"
                  d="M833.5 653.5q-26.5 153.5-180 214T354 860q-146-68-248.5-214t12-280Q232 232 366 161.5T651.5 144q151.5 53 180 204.5t2 305Z"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#a)">
              <path
                fill="#16a34a"
                d="M833.5 653.5q-26.5 153.5-180 214T354 860q-146-68-248.5-214t12-280Q232 232 366 161.5T651.5 144q151.5 53 180 204.5t2 305Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
