import React from "react";
import "../style.css";

import Datas from "../data/logements.json";

import { useParams} from 'react-router-dom';




function Wrapper() {

/* Récupère la bonne fiche */
const id = useParams();
const ficheLogement = Datas.find(logement => logement.id === id.id);

console.table(ficheLogement)

/* Tags */
const tagsLogement = ficheLogement.tags.map((tags, index) => {
    return <div className="tag" key={index}> {tags}</div>
});



console.log("AUTEUR = "+ficheLogement.host.name)






const description = ficheLogement.description;

console.log("desc = "+description)

  return (
    <section id="wrapper">

            <div id="title-tag">

                <div>
                    <h1>{ficheLogement.title}</h1>
                    <p>{ficheLogement.location}</p>
                </div>

                <div id="tag-wrap">

                
                    {tagsLogement}
                    

                   
                </div>

            </div>

            <div id="host-rating">

                <div id="host">
                    <div id="name">

                 {ficheLogement.host.name}


                       
                    </div>
                    <div id="circle">
                    <img className="imgPortrait" src={ficheLogement.host.picture} alt="portrait" />
                    </div>
                </div>

                <div id="rating">
                   &#9733;&#9733;&#9733;&#9734;&#9734;
                   
                </div>

            </div>


        </section>
  );
}

export default Wrapper;
