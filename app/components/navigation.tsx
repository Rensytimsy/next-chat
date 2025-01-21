import Link from "next/link";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { setTheme } from "./handletheme";

import { Lora } from 'next/font/google';
const lora = Lora({subsets: ["latin"]})

export default function NavigationBar() {
  const {theme, toggleTheme} = setTheme();

  return (
    <div className={`hidden w-screen lg:flex md:hidden fixed top-0 flex flex-row justify-around ${lora.className} p-4 z-50 ${theme==="light" ? "bg-floraWhite" : "bg-headerBlue"}`}>
      <div className={`text-2xl ${theme === "light" ? "text-black" : "text-white"} font-semibold`}>
        <p>
            <Link href="/">DevSpace</Link>
          </p>
      </div>
      <ul className={`flex flex-row gap-x-6 mt-2 ${theme === "light" ? "text-black" : "text-white"}`}>
      <div>
      <button
      onClick={toggleTheme}
      >
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
      </div>
        <li className="hover:text-accentYellow"><Link href="/">Home</Link></li>
        <li className="hover:text-accentYellow"><Link href="/about">About</Link></li>
        <li className="hover:text-accentYellow"><Link href="/trending">Trendy</Link></li>
        <li className="hover:text-accentYellow"><Link href="/login">Login</Link></li>
        <li className="hover:text-accentYellow"><Link href="/signup">Sign up</Link></li>
      </ul>
      <div>
        <button className={`${theme === "light" ? "bg-headerBlue text-white hover:bg-accentYellow" : "bg-white text-black hover:bg-accentYellow" } hover:text-black p-2 text-sm rounded-sm`}>
            Get Started
        </button>
      </div>
    </div>
  );
}
