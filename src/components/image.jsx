import React from "react";

const img = "https://picsum.photos/200";

const customStyle2 = {
  color: "blue"
};

function Image() {
  return (
    <div className="head">
      <p style={customStyle2}>Please stop drop and roll.</p>
      <img alt="random" src={img + "?grayscale"} />
    </div>
  );
}
export default Image;
