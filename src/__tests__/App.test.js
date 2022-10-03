import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import AirportSearch from "../components/AirportSearch";

// Unit tests for App component
describe("<App /> component", () => {
  // shallow rendering
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render AirportSearch", () => {
    expect(AppWrapper.find(AirportSearch)).toHaveLength(1);
  });
});

// Integration test of App component with AirportSearch component
describe("<App /> integration", () => {
  test('App passes "airports" state as a prop to AirportSearch', () => {
    // full rendering
    const AppWrapper = mount(<App />);
    const AppAirportsState = AppWrapper.state("airports");

    expect(AppAirportsState).not.toEqual(undefined);
    expect(AppWrapper.find(AirportSearch).props().airports).toEqual(
      AppAirportsState
    );

    AppWrapper.unmount();
  });
});
