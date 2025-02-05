import Header from "./Header";
import Accueil from "./Accueil";
import Competence from "./Competence";
import Projet from "./Projet";
import Footer from "./Footer";
import { Electricbg } from "./ElectricBg";
export default function Home() {
  return (
    <>
      <div className="w-screen flex flex-col items-center overflow-x-hidden">
        <Electricbg />
        <Header />
        <Accueil />
        <Competence />
        <Projet />
        <Footer />
      </div>
    </>
  );
}
