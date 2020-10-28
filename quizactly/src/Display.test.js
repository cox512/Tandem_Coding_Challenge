import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Display from "./components/Display";

const setup = (props = {}) => {
  return shallow(<Display {...props} />);
};

test("Answers Component Renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "display-component");
  expect(component.length).toBe(1);
});
