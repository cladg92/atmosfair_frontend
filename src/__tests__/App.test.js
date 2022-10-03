import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import AirportSearch from "../components/AirportSearch";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render AirportSearch", () => {
    expect(AppWrapper.find(AirportSearch)).toHaveLength(1);
  });
});

describe("<App /> integration", () => {
  test('App passes "airports" state as a prop to AirportSearch', () => {
    const AppWrapper = mount(<App />);
    const AppAirportsState = AppWrapper.state("airports");
    expect(AppAirportsState).not.toEqual(undefined);
    expect(AppWrapper.find(AirportSearch).props().airports).toEqual(
      AppAirportsState
    );
    AppWrapper.unmount();
  });
});
