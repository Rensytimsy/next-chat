import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div
      className={`${lora.className} bg-contain bg-center w-full min-h-screen flex items-center justify-center overflow-x-hidden`}
      style={{
        backgroundImage: 'url("/backgroundsvg.svg")', // Path to your SVG
        backgroundSize: "cover", // Ensures the SVG covers the entire div
        backgroundPosition: "center", // Centers the SVG
        backgroundRepeat: "no-repeat", // Prevents tiling if the SVG is smaller than the container
      }}
    >
      <h1 className="text-white text-4xl text-center overflow-y-hidden">
       Hello there welcome to chat space
      </h1>
    </div>
  );
}
