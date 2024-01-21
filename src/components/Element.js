import React, { useState } from "react";
import "../Element.css";

const Element = () => {
  return (
    <div className="element-s">
      <div className="atomic-number-s">26</div>
      <div className="oxidation-states-s">
        <div>+6</div>
        <div>+5</div>
        <div>+4</div>
        <div>+3</div>
        <div>+2</div>
        <div>+1</div>
        <div>-1</div>
        <div>-2</div>
      </div>
      <div className="atomic-weight-s">55.845</div>
      <div className="atomic-s"> </div>
      <div className="ionization-energy-s">762.5</div>
      <div className="electronegativity-s">1.83</div>
      <div className="symbol-s">Fe</div>
      <div className="name-s">Iron</div>
      <div className="russian-name-s">Железо</div>
      <div className="electron-configuration-s">
        [Ar] 3d<sup>6</sup> 4s<sup>2</sup>
      </div>
    </div>
  );
};

export default Element;
