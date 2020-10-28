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
  const button = findByTestAttr(wrapper, "start-button");
  expect(button.length).toBe(1);
});

// test("renders no text when 'showIntro' prop is false", () => {
//   const wrapper = setup({ showIntro: false });
//   const component = findByTestAttr(wrapper, "intro-component").text();
//   expect(component).toBe("");
// });

// test("renders text when 'showIntro' prop is true", () => {
//   const wrapper = setup({ showIntro: true });
//   const message = findByTestAttr(wrapper, "intro-message");
//   expect(message.text().length).not.toBe(0);
// });
