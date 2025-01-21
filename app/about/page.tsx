
"use client"
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import { usePathname } from "next/navigation";
import { setTheme } from "../components/handletheme";
import {use, useEffect, useState} from "react"
import axios from 'axios';

export default function AboutPage() {

  const path = usePathname();
  const {theme, toggleTheme} = setTheme();

  return (
    <div
      className={`h-screen ${path === "/" ? "" : "mt-14"} w-screen bg-contain bg-center min-h-screen ${lora.className}`}
      style={{
        backgroundImage: `url(${theme === "light" ? "/lightThemeBackground.svg" : "/background1.svg"})`, // Path to your SVG
        backgroundSize: "cover", // Ensures the SVG covers the entire div
        backgroundPosition: "center", // Centers the SVG
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-8 bg-lightgray lg:w-1/3 w-3/4 ml-4 p-4 justify-center align-center rounded-md">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">
            What is chatspace ?
          </p>
          <div>
            Chat space is an online platform where one can have a chat with
            worldwide users or friends. Just like any other social media
            platform you get to add friends like their posts and many other
            functionlity.
            <br />
            <br />
            Decided to develop this platform as i get to learn more about
            websockets and understand how they work. There it goes without
            saying that the platform your are interacting with was make using
            socket.io
          </div>
        </div>
      </div>

      <div className="mt-8 bg-lightgray lg:w-1/3 w-3/4 ml-[100px] lg:ml-[600px] p-4 justify-center align-center rounded-md">
        <p className="text-2xl font-semibold mt-2 mb-2">How it works? </p>
        <div>
          Easy you start by creating your account, huummm?? why create an
          account? just like any other social media platform you need to create
          a account inorder to chat.
          <br />
          <p className="text-2xl font-semibold mt-2 mb-2">
            How does that help?{" "}
          </p>
          <p>
            Makes it easy to get messages between users that one has interacted
            with, also to avoid anonymus messaging which is not safe. we are
            trying to make chat space as safe as possible
          </p>
        </div>
      </div>
    </div>
  );
}
