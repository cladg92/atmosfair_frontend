import React from "react";
import { shallow } from "enzyme";
import AirportSearch from "../AirportSearch";
import { mockData } from "../mock-data";
import { extractAirports } from "../api";

describe("<AirportSearch /> component", () => {
  let airports, locations, AirportSearchWrapper;
  beforeAll(() => {
    airports = mockData;
    locations = extractAirports(airports);
    AirportSearchWrapper = shallow(
      <AirportSearch locations={locations} airports={airports} />
    );
  });

  test("render calculate button", () => {
    expect(AirportSearchWrapper.find(".button")).toHaveLength(1);
  });

  test("render from and to fields", () => {
    expect(AirportSearchWrapper.find(".from")).toHaveLength(1);
    expect(AirportSearchWrapper.find(".to")).toHaveLength(1);
  });

  test("renders a list of suggestions", () => {
    expect(AirportSearchWrapper.find(".suggestions1")).toHaveLength(1);
    expect(AirportSearchWrapper.find(".suggestions2")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const query1 = AirportSearchWrapper.state("query1");
    const query2 = AirportSearchWrapper.state("query2");
    expect(AirportSearchWrapper.find(".from").prop("value")).toBe(query1);
    expect(AirportSearchWrapper.find(".to").prop("value")).toBe(query2);
  });

  test("change state when text input changes", () => {
    AirportSearchWrapper.setState({
      query1: "Munich",
      query2: "Rome",
    });
    const eventObject = { target: { value: "Berlin" } };
    AirportSearchWrapper.find(".from").simulate("change", eventObject);
    AirportSearchWrapper.find(".to").simulate("change", eventObject);
    expect(AirportSearchWrapper.state("query1")).toBe("Berlin");
    expect(AirportSearchWrapper.state("query2")).toBe("Berlin");
  });

  test("render list of suggestions correctly: state = ul", () => {
    AirportSearchWrapper.setState({
      suggestions1: locations,
      suggestions2: locations,
    });
    const suggestions1 = AirportSearchWrapper.state("suggestions1");
    const suggestions2 = AirportSearchWrapper.state("suggestions2");
    expect(AirportSearchWrapper.find(".suggestions1 li")).toHaveLength(
      suggestions1.length
    );
    expect(AirportSearchWrapper.find(".suggestions2 li")).toHaveLength(
      suggestions2.length
    );
    for (let i = 0; i < suggestions1.length; i += 1) {
      expect(AirportSearchWrapper.find(".suggestions1 li").at(i).text()).toBe(
        suggestions1[i]
      );
    }
    for (let i = 0; i < suggestions2.length; i += 1) {
      expect(AirportSearchWrapper.find(".suggestions2 li").at(i).text()).toBe(
        suggestions2[i]
      );
    }
  });

  test("suggestion list match the query when changed", () => {
    AirportSearchWrapper.setState({ query: "", suggestions: [] });
    AirportSearchWrapper.find(".from").simulate("change", {
      target: { value: "Berlin" },
    });
    const query = AirportSearchWrapper.state("query1");
    const filteredAirports = locations.filter((a) => {
      return a.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    expect(AirportSearchWrapper.state("suggestions1")).toEqual(
      filteredAirports
    );
  });

  test("selecting a suggestion should change query state", () => {
    AirportSearchWrapper.setState({
      query1: "Berlin",
      query2: "Montreal",
    });
    const suggestions1 = AirportSearchWrapper.state("suggestions1");
    AirportSearchWrapper.find(".suggestions1 li").at(0).simulate("click");
    expect(AirportSearchWrapper.state("query1")).toBe(suggestions1[0]);
    const suggestions2 = AirportSearchWrapper.state("suggestions2");
    AirportSearchWrapper.find(".suggestions2 li").at(0).simulate("click");
    expect(AirportSearchWrapper.state("query2")).toBe(suggestions2[0]);
  });

  test("selecting a suggestion should set coordinates", () => {
    AirportSearchWrapper.setState({
      query1: "Berlin",
      query2: "Montreal",
    });
    AirportSearchWrapper.find(".suggestions1 li").at(0).simulate("click");
    const airport1 = airports.find(
      (a) => a.name === AirportSearchWrapper.state("query1")
    );
    const coordinates1 = [airport1.latitude_deg, airport1.longitude_deg];
    expect(AirportSearchWrapper.state("coordinates1")).toEqual(coordinates1);

    AirportSearchWrapper.find(".suggestions2 li").at(0).simulate("click");
    const airport2 = airports.find(
      (a) => a.name === AirportSearchWrapper.state("query2")
    );
    const coordinates2 = [airport2.latitude_deg, airport2.longitude_deg];
    expect(AirportSearchWrapper.state("coordinates2")).toEqual(coordinates2);
  });

  test("Calculate tons of CO2", () => {
    AirportSearchWrapper.setState({
      query1: "Berlin",
      query2: "Montreal",
    });
    AirportSearchWrapper.find(".suggestions1 li").at(0).simulate("click");
    const airport1 = airports.find(
      (a) => a.name === AirportSearchWrapper.state("query1")
    );
    const coordinates1 = [airport1.latitude_deg, airport1.longitude_deg];

    AirportSearchWrapper.find(".suggestions2 li").at(0).simulate("click");
    const airport2 = airports.find(
      (a) => a.name === AirportSearchWrapper.state("query2")
    );
    const coordinates2 = [airport2.latitude_deg, airport2.longitude_deg];

    AirportSearchWrapper.find(".button").simulate("click");

    function distance_km(c1, c2) {
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
    }

    function emissions_tons(distance, factor, detour) {
      let emissions_kg = factor * (distance + detour);
      return emissions_kg / 1000;
    }

    let dist = distance_km(coordinates1, coordinates2);
    let emissions = emissions_tons(dist, 0.158, 10);

    expect(AirportSearchWrapper.state("emissions")).toBe(emissions);
  });

  test("selecting a roundtrip flight doubles the emissions", () => {
    AirportSearchWrapper.setState({
      query1: "Berlin",
      query2: "Montreal",
    });

    AirportSearchWrapper.find(".suggestions1 li").at(0).simulate("click");

    AirportSearchWrapper.find(".suggestions2 li").at(0).simulate("click");

    AirportSearchWrapper.find(".roundtrip").simulate("change", {
      target: { checked: true },
    });

    AirportSearchWrapper.find(".button").simulate("click");

    expect(AirportSearchWrapper.state("emissions")).toBe(2 * 0.953583450026314);
  });
});
