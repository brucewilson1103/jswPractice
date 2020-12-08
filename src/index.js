import React from "react";
import ReactDOM from "react-dom";
import Heading from "./heading";
import Lucky from "./luckyNumber";
import Image from "./image";
import App from "./App";

ReactDOM.render(
  <div>
    <Heading />
    <Image />
    <Lucky />
  </div>,
  document.getElementById("root")
);
