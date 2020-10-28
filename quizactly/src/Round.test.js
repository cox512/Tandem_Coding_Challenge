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
