import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import AirportSearch from "./components/AirportSearch";
//import { mockData } from "./mock-data";
import { extractAirports } from "./components/api";

class App extends Component {
  state = {
    airports: [],
    locations: [],
  };

  // Get list of airports and set state
  componentDidMount() {
    axios
      .get("https://atmosfair.herokuapp.com/airports")
      .then((response) => {
        this.setState({
          airports: response.data,
          locations: extractAirports(response.data),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="page-title">Atmosfair</h1>
        <h4 className="page-sub">Calculate your flight's emissions</h4>
        <AirportSearch
          airports={this.state.airports}
          locations={this.state.locations}
        />
      </div>
    );
  }
}

export default App;
