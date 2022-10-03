import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import AirportSearch from "./AirportSearch";
//import { mockData } from "./mock-data";
import { extractAirports } from "./api";

class App extends Component {
  state = {
    airports: [],
    locations: [],
  };

  componentDidMount() {
    axios
      .get("https://atmosfair.herokuapp.com/airports")
      .then((response) => {
        console.log(response.data.length);
        this.setState({
          airports: response.data,
          locations: extractAirports(response.data),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.airports.length);
  }

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
