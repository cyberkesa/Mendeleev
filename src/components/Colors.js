import React, { useState } from "react";
import "../Element.css";

const Colors = () => {
  return (
    <div className="colors-table">
      <span className="q-alkali-metals"></span>
      <span className="alkali-metals">alkali metals</span>

      <span className="q-alkaline"></span>
      <span className="alkaline">alkaline earth metals</span>

      <span className="q-lanthanides"></span>
      <span className="lanthanides">lanthanides</span>

      <span className="q-actinides"></span>
      <span className="actinides">actinides</span>

      <span className="q-actinides"></span>
      <span className="actinides">transition metals</span>

      <span className="q-unknown"></span>
      <span className="unknown">unknown properties</span>

      <span className="q-post"></span>
      <span className="post">post-transition metals</span>

      <span className="q-metalloids"></span>
      <span className="metalloids">metalloids</span>

      <span className="q-reactive"></span>
      <span className="reactive">reactive nonmetals</span>

      <span className="q-noble"></span>
      <span className="noble">noble gases</span>
    </div>
  );
};

export default Colors;
