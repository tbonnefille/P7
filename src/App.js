import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/A-Propos";
import Err404 from "./pages/Err404";
import Fiche from "./pages/Fiche";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="Fiche/:id" element={<Fiche />} />
        <Route path="/*" element={<Err404 />} />
      </Routes>
    </div>
  );
}

export default App;

/*https://stackoverflow.com/questions/46160461/how-do-you-set-the-document-title-in-react*/
/*&and;
      &or;

      &#9734; &#9733;

*/
