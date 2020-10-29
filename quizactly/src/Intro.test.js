import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Intro from "./components/Intro";

const setup = (props = {}) => {
  return shallow(<Intro {...props} />);
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
//THIS TEST ISN'T WORKING THE WAY THAT I WANT IT TO. SHOWING TRUE NO MATTER WHAT.
test("renders introductory text if showIntro is 'true'", () => {
  const wrapper = setup({ showIntro: true });
  const introMessage = findByTestAttr(wrapper, "intro-message");
  expect(introMessage.text().length).not.toBe(0);
});
//THIS TEST ISN'T WORKING ALWAYS SHOWS FALSE.
test("renders NO introductory test if showIntro is false", () => {
  const wrapper = setup({ showIntro: false });
  const introMessage = findByTestAttr(wrapper, "intro-message");
  expect(introMessage.text().length).toBe(0);
});