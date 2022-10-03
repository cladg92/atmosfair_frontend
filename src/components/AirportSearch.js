import React, { Component } from "react";
import Settings from "./Settings";
import { ErrorAlert } from "./Alert";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

class AirportSearch extends Component {
  state = {
    query1: "",
    query2: "",
    suggestions1: [],
    suggestions2: [],
    showSuggestions1: undefined,
    showSuggestions2: undefined,
    coordinates1: [],
    coordinates2: [],
    emissions: "",
    isChecked: false,
    factor: 0.158,
    detour: 10,
    ErrorText: "",
    showSettings: false,
  };

  // Handle input change of "from" (departure airport) field and show suggestions
  handleInputChanged1 = (event) => {
    const value = event.target.value;
    if (value) {
      const suggestions1 = this.props.locations.filter((a) => {
        return a.toUpperCase().indexOf(value.toUpperCase()) > -1;
      });
      this.setState({ query1: value, suggestions1 });
    } else {
      this.setState({ query1: value, suggestions1: [] });
    }
  };

  // Handle input change of "to" (arrival airport) field and show suggestions
  handleInputChanged2 = (event) => {
    const value = event.target.value;
    if (value) {
      const suggestions2 = this.props.locations.filter((a) => {
        return a.toUpperCase().indexOf(value.toUpperCase()) > -1;
      });
      this.setState({ query2: value, suggestions2 });
    } else {
      this.setState({ query2: value, suggestions2: [] });
    }
  };

  // When suggestion in "from" (departure airport) field is selected save coordinates
  handleItemClicked1 = (suggestion) => {
    const airport1 = this.props.airports.find((a) => a.name === suggestion);
    const coordinates1 = [airport1.latitude_deg, airport1.longitude_deg];
    this.setState({
      query1: suggestion,
      showSuggestions1: false,
      coordinates1,
    });
  };

  // When suggestion in "to" field (arrival airport) is selected save coordinates
  handleItemClicked2 = (suggestion) => {
    const airport2 = this.props.airports.find((a) => a.name === suggestion);
    const coordinates2 = [airport2.latitude_deg, airport2.longitude_deg];
    this.setState({
      query2: suggestion,
      showSuggestions2: false,
      coordinates2,
    });
  };

  // Handle "roundtrip" checkbox and set in state
  handleChangeCheckbox = (event) => {
    if (event.target.checked) {
      this.setState({ isChecked: true });
    } else {
      this.setState({ isChecked: false });
    }
  };

  // Handle the factor field (kg/km) and set in state
  handleChangeFactor = (event) => {
    this.setState({ factor: event.target.value });
  };

  // Handle the detour field (km) and set in state
  handleChangeDetour = (event) => {
    this.setState({ detour: event.target.value });
  };

  // Calculate distance between two sets of coordinates
  distance_km = (c1, c2) => {
    let lat1 = c1[0];
    let lon1 = c1[1];
    let lat2 = c2[0];
    let lon2 = c2[1];
    const R = 6371e3; // metres
    const fi1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const fi2 = (lat2 * Math.PI) / 180;
    const delta_fi = ((lat2 - lat1) * Math.PI) / 180;
    const delta_lambda = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(delta_fi / 2) * Math.sin(delta_fi / 2) +
      Math.cos(fi1) *
        Math.cos(fi2) *
        Math.sin(delta_lambda / 2) *
        Math.sin(delta_lambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = (R * c) / 1000; // in km

    return d;
  };

  // Calculate emissions in tons of CO2
  emissions_tons = (distance, factor, detour) => {
    if (distance <= 16000) {
      let emissions_kg = factor * (distance + detour);
      let emissions_tons = (emissions_kg / 1000).toFixed(4);
      this.state.isChecked
        ? this.setState({ emissions: emissions_tons * 2, ErrorText: "" })
        : this.setState({ emissions: emissions_tons, ErrorText: "" });
    } else {
      this.setState({
        ErrorText: "There are no scheduled passenger flights for this route",
      });
    }
  };

  render() {
    return (
      <Container className="AirportSearch">
        <Row>
          {/* Calculator section */}
          <Col sm={8} className="calculator">
            <Card>
              <Card.Header className="card-header">Calculator</Card.Header>
              <Card.Body>
                {/* Depature airport field */}
                <input
                  type="text"
                  className="from"
                  value={this.state.query1}
                  onChange={this.handleInputChanged1}
                  onFocus={() => {
                    this.setState({ showSuggestions1: true });
                  }}
                  placeholder="from"
                />
                {/* Suggestions list */}
                <ul
                  className="suggestions suggestions1"
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
                {/* Arrival airport field */}
                <input
                  type="text"
                  className="to"
                  value={this.state.query2}
                  onChange={this.handleInputChanged2}
                  onFocus={() => {
                    this.setState({ showSuggestions2: true });
                  }}
                  placeholder="to"
                />
                {/* Suggestions list */}
                <ul
                  className="suggestions suggestions2"
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
                </ul>{" "}
                <br />
                {/* Roundtrip checkbox */}
                <label className="label">Roundtrip</label>
                <input
                  type="checkbox"
                  className="roundtrip"
                  name="roundtrip"
                  value={this.state.isChecked}
                  onChange={this.handleChangeCheckbox}
                />
                <br />
                <Button
                  className="button"
                  onClick={() =>
                    this.emissions_tons(
                      this.distance_km(
                        this.state.coordinates1,
                        this.state.coordinates2
                      ),
                      this.state.factor,
                      this.state.detour
                    )
                  }
                >
                  Calculate
                </Button>
              </Card.Body>
              <Card.Footer>
                {/* Alert message if distance > 16000km */}
                <ErrorAlert
                  className="error-alert"
                  text={this.state.ErrorText}
                />
                {/* Result section */}
                <label className="label">Result</label>
                <div className="result">{`${this.state.emissions} tons of CO2`}</div>
              </Card.Footer>
            </Card>
          </Col>
          {/* Settings section */}
          <Col sm={4} className="settings">
            <Settings
              detour={this.state.detour}
              factor={this.state.factor}
              handleChangeDetour={this.handleChangeDetour}
              handleChangeFactor={this.handleChangeFactor}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AirportSearch;
