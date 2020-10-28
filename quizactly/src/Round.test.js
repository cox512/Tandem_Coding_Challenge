import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Round from "./components/Round";

const setup = (props = {}) => {
  return shallow(<Round {...props} />);
};

test("Round Component Renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "round-component");
  expect(component.length).toBe(1);
});
//NOT WORKING COME BACK TO
test("round starts at 0", () => {
  const wrapper = setup();
  const round = findByTestAttr(wrapper, "round");
  expect(round.text()).toBe("0");
});

test("clicking on 'start-game' button increments round display", () => {
  const wrapper = setup();
  //Find the button
  const button = findByTestAttr(wrapper, "start-game-button");
  //Click the button. This requires the simulate() method from Enzyme.
  button.simulate("click");
  //Find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, "round").text();
  expect(count).toBe("1");
});
