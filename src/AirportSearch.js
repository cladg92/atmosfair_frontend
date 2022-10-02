import React, { Component } from "react";

class AirportSearch extends Component {
  state = {
    query1: "",
    query2: "",
    suggestions1: [],
    suggestions2: [],
    showSuggestions1: undefined,
    showSuggestions2: undefined,
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
      showSuggestions1: false,
    });
  };

  handleItemClicked2 = (suggestion) => {
    this.setState({
      query2: suggestion,
      showSuggestions2: false,
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
          onFocus={() => {
            this.setState({ showSuggestions1: true });
          }}
        />
        <ul
          className="suggestions1"
          style={this.state.showSuggestions1 ? {} : { display: "none" }}
        >
          {this.state.suggestions1.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked1(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="to"
          value={this.state.query2}
          onChange={this.handleInputChanged2}
          onFocus={() => {
            this.setState({ showSuggestions2: true });
          }}
        />
        <ul
          className="suggestions2"
          style={this.state.showSuggestions2 ? {} : { display: "none" }}
        >
          {this.state.suggestions2.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked2(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AirportSearch;
