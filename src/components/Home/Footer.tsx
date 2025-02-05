import FooterItems from "./FooterItems";

import { PhoneCall, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer
        className="w-screen mt-40 h-[400px] bg-black flex flex-col items-center max-[1140px]:h-[500px] max-sm:h-auto"
        id="Contact"
      >
        <section className="flex h-[85%] w-[1100px] 2xl:w-[1400px] max-xl:w-[1000px] max-[1140px]:flex-col max-[1140px]:pl-20 max-lg:w-screen max-lg:px-20 max-sm:h-auto max-sm:gap-20 max-sm:my-20">
          <div className="w-2/4 h-full flex gap-20 max-[1140px]:w-full max-[1140px]:gap-20 max-[1140px]:h-1/2 max-sm:flex-col">
            <div className="w-1/2 flex flex-col justify-center gap-5 max-sm:items-center  max-sm:w-full">
              <h1 className="text-3xl font-bold text-[rgb(0,60,255)]">
                Portfolio
              </h1>
              <p className="text-[rgba(119,119,119,0.71)] text-sm font-medium max-sm:text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores corrupti nisi explicabo vero labore ducimus qui rem,
              </p>
              <div className="flex gap-8 text-[rgba(255,255,255,0.87)] items-center">
                <Facebook className="text-[rgba(119,119,119,0.75)] w-4 h-4 cursor-pointer" />
                <Linkedin className="text-[rgba(119,119,119,0.75)] w-4 h-4 cursor-pointer" />
                <Youtube className="text-[rgba(119,119,119,0.75)] w-4 h-4 cursor-pointer" />
              </div>
            </div>
            <FooterItems
              title="Quink Link"
              list={["Accueil", "Competences", "Projet", "Contact"]}
            />
          </div>
          <div className="w-2/4 flex justify-center max-[1140px]:w-full max-[1140px]:gap-20 max-sm:flex-col">
            <FooterItems
              title="Important"
              list={[
                "Career",
                "Terms & Conditions",
                "Privacy policy",
                "Cookies Policy",
                "Social Work",
              ]}
            />
            <div className="w-1/2 h-full flex flex-col gap-4 justify-center items-center max-[1140px]:items-start  max-sm:w-full">
              <div className="flex flex-col gap-4 justify-center  max-sm:items-center  max-sm:w-full">
                <h1 className="text-xl font-semibold text-white">Contact</h1>
                <ul className="text-[rgba(119,119,119,0.71)] text-sm font-semibold flex flex-col gap-2">
                  <li className="flex gap-2 items-center">
                    <PhoneCall className="w-5 h-5" /> 034 16 744 62
                  </li>
                  <li className="flex gap-2 items-center">
                    <Mail className="w-5 h-5" />{" "}
                    <span>fandresenarazafindratina@gmail</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Mail className="w-5 h-5" /> fandresenarazafy37@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[15%] px-10 w-full max-sm:h-[60px]">
          <div className="w-full h-[2px] bg-muted/40"></div>
        </section>
      </footer>
    </>
  );
}
