import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import { showIntro } from "./components/App";
import Intro from "./components/Intro";

const setup = (props) => {
  return shallow(<Intro {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const introComponent = findByTestAttr(wrapper, "intro-component");
  expect(introComponent.length).toBe(1);
});

test("renders start game button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "start-game-button");
  expect(button.length).toBe(1);
});

test("renders reset high score button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "reset-high-score-button");
  expect(button.length).toBe(1);
});
