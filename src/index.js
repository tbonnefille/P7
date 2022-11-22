import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";




// V5
// ReactDOM.render(
 
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
  
//   document.getElementById("root")
// );

// V6
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);





