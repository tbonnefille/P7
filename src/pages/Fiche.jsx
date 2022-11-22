import React from "react";

import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Wrapper from "../components/Wrapper";
import Content from "../components/Content";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";






export default function Fiche() {


  const { id } = useParams();
  const {title} = useParams();
console.log("ID = "+id);
console.log(title);

  /*
  const params = useParams ();
  console.log(params);
  
*/



  return (
    <div>
      <Header />,
      <Carrousel />,
      <Wrapper />,
      <Content />,
      <Footer />
    </div>
  );
}
