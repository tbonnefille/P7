import React from "react";
import { useState } from "react";

import ArrowBack from "../images/arrow_back_ios-24px 2.png";
import ArrowNext from "../images/Vector.png";



function Collapse(props) {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className={`accordion ${active && "active"}`}>
      <div className="dropdownlarge">
        <div className="dropdownlarge-shape">
          <p className="collapseTitre">{props.titre}</p>

          <div className="toggle" onClick={handleToggle}>
            <img
            className = "arrowDown"
              src={ArrowBack}
              alt="flêche vers le bas"
            />
            <img
            className = "arrowUp"
              src={ArrowNext}
              alt="flêche vers le haut"
            />
          </div>
        </div>
        <div className="ddp">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
