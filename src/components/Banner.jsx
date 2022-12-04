import React from "react";
/*
import "../style.css";
*/
import background from "../images/IMG.jpg";

function Banner() {
  return (
    <section className="section_1">
      <div
        className="banner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          background: `linear-gradient(240deg, rgba(255,255,255,0.0) 0%, rgba(0,0,0,0.3) 100%), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="bannerTxt">Chez vous, partout et ailleurs</div>
      </div>
    </section>
  );
}

export default Banner;
