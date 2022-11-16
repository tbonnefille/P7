import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <main>
      <section id="gallery">
        <div className="card">
          <ul className="card-ul">
            <li>
              Magnifique appartement proche
              <br />
              Canal Saint Martin
            </li>
          </ul>
        </div>

        <div className="card">
          <ul className="card-ul">
            <li>
              <Link to={"/Fiche"}>Fiche logement</Link>
              </li>
            <li><Link to={"/Composant"}>composant desktop</Link>
            </li>
          </ul>
        </div>

        <div className="card">
          <ul className="card-ul">
            <li>Titre de la</li>
            <li>location</li>
          </ul>
        </div>

        <div className="card">
          <ul className="card-ul">
            <li>Titre de la</li>
            <li>location</li>
          </ul>
        </div>

        <div className="card">
          <ul className="card-ul">
            <li>Titre de la</li>
            <li>location</li>
          </ul>
        </div>

        <div className="card">
          <ul className="card-ul">
            <li>Titre de la</li>
            <li>location</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
