"use client";

import Link from "next/link";
import { useState } from "react";
import { Lora } from "next/font/google";

const lora = Lora({subsets: ["latin"]});

export default function SideNavigation() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="bg-headerBlue w-screen">
      <div className="p-4 lg:hidden md:block fixed top-0 flex flex-row justify-between w-screen bg-headerBlue">
        <div className={`${lora.className}`}>
            <p className="text-2xl font-semibold text-white">Chat space</p>
        </div>
        <div
          className="flex  flex-col space-y-1 cursor-pointer absolute top-8 right-4 transform -translate-y-1/2"
          onClick={() => setOpenNav(!openNav)}
        >
          <div
            className={`w-7 h-1 bg-white rounded transition-transform duration-300 ${
              openNav ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-1 bg-white rounded transition-opacity duration-300 ${
              openNav ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-1 bg-white rounded transition-transform duration-300 ${
              openNav ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {openNav && (
        <div
          className={`lg:hidden md:block fixed w-screen top-20 right-0 bg-black/70 h-screen transition-all duration-300 transform ${
            openNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <div className="mt-4 flex justify-center">
              <ul className="text-white text-center space-y-8">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
