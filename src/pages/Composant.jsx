import React from "react";

import Groupe2 from "../components/Groupe_2";
import Thumb from "../components/Thumb";
import CompDD from "../components/CompDD";
import CompDDL from "../components/CompDDL";
import CarrouselComp from "../components/CarrouselComp";
import PetitCarrousel from "../components/PetitCarrousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Groupe2 />,
      <Thumb />,
      <CompDD />,
      <CompDDL />,
      <CarrouselComp />,
      <PetitCarrousel />,
      <Footer />
    </div>
  );
}
