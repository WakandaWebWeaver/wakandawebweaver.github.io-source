import React from "react";
import "../css/FluidText.css"; 

export default function FluidText({ text }) {
  return (
    <div className="fluid-container">
      <h2>{ text }</h2>
      <h2>{ text }</h2>
      <h2>{ text }</h2>
      <h2>{ text }</h2>
    </div>
  );
}