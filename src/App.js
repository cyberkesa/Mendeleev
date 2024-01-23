import React from "react";
import "./App.css";
import "./Adaptive.css";
import PeriodicTable from "./components/PeriodicTable";
import Colors from "./components/Colors";
import Element from "./components/Element";
import ElectronConfiguration from "./components/ElectronConfiguration";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Periodic Table of the Elements</h1>
      </header>
      <main>
        <Element />
        <PeriodicTable />
        <ElectronConfiguration />
        <Colors />
      </main>
    </div>
  );
}

export default App;
