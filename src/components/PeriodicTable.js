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
            backgroundColor: element.color,
          }}
        >
          <div className="atomic-number">{element.aN}</div>
          {element.oxiS.length > 0 && (
            <div className="oxidation-states">
              {element.oxiS.map((state, index) => (
                <div key={index}>{state}</div>
              ))}
            </div>
          )}
          <div className="atomic-weight">{element.aW}</div>
          <div className="atomic">
            <div className="ionization-energy">{element.IE}</div>
            <div className="electronegativity">{element.eNeg}</div>
          </div>
          <div className="symbol">{element.symbol}</div>
          <div className="name">{element.name}</div>
          <div className="russian-name">{element.ru}</div>
          <div
            className="electron-configuration"
            dangerouslySetInnerHTML={{
              __html: element.eConf
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
