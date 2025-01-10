import Link from "next/link";

import { Lora } from 'next/font/google';

const lora = Lora({subsets: ["latin"]})

export default function NavigationBar() {
  return (
    <div className={`hidden w-screen lg:flex md:hidden fixed top-0 flex flex-row justify-around ${lora.className} bg-headerBlue p-4`}>
      <div className="text-2xl text-white font-semibold">
        <p>
            <Link href="/">ChatSpace</Link></p>
      </div>
      <ul className="flex flex-row gap-x-6 mt-2 text-white">
        <li className="hover:text-accentYellow"><Link href="/">Home</Link></li>
        <li className="hover:text-accentYellow"><Link href="/about">About</Link></li>
        <li className="hover:text-accentYellow"><Link href="/about">Services</Link></li>
        <li className="hover:text-accentYellow"><Link href="/about">Services</Link></li>
        <li className="hover:text-accentYellow"><Link href="/about">Services</Link></li>
        <li className="hover:text-accentYellow"><Link href="/about">Services</Link></li>
      </ul>
      <div>
        <button className="bg-blueColor hover:bg-accentYellow hover:text-black p-2 text-white rounded-full">
            Get Started
        </button>
      </div>
    </div>
  );
}
