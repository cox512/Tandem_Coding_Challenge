import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Intro from "./components/Intro";

const setup = () => {
  return shallow(<Intro />);
};

test("renders without error", () => {
  const wrapper = setup();
  const introComponent = findByTestAttr(wrapper, "intro-component");
  expect(introComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "start-game-button");
  expect(button.length).toBe(1);
});
