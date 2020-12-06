import React from "react";
import ReactDOM from "react-dom";
let luckyNumber = 7;
const today = new Date();
const year = today.getFullYear();
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="head"> Hey World</h1>
    <p>Please stop drop and roll.</p>
    <img alt="random" src={img + "?grayscale"} />
    <p>Your lucky number is {luckyNumber}</p>
    <p>Copyright {year}.</p>
  </div>,
  document.getElementById("root")
);
