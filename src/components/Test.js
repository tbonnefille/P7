import React from "react";
import "../style.css";

import Datas from "../data/logements.json";
/*
import { Link } from "react-router-dom";
*/
import { NavLink } from "react-router-dom";

function Test() {
  console.log(" ID = " + Datas[1].id);

 
  return(
   
    



        <div className="gallery">

            {Datas.map((logement) => 
            <NavLink className="xxx" key={logement.id} to={"/Fiche/"+logement.id+"/#"}>

                <div className="testcard" key={logement.id} >


                            <img className="img" src={logement.cover} alt="logement" />
                           
                            <p id="aaa">{logement.title}</p>
</div>


            </NavLink>)}



        </div>
  
);
}

export default Test;
