import React from "react";

let luckyNumber = Math.floor(Math.random() * 10);
const today = new Date();

const year = today.getFullYear();

function Lucky() {
  return (
    <div>
      <p className="head">Your lucky number is {luckyNumber}</p>
      <p>Copyright {year}.</p>
    </div>
  );
}
export default Lucky;
