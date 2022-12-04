import React from "react";
/*
import "../style.css";
*/
import Data from "../data/logements.json";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="gallery">
      {Data.map(logement => (
        <Link
          className="cardHolder"
          key={logement.id}
          to={"/Fiche/" + logement.id + "/#"}
        >
          <div
            className="card"
            key={logement.cover}
            style={{
              display: "flex",
              alignItems: "flex-end",
              height: "340px",
              width: "100%",
              borderRadius: "10px",
              color: "white",
              background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 100%), url(${logement.cover})`,
              backgroundSize: "cover",
              marginBottom: "4%"
            }}
          >
            <div className="cardTitle">{logement.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
