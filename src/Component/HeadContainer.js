import React from "react";
import "./headcontainer.css";

function HeadContainer({ imageSrc }) {
  return (
    <div className="main__Head">
      <img src={imageSrc} alt="Sri Lanka" className="head_Image" />
      <h1 className="head_Title">Travel in Sri Lanka</h1>
    </div>
  );
}

export default HeadContainer;
