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
    { className: "q-alkali-metals", label: "alkali metals" },
    { className: "q-alkaline", label: "alkaline earth metals" },
    { className: "q-lanthanides", label: "lanthanides" },
    { className: "q-actinides", label: "actinides" },
    { className: "q-transition", label: "transition metals" },
    { className: "q-unknown", label: "unknown properties" },
    { className: "q-post", label: "post-transition metals" },
    { className: "q-metalloids", label: "metalloids" },
    { className: "q-reactive", label: "reactive nonmetals" },
    { className: "q-noble", label: "noble gases" },
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
