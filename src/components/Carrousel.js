import React from "react";
import "../style.css";
import VectorL from "../images/VectorBigLeft.png";
import VectorR from "../images/VectorBigRight.png";

function Carrousel() {
  return (
    <div className="carrousel-wrap">
      <div className="carrouselMockup">
        <div className="vectorBox">
          <div className="vectorLeft">
            <img src={VectorL} alt="" />
          </div>

          <div className="vectorRight">
            <img src={VectorR} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
