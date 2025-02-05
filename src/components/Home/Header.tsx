// import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Facebook,
  Linkedin,
  Youtube,
  PhoneCall,
  Mail,
  AlignJustify,
  ArrowDownToLine,
  X,
} from "lucide-react";
export default function Header() {
  const listHead = ["Accueil", "Competences", "Projet", "Contact"];
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <section
        className="w-[300px] h-screen fixed top-0 bg-black z-50 hidden max-md:flex flex-col duration-1000"
        style={{ left: showMenu ? 0 : -300, transition: "all 0.5s ease" }}
      >
        <div className="p-6 flex  justify-between">
          <h1 className="text-2xl font-bold text-[rgb(0,60,255)]">Portfolio</h1>
          <X onClick={() => setShowMenu(false)} />
        </div>
        <nav>
          <ul className="pl-6 flex flex-col gap-2">
            {listHead.map((items, index) => (
              <a
                href={`#${items}`}
                key={index}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <li key={index} className="font-bold cursor-pointer">
                  {items}
                </li>
              </a>
            ))}
          </ul>
        </nav>
        <div className="flex gap-8 text-[rgba(255,255,255,0.87)] items-center p-6 pt-9">
          <Facebook className="text-[rgba(119,119,119,0.75)] w-4 h-4  cursor-pointer" />
          <Linkedin className="text-[rgba(119,119,119,0.75)] w-4 h-4  cursor-pointer" />
          <Youtube className="text-[rgba(119,119,119,0.75)] w-4 h-4  cursor-pointer" />
        </div>
        <div className="flex flex-col px-6 pt-3 font-bold text-[13px] text-[rgba(119,119,119,0.75)]">
          <span className="flex gap-2 items-center">
            <PhoneCall className="text-[rgba(119,119,119,0.75)] w-4 h-4" />
            <label>034 16 744 62</label>
          </span>
          <span className="flex gap-2 items-center">
            <Mail className="text-[rgba(119,119,119,0.75)] w-4 h-4" />
            <label>fandresenarazafindratina@gmail.com</label>
          </span>
          <span className="flex gap-2 items-center">
            <Mail className="text-[rgba(119,119,119,0.75)] w-4 h-4" />
            <label>fandresenarazafy37@gmail.com</label>
          </span>
        </div>
      </section>
      <section className="w-full flex flex-col items-center h-auto absolute z-40 bg-muted/40 ">
        <section className="h-8 w-[1100px] flex justify-between  2xl:w-[1400px] max-xl:w-[1000px] max-lg:w-screen max-lg:px-10 max-md:hidden">
          <div className="flex gap-8 text-[rgba(255,255,255,0.87)] items-center">
            <Facebook className="text-[rgba(119,119,119,0.75)] w-4 h-4  cursor-pointer" />
            <Linkedin className="text-[rgba(119,119,119,0.75)] w-4 h-4  cursor-pointer" />
            <Youtube className="text-[rgba(119,119,119,0.75)] w-4 h-4  cursor-pointer" />
          </div>
          <div className="flex gap-10 items-center font-bold text-[13px] text-[rgba(119,119,119,0.75)]">
            <span className="flex gap-2 items-center">
              <PhoneCall className="text-[rgba(119,119,119,0.75)] w-4 h-4" />
              <label>034 16 744 62</label>
            </span>
            <span className="flex gap-2 items-center">
              <Mail className="text-[rgba(119,119,119,0.75)] w-4 h-4" />
              <label>fandresenarazafindratina@gmail.com</label>
            </span>
          </div>
        </section>
        <header className="w-[1100px] h-16 bg-transparent flex justify-between items-center 2xl:w-[1400px] max-xl:w-[1000px] max-lg:w-screen max-lg:px-10 max-md:h-20">
          <div className="hidden max-md:flex">
            <Button className="bg-transparent hover:bg-transparent">
              <AlignJustify
                className="text-white"
                onClick={() => setShowMenu(true)}
              />
            </Button>
          </div>
          <div className="h-full text-[rgba(255,255,255,0.87)] flex items-center">
            <h1 className="text-xl font-bold">Portfolio</h1>
          </div>
          <nav className="text-[rgba(255,255,255,0.87)] h-full text-sm max-md:hidden">
            <ul className=" h-full flex gap-10 items-center">
              {listHead.map((items, index) => (
                <a href={`#${items}`} key={index}>
                  <li key={index} className="font-bold cursor-pointer">
                    {items}
                  </li>
                </a>
              ))}
            </ul>
          </nav>
          <Button className="w-40 h-10 bg-[linear-gradient(90deg,rgb(0,0,255),rgba(85,12,255,0.76))] hover:bg-[rgba(85,12,255,0.76)] duration-500 rounded-full font-extrabold text-[13px] text-white max-sm:w-16">
            <span className="max-sm:hidden">Telecharger mon CV</span>
            <span className="hidden max-sm:flex">
              <ArrowDownToLine className="stroke-[2px] text-white w-10" />
            </span>
          </Button>
        </header>
      </section>
    </>
  );
}
