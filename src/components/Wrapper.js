import React from "react";
import "../style.css";

function Wrapper() {
  return (
    <section id="wrapper">

            <div id="title-tag">

                <div>
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <p>Paris, Île-de-France</p>
                </div>

                <div id="tag-wrap">

                    <div class="tag">
                        <p>Cozy</p>
                    </div>

                    <div class="tag">
                        <p>Canal</p>
                    </div>

                    <div class="tag">
                        <p>Paris 10</p>
                    </div>
                </div>

            </div>

            <div id="host-rating">

                <div id="HOST">
                    <div id="name">
                        <ul>
                            <li>Alexandre</li>
                            <li>Dumas</li>
                        </ul>
                    </div>
                    <div id="circle"></div>
                </div>

                <div id="rating">
                    <i class="fas fa-star star fa-xl"></i>P
                    <i class="fas fa-star star fa-xl"></i>P
                    <i class="fas fa-star star fa-xl"></i>P
                    <i class="fa-regular fa-star fa-xl"></i>V
                    <i class="fa-regular fa-star fa-xl"></i>V
                </div>

            </div>


        </section>
  );
}

export default Wrapper;
