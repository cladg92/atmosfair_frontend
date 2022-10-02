import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import AirportSearch from "../AirportSearch";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render AirportSearch", () => {
    expect(AppWrapper.find(AirportSearch)).toHaveLength(1);
  });
});
