import React from "react";
import "../style.css";
import ArrowBack from "../images/arrow_back_ios-24px 2.png";

function A_Propos() {
  return (


    <main>

        

        <section className="ddl-wrap">

            <div className="dropdownlarge-close">

                <div className="dropdownlarge-close-shape">
                    <p>Fiabilité</p>
                    <img src={ArrowBack} alt="flêche vers le bas"/>
                </div>

            </div>

            <div className="dropdownlarge-close">

                <div className="dropdownlarge-close-shape">
                    <p>Respect</p>
                    <img src={ArrowBack} alt="flêche vers le bas"/>
                </div>

            </div>

            <div className="dropdownlarge-close">
                <div className="dropdownlarge-close-shape">
                    <p>Service</p>
                    <img src={ArrowBack} alt="flêche vers le bas"/>
                </div>

            </div>

            <div className="dropdownlarge-close">

                <div className="dropdownlarge-close-shape">
                    <p>Sécurité</p>
                    <img src={ArrowBack} alt="flêche vers le bas"/>
                </div>

            </div>

        </section>

        <div className="Miguel">
            <p>Miguel</p>
        </div>

    </main>

    );
}

export default A_Propos;
