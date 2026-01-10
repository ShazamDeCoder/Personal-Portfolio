import React from "react";
import "./Preloader.css";

const Preloader = ({ fadeOut }) => {
  return (
    <div className={`loading ${fadeOut ? "fade-out" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Preloader;
