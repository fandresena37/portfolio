import { Button } from "../ui/button";
import ProjetItems from "./ProjetItems";

export default function Projet() {
  return (
    <>
      <section
        className="w-screen h-auto  relative flex justify-center"
        id="Projet"
      >
        <div className="w-[1100px] pt-20 relative z-40 flex items-center flex-col gap-20">
          <div className="flex flex-col gap-4 max-sm:items-center">
            <p className="text-center text-muted-foreground/30 font-semibold text-sm ">
              PROJETS
            </p>
            <h1 className="text-white text-3xl font-bold text-center">
              Mes <span className="text-[rgb(0,60,255)]">Projets</span>
            </h1>
            <p className="text-center text-muted-foreground/30 text-[13px] w-[500px] max-sm:w-screen max-sm:mx-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              recusandae ab ad officia cumque assumenda perspiciatis maxime
              dolor commodi nulla!
            </p>
          </div>
          <div className="w-auto flex items-center flex-col gap-3 relative h-auto">
            <div className="w-screen h-full backdrop-blur-[3px] absolute z-30"></div>
            <div className="w-screen h-full absolute z-40 bg-[rgba(0,0,0,0.6)] flex items-center justify-center">
              <Button className="w-40 h-10 bg-[linear-gradient(90deg,rgb(0,0,255),rgba(85,12,255,0.76))] hover:bg-[rgba(85,12,255,0.76)] rounded-full font-extrabold text-[13px] text-white duration-500">
                Voir tous les projets
              </Button>
            </div>
            <div className="flex gap-3 overflow-hidden w-auto h-auto">
              <ProjetItems image="/public/faxmusic/1.png" />
              <ProjetItems image="/public/faxmusic/2.png" />
              <ProjetItems image="/public/faxmusic/3.png" />
              <ProjetItems image="/public/faxmusic/4.png" />
              <ProjetItems image="/public/faxmusic/5.png" />
            </div>
            <div className="flex gap-3 overflow-hidden w-auto">
              <ProjetItems image="/public/fiangonana/1.png" />
              <ProjetItems image="/public/fiangonana/2.png" />
              <ProjetItems image="/public/fiangonana/3.png" />
              <ProjetItems image="/public/fiangonana/4.png" />
              <ProjetItems image="/public/fiangonana/5.png" />
              <ProjetItems image="/public/fiangonana/1.png" />
            </div>
            <div className="flex gap-3 overflow-hidden w-auto">
              <ProjetItems image="/public/faxStore/1.png" />
              <ProjetItems image="/public/faxStore/2.png" />
              <ProjetItems image="/public/faxStore/3.png" />
              <ProjetItems image="/public/faxStore/4.png" />
              <ProjetItems image="/public/faxStore/1.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
