import React, { Component } from "react";

class AirportSearch extends Component {
  state = {
    query1: "",
    query2: "",
    suggestions1: [],
    suggestions2: [],
  };

  handleInputChanged1 = (event) => {
    const value = event.target.value;
    const suggestions1 = this.props.airports.filter((a) => {
      return a.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({ query1: value, suggestions1 });
  };

  handleInputChanged2 = (event) => {
    const value = event.target.value;
    const suggestions2 = this.props.airports.filter((a) => {
      return a.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({ query2: value, suggestions2 });
  };

  handleItemClicked1 = (suggestion) => {
    this.setState({
      query1: suggestion,
    });
  };

  handleItemClicked2 = (suggestion) => {
    this.setState({
      query2: suggestion,
    });
  };

  render() {
    return (
      <div className="AirportSearch">
        <input
          type="text"
          className="from"
          value={this.state.query1}
          onChange={this.handleInputChanged1}
        ></input>
        <ul className="suggestions1">
          {this.state.suggestions1.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked1(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key="all">
            <b>See all airports</b>
          </li>
        </ul>
        <input
          type="text"
          className="to"
          value={this.state.query2}
          onChange={this.handleInputChanged2}
        ></input>
        <ul className="suggestions2">
          {this.state.suggestions2.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked2(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key="all">
            <b>See all airports</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default AirportSearch;
