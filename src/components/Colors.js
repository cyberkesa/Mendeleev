import React, { useState } from "react";
import "../Colors.css";

const Colors = () => {
  return (
    <div className="colors">
      <div className="colors-table">
        <div className="q q-alkali-metals"></div>
        <span className="alkali-metals">alkali metals</span>
        <div className="q q-alkaline"></div>
        <span className="alkaline">alkaline earth metals</span>
        <div className="q q-lanthanides"></div>
        <span className="lanthanides">lanthanides</span>
        <div className="q q-actinides"></div>
        <span className="actinides">actinides</span>
        <div className="q q-transition"></div>
        <span className="transition">transition metals</span>
        <div className="q q-unknown"></div>
        <span className="unknown">unknown properties</span>

        <div className="q q-post"></div>
        <span className="post">post-transition metals</span>

        <div className="q q-metalloids"></div>
        <span className="metalloids">metalloids</span>

        <div className="q q-reactive"></div>
        <span className="reactive">reactive nonmetals</span>

        <div className="q q-noble"></div>
        <span className="noble">noble gases</span>
      </div>
    </div>
  );
};

export default Colors;
