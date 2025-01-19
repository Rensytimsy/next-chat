"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { Lora } from "next/font/google";
import { usePathname } from "next/navigation";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { setTheme, ThemeContext } from "./handletheme";

const lora = Lora({subsets: ["latin"]});

export default function SideNavigation() {
  const [openNav, setOpenNav] = useState(false);
  const path = usePathname();

  const {theme, toggleTheme} = setTheme();


  console.log(theme);

  return (
    <div className={`${theme === "light" ? "bg-gray-30 w-screen z-50" : "bg-headerBlue w-screen z-50"}`}>
      <div className={`${theme === "light" ? "p-4 lg:hidden md:block fixed top-0 flex flex-row justify-between w-screen bg-white z-50" : "p-4 lg:hidden md:block fixed top-0 flex flex-row justify-between w-screen bg-headerBlue z-50"}`}>
        <div className={`${lora.className}`}>
            <p className={`${theme === "light" ? "text-2xl font-semibold text-black" : "text-2xl font-semibold text-white" }`}>DevSpace</p>
        </div>
        <div>
          {theme === "light" ? <DarkModeIcon  
          onClick={toggleTheme}
          className={`text-black absolute top-5  right-20 text-[25px]`}
          /> : <LightModeIcon  
          onClick={toggleTheme}
          className={`text-white absolute top-5  right-20 text-[25px]`}
          />}
        </div>
        <div
          className="flex  flex-col space-y-1 cursor-pointer absolute top-8 right-4 transform -translate-y-1/2 overflow-hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <div
            className={`${theme === "light" ? "w-7 h-1 bg-black rounded transition-transform duration-300 " : "w-7 h-1 bg-white rounded transition-transform duration-300"} ${
              openNav ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`${theme === "light" ? "w-7 h-1 bg-black rounded transition-transform duration-300 " : "w-7 h-1 bg-white rounded transition-transform duration-300"}  ${
              openNav ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`${theme === "light" ? "w-7 h-1 bg-black rounded transition-transform duration-300 " : "w-7 h-1 bg-white rounded transition-transform duration-300"} ${
              openNav ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {openNav && (
        <div
          className={`${theme === "light" ? "lg:hidden md:block fixed w-screen top-[64px] right-0 bg-white  h-screen transition-all duration-300 transform z-50" : "lg:hidden md:block fixed w-screen top-[64px] right-0 bg-black/70 h-screen transition-all duration-300 transform z-50"} ${
            openNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <div className="mt-[180px] flex justify-center">
              <ul className={`${theme === "light" ? "text-black text-center space-y-8" : "text-white text-center space-y-8" }`}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/trending">Trendy</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup">Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
