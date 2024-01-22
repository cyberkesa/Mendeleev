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
          key={element.atomicNumber}
          className={`element ${selectedElement === element ? "selected" : ""}`}
          onClick={() => handleElementClick(element)}
          style={{
            gridRow: element.gridPositionRowColumn[0],
            gridColumn: element.gridPositionRowColumn[1],
            backgroundColor: element.backgroundColor,
          }}
        >
          <div className="atomic-number">{element.atomicNumber}</div>
          {element.oxidationStates.length > 0 && (
            <div className="oxidation-states">
              {element.oxidationStates.map((state, index) => (
                <div key={index}>{state}</div>
              ))}
            </div>
          )}
          <div className="atomic-weight">{element.standartAtomicWeight}</div>
          <div className="atomic">
            <div className="ionization-energy">{element.ionizationEnergy}</div>
            <div className="electronegativity">{element.electronegativity}</div>
          </div>
          <div className="chemical-symbol">{element.chemicalSymbol}</div>
          <div className="name">{element.name}</div>
          <div className="russian-name">{element.russianName}</div>
          <div
            className="electron-configuration"
            dangerouslySetInnerHTML={{
              __html: element.electronCongiguration
                .split(" ")
                .map((part, index) => {
                  const [orbit, electrons] = part.split("^");
                  return `${orbit}${
                    electrons ? `<sup>${electrons}</sup>` : ""
                  }`;
                })
                .join(" "),
            }}
          />
        </div>
      ))}
      <div className="sep"></div>
      <div className="sep1"></div>
    </div>
  );
};

export default PeriodicTable;
