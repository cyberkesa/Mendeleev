import React from "react";
import "../Colors.css";

const ColorItem = ({ className, label }) => (
  <div className="color-item">
    <div className={`q ${className}`}></div>
    <span>{label}</span>
  </div>
);

const Colors = () => {
  const colorItems = [
    { className: "q-alkali-metals", label: "alkali metals – щелочные металлы" },
    {
      className: "q-alkaline",
      label: "alkaline earth metals – щёлочноземельные металлы",
    },
    { className: "q-lanthanides", label: "lanthanides – лантаноиды" },
    { className: "q-actinides", label: "actinides – актиноиды" },
    {
      className: "q-transition",
      label: "transition metals – переходные металлы ",
    },
    { className: "q-unknown", label: "unknown properties" },
    {
      className: "q-post",
      label: "post-transition metals – постпереходные металлы",
    },
    { className: "q-metalloids", label: "metalloids – полуметаллы" },
    { className: "q-reactive", label: "reactive nonmetals – неметаллы" },
    { className: "q-noble", label: "noble gases – благородные газы" },
  ];

  return (
    <div className="colors">
      <div className="colors-table">
        {colorItems.map((item, index) => (
          <ColorItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Colors;
