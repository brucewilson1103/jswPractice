import React from "react";
import ReactDOM from "react-dom";
import Heading from "./heading.jsx";
import Lucky from "./luckyNumber";

const img = "https://picsum.photos/200";

const customStyle2 = {
  color: "blue"
};
const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
    <Heading />
    <p style={customStyle2}>Please stop drop and roll.</p>
    <img alt="random" src={img + "?grayscale"} />
    <Lucky />
  </div>,
  document.getElementById("root")
);
