import React from "react";
import "./App.css";
import AirportSearch from "./AirportSearch";
import { mockData } from "./mock-data";
import { extractAirports } from "./api";

function App() {
  return (
    <div className="App">
      <AirportSearch airports={extractAirports(mockData)} />
    </div>
  );
}

export default App;
