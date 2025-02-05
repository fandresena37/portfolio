import CompetenceItems from "./CompetenceItems";
// import  from "lucide-react"
export default function Competences() {
  return (
    <>
      <section
        className="w-screen h-auto relative flex justify-center mb-10"
        id="Competences"
      >
        <div className="w-[1100px] pt-20 relative z-40 flex items-center flex-col gap-20 h-full  2xl:w-[1400px]">
          <div className="flex flex-col gap-4 max-sm:items-center">
            <p className="text-center text-muted-foreground/30 font-semibold text-sm ">
              COMPETENCES
            </p>
            <h1 className="text-white text-3xl font-bold text-center">
              Mes <span className="text-[rgb(0,60,255)]">Competences</span>
            </h1>
            <p className="text-center text-muted-foreground/30 text-[13px] w-[500px] max-sm:w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              recusandae ab ad officia cumque assumenda perspiciatis maxime
              dolor commodi nulla!
            </p>
          </div>
          <div className="flex justify-between gap-6 max-[1130px]:flex-col max-[1130px]:justify-center max-[1130px]:items-center max-[870px]:w-2/3 max-sm:w-full max-sm:px-4">
            <div className="flex gap-6 max-[870px]:flex-col max-[870px]:w-full max-[870px]:items-center">
            <CompetenceItems
              color="text-violet-600"
              title="frontend"
              list={["HTML/CSS/JS", "React Js", "TailwindCSS"]}
            />
            <CompetenceItems
              color="text-blue-500"
              title="backend"
              list={["PHP", "Codigniter", "Node Js/Express"]}
            />
            </div>
            <CompetenceItems
              color="text-blue-600"
              title="programmation"
              list={["langage C", "C++", "Java"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
