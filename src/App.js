import React from "react";
import "./App.css";
import PeriodicTable from "./components/PeriodicTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Periodic Table of the Elements</h1>
      </header>
      <main>
        <PeriodicTable />
      </main>
    </div>
  );
}

export default App;
