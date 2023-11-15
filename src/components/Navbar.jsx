import React, { useState } from "react";
import { logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="h-[80px] w-full border-b bg-white">
      <div className="container m-auto flex h-full w-full items-center justify-between px-4 md:px-0">
        <div className="flex items-center gap-x-2">
          <img src={logo} className="h-10" />
          <span className="text-2xl  font-semibold">Ganatech</span>
        </div>
        <div className="hidden md:flex">
          <button className="flex items-center gap-x-1.5 rounded-md bg-primary px-6 py-2.5 font-bold text-white">
            Ir a la aplicación{" "}
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
        <button className="rounded-md bg-primary px-5 py-2 font-semibold text-white md:hidden">
          Ve a la aplicación
        </button>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 w-full  border-b bg-white p-4 px-8 md:hidden"
            : "hidden"
        }
      ></div>
    </div>
  );
};

export default Navbar;
