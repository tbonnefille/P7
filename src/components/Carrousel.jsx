import React from "react";
import { useState } from "react";

import "../styles/style.css";

import VectorL from "../images/VectorBigLeft.png";
import VectorR from "../images/VectorBigRight.png";

import Data from "../data/logements.json";
import { useParams } from "react-router-dom";



function Carrousel() {


 /* Récupère la bonne fiche */
 const id = useParams();
 const ficheLogement = Data.find(logement => logement.id === id.id);

/* Origine des images */
const diapos= ficheLogement.pictures

    /* Logique des states du carrousel */
    const [currentSlide, changeImg] = useState(0);
    let imgNumber = diapos.length;

    const previousSlide = () => {
        if(currentSlide === 0) {
            changeImg(imgNumber - 1);
        } else {
            changeImg(currentSlide - 1);
        }
        return(changeImg);
    };  

    const nextSlide = () => {
        if(currentSlide === imgNumber - 1) {
            changeImg(imgNumber = 0);
        } else {
            changeImg(currentSlide + 1);
        }
        return(changeImg);
    };

    return(

<div className="carrousel-wrap">

        <div className="carrousel">
            {
                imgNumber > 1 && <img className="arrow vectorL" src={VectorL} alt="diapo précedénte" onClick={previousSlide}/>
            }
            {
                diapos.map((diapo, index) => {
                    return(
                        
                        <img key={index} className={index === currentSlide ? 'carrouselImg actif' : 'carrouselImg'} src={diapo} alt="Logement"/>
                   
                    )
                })
            }
            {
                imgNumber > 1 && <img className="arrow vectorR" src={VectorR} alt="diapo suivante" onClick={nextSlide}/>
            }
        </div>


        </div>

    );
}

export default Carrousel;