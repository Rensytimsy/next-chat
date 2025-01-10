import Image from "next/image";
import { Lora } from "next/font/google";
const lora = Lora({subsets: ["latin"]});
import HomePage from "./components/home";
import AboutPage from "./about/page"

export default function Home() {

  return (
    <div>
      <HomePage />
      <AboutPage />
    </div>
  );
}
