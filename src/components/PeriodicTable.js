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
          style={{
            gridRow: element.position[0],
            gridColumn: element.position[1],
          }}
        >
          <div className="atomic-number">{element.aN}</div>
          <div className="oxidation-states">
            {element.oxiS.map((state, index) => (
              <div key={index}>{state}</div>
            ))}
          </div>
          <div className="atomic-weight">{element.aW}</div>
          <div className="atomic">
            <div className="ionization-energy">{element.IE}</div>
            <div className="electronegativity">{element.eNeg}</div>
          </div>
          <div className="symbol">{element.symbol}</div>
          <div className="name">{element.name}</div>
          <div className="russian-name">{element.ru}</div>
          <div className="electron-configuration">{element.eConf}</div>
        </div>
      ))}
    </div>
  );
};

export default PeriodicTable;
