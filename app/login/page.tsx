"use client";

import { Lora } from "next/font/google";
const lora = Lora({subsets: ["latin"]})

import { usePathname } from "next/navigation";
export default function LoginPage() {
  const router = usePathname();

  console.log(router);
  return (
    <div
      className={`min-h-screen relative top-[65px] text-black h-full w-screen ${lora.className}`}
    >
      <div className="relative top-20 mt-8 flex justify-center items-center">
        <div className="bg-white p-8  w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="w-full p-3 border border-gray-300 rounded-md outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              name="userPassword"
              className="w-full p-3 border border-gray-300 rounded-md outline-none"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-2 bg-greenColor text-white rounded-md hover:bg-accentYellow outline-none"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
