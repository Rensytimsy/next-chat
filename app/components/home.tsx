"use client"

import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import { use, useContext } from "react";
import { ThemeContext, setTheme } from "./handletheme";

export default function HomePage() {

  const {theme, toggleTheme} = setTheme();
  console.log(theme)


  return (
    <div
      className={`${lora.className} bg-contain bg-center w-full min-h-screen flex items-center justify-center overflow-x-hidden`}
      style={{
        backgroundImage: `url(${theme === "light" ? "/light-background.svg" :"/backgroundsvg.svg"})`, // Path to your SVG
        backgroundSize: "cover", // Ensures the SVG covers the entire div
        backgroundPosition: "center", // Centers the SVG
        backgroundRepeat: "no-repeat", // Prevents tiling if the SVG is smaller than the container
      }}
    >
      <div className="flex flex-col space-y-6">
        <h1 className={`${theme === "light" ? "text-black text-4xl text-center overflow-y-hidden" : "text-white text-4xl text-center overflow-y-hidden"}`}>
          Hello there welcome to chat space
        </h1>
        <button className={`${theme === "light" ?  "bg-white  p-2 w-1/2 rounded-full" : "bg-gray-700 p-2 w-1/2 rounded-full text-white" }`}
        onClick={toggleTheme}
        >change theme by clicking me</button>
      </div>
    </div>
  );
}
