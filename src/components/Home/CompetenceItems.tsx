import { cn } from "@/lib/utils";
import { Code2Icon } from "lucide-react";
export default function CompetenceItems({
  color,
  title,
  list,
}: {
  color: string;
  title: string;
  list: string[];
}) {
  return (
    <>
      <section className="bg-[rgb(30,30,30,0.6)] w-[350px] h-[220px] flex flex-col items-center justify-center gap-3 2xl:w-[400px] 2xl:h-[280px] max-[1130px]:w-[450px] max-[1130px]:h-[300px] max-[1130px]:gap-6 max-lg:w-[400px] max-lg:h-[250px] max-lg:gap-3 max-[870px]:w-full">
        <div className="bg-muted/40 w-10 h-10 rounded-full flex items-center justify-center max-[1130px]:w-16 max-[1130px]:h-16">
          <Code2Icon className={cn("translate-x-3 w-7 h-7", color)} />
        </div>
        <h1 className="text-white font-bold max-[1130px]:text-2xl max-lg:text-lg ">{title}</h1>
        <div className="flex gap-1">
          <span className="w-[20px] h-[2px] bg-[rgb(0,60,255)] rounded-sm"></span>
          <span className="w-[10px] h-[2px] bg-[rgb(0,60,255)] rounded-sm"></span>
        </div>
        <div>
          <ul className="text-sm text-muted-foreground/50 font-semibold">
            {list.map((items, index) => (
              <li key={index} className="list-item">
                {items}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
