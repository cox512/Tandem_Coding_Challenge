import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import AnswerItem from "./components/AnswerItem";

const setup = (props = {}) => {
  return shallow(<AnswerItem {...props} />);
};

test("AnswerItem Component Renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "answer-item-component");
  expect(component.length).toBe(1);
});
