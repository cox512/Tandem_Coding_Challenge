import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Question from "./components/Question";

const setup = (props = {}) => {
  return shallow(<Question {...props} />);
};

test("Answers Component Renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "question-component");
  expect(component.length).toBe(1);
});
