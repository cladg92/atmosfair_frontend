import React from "react";
import { shallow } from "enzyme";
import AirportSearch from "../AirportSearch";
import { mockData } from "../mock-data";
import { extractAirports } from "../api";

describe("<AirportSearch /> component", () => {
  let airports, AirportSearchWrapper;
  beforeAll(() => {
    airports = extractAirports(mockData);
    AirportSearchWrapper = shallow(<AirportSearch airports={airports} />);
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
    const airports = extractAirports(mockData);
    AirportSearchWrapper.setState({
      suggestions1: airports,
      suggestions2: airports,
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
    const filteredAirports = airports.filter((a) => {
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
});
