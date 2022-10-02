import React, { Component } from "react";

import "./App.css";
import AirportSearch from "./AirportSearch";
import { mockData } from "./mock-data";
import { extractAirports } from "./api";

class App extends Component {
  state = {
    airports: mockData,
    locations: extractAirports(mockData),
  };

  render() {
    return (
      <div className="App">
        <AirportSearch
          airports={this.state.airports}
          locations={this.state.locations}
        />
      </div>
    );
  }
}

export default App;
