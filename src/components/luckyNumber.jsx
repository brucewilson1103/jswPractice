import React from "react";

let luckyNumber = Math.floor(Math.random() * 10);
const today = new Date();

const year = today.getFullYear();

function Lucky() {
  return (
    <div>
      <p className="head number">Your lucky number is {luckyNumber}</p>
      <p className="copy">Copyright {year}.</p>
    </div>
  );
}
export default Lucky;
