import React, { useState } from "react";
import "../style.css";

import VectorL from "../images/VectorBigLeft.png";
import VectorR from "../images/VectorBigRight.png";


import Datas from "../data/logements.json";
import { useParams } from "react-router-dom";




/* ATTENTION: images= prop => data.object.pictures */
function Carrousel() {


 /* Récupère la bonne fiche */
 const id = useParams();
 const ficheLogement = Datas.find(logement => logement.id === id.id);


const images= ficheLogement.pictures



    /* Crée un Hook d'état */
    let [imgAfficher, changerImg] = useState(0);
    let nombreImg = images.length;

    const imgPrecedente = () => {
        if(imgAfficher === 0) {
            changerImg(nombreImg - 1);
        } else {
            changerImg(imgAfficher - 1);
        }
        return(changerImg);
    };  

    const imgSuivante = () => {
        if(imgAfficher === nombreImg - 1) {
            changerImg(nombreImg = 0);
        } else {
            changerImg(imgAfficher + 1);
        }
        return(changerImg);
    };

    return(
        <div className="carrousel">
            {
                nombreImg > 1 && <img className="fleche fleche-gauche" src={VectorL} alt="Contenu précedént" onClick={imgPrecedente}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === imgAfficher ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                nombreImg > 1 && <img className="fleche fleche-droite" src={VectorR} alt="Contenu suivant" onClick={imgSuivante}/>
            }
        </div>
    );
}

export default Carrousel;