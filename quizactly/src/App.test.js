import React from "react";
import { shallow } from "enzyme";

import App from "./components/App";
import { findByTestAttr } from "../test/testUtils";

const setup = () => {
  return shallow(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "app-component");
  expect(appComponent.length).toBe(1);
});
