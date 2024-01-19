import React, { useState } from "react";
import "../PeriodicTable.css";
import elementsData from "../elementsData.json";

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  return (
    <div className="periodic-table">
      {elementsData.map((element) => (
        <div
          key={element.id}
          className={`element ${selectedElement === element ? "selected" : ""}`}
          onClick={() => handleElementClick(element)}
        >
          <div className="atomic-number">{element.atomicNumber}</div>
          <div className="symbol">{element.symbol}</div>
          <div className="name">{element.name}</div>
          <div className="atomic-weight">{element.atomicWeight}</div>
          <div className="ionization-energy">
            {element.ionizationEnergy} kJ/mol
          </div>
          <div className="russian-name">{element.russianName}</div>
          <div className="electron-configuration">
            {element.electronConfiguration}
          </div>
          <div className="electronegativity">{element.electronegativity}</div>
          <div className="oxidation-states">{element.oxidationStates}</div>
        </div>
      ))}
    </div>
  );
};

export default PeriodicTable;
