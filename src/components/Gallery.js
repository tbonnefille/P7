import React from "react";
import "../style.css";

import Datas from "../data/logements.json";
import { NavLink } from "react-router-dom";

function Test() {
  return (
    <div className="gallery">
      {Datas.map(logement => (
        <NavLink
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
            <p className="cardTitle">{logement.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Test;
