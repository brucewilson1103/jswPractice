import React from "react";
import ReactDOM from "react-dom";
let luckyNumber = 7;
const today = new Date();
const year = today.getFullYear();

ReactDOM.render(
  <div>
    <h1>Hey World</h1>
    <p>Please stop drop and roll.</p>
    <p>Your lucky number is {luckyNumber}</p>
    <p>Copyright {year}.</p>
  </div>,
  document.getElementById("root")
);
