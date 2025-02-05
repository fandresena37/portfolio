import { Button } from "../ui/button";
// import { motion } from "framer-motion";
export default function Accueil() {
  return (
    <>
      <section
        className="w-screen h-screen flex bg-transparent relative overflow-x-hidden justify-center max-lg:h-auto overflow-hidden"
        id="Accueil"
      >
        <section className="w-[1100px] flex pt-20 relative items-center 2xl:w-[1400px] max-xl:w-[1000px] max-lg:w-screen max-lg:px-10 max-sm:px-3">
          <section className="bg-[linear-gradient(45deg,rgb(10,10,10,0.4),rgba(30,30,30))] w-full h-1/2 absolute z-40 mt-20 flex justify-between items-end px-[60px] max-lg:flex-col max-lg:h-[600px] max-lg:relative max-lg:mt-40 max-lg:justify-center max-md:px-10 max-sm:px-5">
            <div className="hidden max-lg:flex justify-end max-md:justify-center max-md:w-full max-md:mb-10">
              <div>
                <img src="/public/fax4.png" className="w-[200px]" />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-8 max-lg:w-full max-lg:mb-20 max-lg:relative max-lg:z-20 max-sm:items-center">
              <p className="text-4xl text-gray-300 font-semibold 3xl:text-5xl max-lg:text-4xl max-md:text-3xl max-m:text-2xl">
                BONJOUR Je suis
              </p>
              <p className="text-5xl font-semibold  text-gray-300  2xl:text-6xl max-lg:text-3xl  max-m:text-2xl  max-sm:text-center">
                RAZAFINDRATINA Faniriantsoa Henika{" "}
                <span className="text-[rgb(0,60,255)]">Fandresena</span>
              </p>
              <p className="text-[rgba(119,119,119,0.71)] text-sm font-medium max-sm:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                ipsum incidunt ea quos mollitia sequi similique dolore deleniti
                minima consequuntur,
              </p>
              <Button className="w-40 h-10 bg-[linear-gradient(90deg,rgb(0,0,255),rgba(85,12,255,0.76))] hover:bg-[rgba(85,12,255,0.76)] rounded-full font-extrabold text-[13px] text-white duration-500 max-sm:mb-20">
                Telecharger mon CV
              </Button>
            </div>
            <div className="w-1/2 flex justify-end relative max-lg:justify-center max-lg:w-full max-lg:hidden">
              {/* <div className=" absolute z-30 w-20 h-20 rounded-full bg-transparent right-10 top-20 bg-[url('/public/rect.svg')] rayure max-lg:hidden"></div> */}
              <div className="absolute z-30 w-20 h-20 rounded-full bg-transparent left-20 bottom-5 bg-[url('/public/rect2.svg')] rayure max-lg:hidden"></div>
              <div className="absolute z-30 w-20 h-20 rounded-full bg-transparent -right-24 bottom-0 bg-[url('/public/rect3.svg')] rayure max-lg:hidden"></div>
              <img src="/public/fax4.png" className="w-[320px] 2xl:w-[420px]" />
            </div>
          </section>
          <section className="bg-transparent border-[rgba(30, 30, 30, 0.7)] border-[2px] w-full h-1/2 absolute z-20 translate-x-[30px] translate-y-[30px] mt-20 max-lg:h-[600px] max-lg:w-[calc(100%-60px)] max-lg:mt-40 max-md:hidden"></section>
        </section>
      </section>
    </>
  );
}
