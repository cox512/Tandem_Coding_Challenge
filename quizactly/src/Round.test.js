import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Round from "./components/Round";
import Intro, { onButtonClick } from "./components/Intro";

const setup = (props = { roundNumber: 0 }) => {
  return shallow(<Round {...props} />);
};

test("Round Component Renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "round-component");
  expect(component.length).toBe(1);
});

test("round starts at 0", () => {
  const wrapper = setup();
  const round = findByTestAttr(wrapper, "round");
  expect(round.text()).toBe("0");
});
